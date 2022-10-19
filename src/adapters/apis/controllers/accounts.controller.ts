import express from 'express';
import createAccountUsecase from '../../../domain/usecases/accounts/create.account.usecase';
import readAccountUsecase from '../../../domain/usecases/accounts/read.account.usecase';
import updateAccountUsecase from '../../../domain/usecases/accounts/update.account.usecase';
import deleteAccountUsecase from '../../../domain/usecases/accounts/delete.account.usecase';
import listAccountUsecase from '../../../domain/usecases/accounts/list.account.usecase';
import depositAccountUsecase from '../../../domain/usecases/accounts/deposit.account.usecase';
import withdrawAccountUsecase from '../../../domain/usecases/accounts/withdraw.account.usecase';
import transferAccountUsecase from '../../../domain/usecases/accounts/transfer.account.usecase';
import debug from 'debug';

const log: debug.IDebugger = debug('app:accounts-controller');

class AccountsController { 
    async listAccounts(req: express.Request, res: express.Response){
        const accounts = await listAccountUsecase.execute();
        res.status(200).send(accounts);
    }

    async getAccountById(req: express.Request, res: express.Response) {
        const account = await readAccountUsecase.execute({
            accountId: Number(req.params.accountId)
        });
        res.status(200).send(account);
    }

    async createAccount(req: express.Request, res: express.Response) {
        const account = await createAccountUsecase.execute(req.body);
        log(account);
        res.status(201).send(account);
    }

    async updateAccount(req: express.Request, res: express.Response) {
        const account = await updateAccountUsecase.execute(req.body);
        res.status(200).send(account);
    }

    async removeAccount(req: express.Request, res: express.Response) {
        await deleteAccountUsecase.execute({
            accountId: Number(req.params.accountId)
        });
        
        res.status(204).send();
    }

    async deposit(req: express.Request, res: express.Response) {
        try{
            const account = await depositAccountUsecase.execute({
                accountId: Number(req.params.accountId), 
                value: req.body.value
            });
            res.status(200).send(account);
        } catch (error) {
            res.status(500).send({
                message: (error as Error).message
            });
        }
    }

    async withdraw(req: express.Request, res: express.Response) {
        try{
            const account = await withdrawAccountUsecase.execute({
                accountId: Number(req.params.accountId), 
                value: req.body.value
            });
            res.status(200).send(account);
        } catch (error) {
            res.status(500).send({
                message: (error as Error).message
            });
        }
    }

    async transfer(req: express.Request, res: express.Response) {
        try{
            const account = await transferAccountUsecase.execute({
                sourceAccountId: Number(req.params.accountId), 
                value: req.body.value,
                targetAccountId: req.body.targetAccountId
            });
            res.status(200).send(account);
        } catch (error) {
            res.status(500).send({
                message: (error as Error).message
            });
        }
    }
}

export default new AccountsController();