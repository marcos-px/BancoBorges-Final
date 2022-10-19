import { AccountEntity } from "../../entities/accounts/account.entity";
import { IAccountsRepository } from "../../repositories/accounts.repository.interface";
import accountsRepository from "../../../adapters/repositories/accounts.repository";
import { IUseCase } from "../usecase.interface";

class WithdrawAccountUseCase implements IUseCase {

    constructor(private _repository: IAccountsRepository) {

    }

    async execute(data: { accountId: number, value: number }): Promise<AccountEntity | undefined> {
        if(data.value <= 0) {
            throw new Error("O valor deve ser maior que zero.");
        }
        
        const account = await accountsRepository.readById(data.accountId);
        
        if(!account) {
            throw new Error("Conta não encontrada para saque.");
        } else if (account.balance < data.value) {
            throw new Error("Você não tem saldo suficiente para esse saque.");
        }

        account.balance -= data.value;
        
        /**
         * Aqui teria algum comando para envio do dinheiro para o cliente em um ambiente real.
         */

        return accountsRepository.updateById(account);
    }
}

export default new WithdrawAccountUseCase(
    accountsRepository
);