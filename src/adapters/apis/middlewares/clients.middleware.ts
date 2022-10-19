import express from 'express';
// import clientsService from '../../common/services/clients.service';
import readClientUsecase from '../../../domain/usecases/clients/read.client.usecase';
import debug from 'debug';
import multer from 'multer';
import path from 'path';
import xlsxFilesInterface from '../../../infrastructure/files/xlsx.files';
import logger from '../../../infrastructure/logs/winston.logs';
import cpfvalidationHelpersAdapters from '../../helpers/cpfvalidation.helpers.adapters';
import constantsConfig from '../../../infrastructure/config/constants.config';

const log: debug.IDebugger = debug('app:clients-middleware');

class ClientsMiddleware {
    async validateRequiredClientBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if (req.body && (req.body.cpf || req.body.cnpj)) {
            if(req.body.cpf && !cpfvalidationHelpersAdapters(req.body.cpf)){
                res.status(400).send({error: constantsConfig.CLIENTS.MESSAGES.ERROR.INVALID_CPF});
            } else {
                next();
            }
        } else {
            res.status(400).send({error: constantsConfig.CLIENTS.MESSAGES.ERROR.VOID_CPF_CNPJ});
        }
    }

    async validateClientExists(req: express.Request, res: express.Response, next: express.NextFunction) {
        const client = await readClientUsecase.execute({
            clientId: Number(req.params.clientId)
        });
        if (client) {
            logger.info(['Cliente encontrado: ', client]);
            next();
        } else {
            logger.error(`Usuário ${req.params.clientId} não existe`);
            res.status(404).send({error: constantsConfig.CLIENTS.MESSAGES.ERROR.USER_NOT_EXISTS.replace('{USER_ID}', req.params.clientId)});
        }
    }

    async validateClientRepeated(req: express.Request, res: express.Response, next: express.NextFunction) {
        let resourceID: number = ('cpf' in req.body ? req.body.cpf : req.body.cnpj);
        const client = await readClientUsecase.execute({
            clientId: resourceID
        });
        if (!client) {
            next();
        } else {
            res.status(409).send({error: constantsConfig.CLIENTS.MESSAGES.ERROR.USER_ALREADY_EXISTS.replace('{USER_ID}', String(resourceID))});
        }
    }

    uploadFile(){
        return multer({
            storage: multer.diskStorage({
                destination: (req, file, cb) => {
                    cb(null, path.resolve("uploads"));
                },
                filename: (req, file, cb) => {
                    cb(null, `${Date.now()}-${file.originalname.toLocaleLowerCase()}`)
                },
            }),
        });
    }

    async parseXlsx(req: express.Request, res: express.Response, next: express.NextFunction){
        req.body.fileData = xlsxFilesInterface.parse(req.file!.path);
        next();
    }
}

export default new ClientsMiddleware();