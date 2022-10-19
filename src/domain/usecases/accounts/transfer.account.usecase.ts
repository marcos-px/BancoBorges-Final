import { AccountEntity } from "../../entities/accounts/account.entity";
import { IAccountsRepository } from "../../repositories/accounts.repository.interface";
import accountsRepository from "../../../adapters/repositories/accounts.repository";
import { IUseCase } from "../usecase.interface";
import withdrawAccountUseCase from "./withdraw.account.usecase";
import depositAccountUseCase from "./deposit.account.usecase";

class TransferAccountUseCase implements IUseCase {

    constructor(private _repository: IAccountsRepository) {

    }

    async execute(data: { sourceAccountId: number, value: number, targetAccountId: number }): Promise<AccountEntity | undefined> {
        let sourceAccount: AccountEntity | undefined;
        try{
            const targetAccount = await accountsRepository.readById(data.targetAccountId);
            if(!targetAccount){
                throw new Error('Não foi possível encontrar os recursos na conta destino.');
            }

            sourceAccount = await withdrawAccountUseCase.execute({
                accountId: data.sourceAccountId, 
                value: data.value
            });

            if(!sourceAccount){
                throw new Error('Não foi possível encontrar os recursos na conta origem.');
            } else if(!('transferLimit' in sourceAccount) || !('transferLimit' in targetAccount)) {
                throw new Error('Não é possível fazer transferencias envolvendo contas poupança.');
            }
        } catch(error) {
            throw error;
        }
        
        try{
            if(sourceAccount.transferLimit < data.value){
                throw new Error(`Valor acima do limite de transferência diário: ${sourceAccount.transferLimit}.`);
            }

            return await depositAccountUseCase.execute({
                accountId: data.targetAccountId, 
                value: data.value
            });
        } catch(error) {
            await depositAccountUseCase.execute({
                accountId: data.sourceAccountId, 
                value: data.value
            });
            throw error;
        }
    }
}

export default new TransferAccountUseCase(
    accountsRepository
);