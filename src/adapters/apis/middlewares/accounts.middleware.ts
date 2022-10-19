import express from 'express';
import readClientUsecase from '../../../domain/usecases/clients/read.client.usecase';
import readAccountUsecase from '../../../domain/usecases/accounts/read.account.usecase';
import debug from 'debug';

const log: debug.IDebugger = debug('app:users-middleware');

class AccountsMiddleware {
    async validateRequiredAccountBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if (req.body && req.body.clientId !== undefined) {
            next();
        } else {
            res.status(400).send({error: `Verifique os campos obrigatórios para criar uma conta.`});
        }
    }

    async validateClientExists(req: express.Request, res: express.Response, next: express.NextFunction) {
        const user = await readClientUsecase.execute({
            clientId: Number(req.body.clientId)
        });
        if (user) {
            next();
        } else {
            res.status(404).send({error: `Usuário ${req.body.clientId} não existe`});
        }
    }

    async validateAccountExists(req: express.Request, res: express.Response, next: express.NextFunction) {
        const account = await readAccountUsecase.execute({
            accountId: Number(req.params.accountId)
        });
        if (account) {
            next();
        } else {
            res.status(404).send({error: `Account ${req.params.accountId} não existe`});
        }
    }

    async validateAccountRepeated(req: express.Request, res: express.Response, next: express.NextFunction) {
        let resourceID: number = req.body.accountNumber;
        const account = await readAccountUsecase.execute({
            accountId: resourceID
        });
        if (!account) {
            next();
        } else {
            res.status(409).send({error: `Conta ${resourceID} já existe`});
        }
    }
}

export default new AccountsMiddleware();