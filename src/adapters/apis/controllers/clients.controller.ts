import express from 'express';
import createClientUsecase from '../../../domain/usecases/clients/create.client.usecase';
import readClientUsecase from '../../../domain/usecases/clients/read.client.usecase';
import updateClientUsecase from '../../../domain/usecases/clients/update.client.usecase';
import deleteClientUsecase from '../../../domain/usecases/clients/delete.client.usecase';
import listClientUsecase from '../../../domain/usecases/clients/list.client.usecase';
import debug from 'debug';

const log: debug.IDebugger = debug('app:clients-controller');

class ClientsController {
    async listClients(req: express.Request, res: express.Response){
        const clients = await listClientUsecase.execute();
        res.status(200).send(clients);
    }

    async getClientById(req: express.Request, res: express.Response) {
        const client = await readClientUsecase.execute({
            clientId: Number(req.params.clientId)
        });
        res.status(200).send(client);
    }

    async createClient(req: express.Request, res: express.Response) {
        const client = await createClientUsecase.execute(req.body);
        log(client);
        res.status(201).send(client);
    }

    async updateClient(req: express.Request, res: express.Response) {
        const client = await updateClientUsecase.execute(req.body);
        res.status(200).send(client);
    }

    async removeClient(req: express.Request, res: express.Response) {
        const client = await deleteClientUsecase.execute({
            clientId: Number(req.params.clientId)
        });
        res.status(204).send();
    }

    async createClientBulk(req: express.Request, res: express.Response) {
        let countUsers = 0;
        for(countUsers = 0; countUsers < req.body.fileData.length; countUsers++){
            await createClientUsecase.execute(req.body.fileData[countUsers]);
        }
        res.status(201).send({
            createdUsers: countUsers
        });
    }
}

export default new ClientsController();