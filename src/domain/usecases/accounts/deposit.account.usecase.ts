import { AccountEntity } from "../../entities/accounts/account.entity";
import { IAccountsRepository } from "../../repositories/accounts.repository.interface";
import accountsRepository from "../../../adapters/repositories/accounts.repository";
import { IUseCase } from "../usecase.interface";

class DepositAccountUseCase implements IUseCase {

    constructor(private _repository: IAccountsRepository) {

    }

    async execute(data: { accountId: number, value: number }): Promise<AccountEntity | undefined> {
        if(data.value <= 0) {
            throw new Error("O valor deve ser maior que zero.");
        }
        const account = await accountsRepository.readById(data.accountId);
        if(!account){
            throw new Error("Conta não encontrada para depósito.");
        }

        account.balance += data.value;
        return accountsRepository.updateById(account);
    }
}

export default new DepositAccountUseCase(
    accountsRepository
);