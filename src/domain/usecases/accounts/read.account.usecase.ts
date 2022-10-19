import { AccountEntity } from "../../entities/accounts/account.entity";
import { IAccountsRepository } from "../../repositories/accounts.repository.interface";
import accountsRepository from "../../../adapters/repositories/accounts.repository";
import { IUseCase } from "../usecase.interface";

class ReadClientUseCase implements IUseCase {

    constructor(private _repository: IAccountsRepository) {

    }

    async execute(data: { accountId: number }): Promise<AccountEntity | undefined> {
        return await this._repository.readById(data.accountId);
    }
}

export default new ReadClientUseCase(
    accountsRepository
);