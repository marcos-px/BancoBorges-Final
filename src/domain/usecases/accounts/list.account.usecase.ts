import { AccountEntity } from "../../entities/accounts/account.entity";
import { IAccountsRepository } from "../../repositories/accounts.repository.interface";
import accountsRepository from "../../../adapters/repositories/accounts.repository";
import { IUseCase } from "../usecase.interface";

class ListClientUseCase implements IUseCase {

    constructor(private _repository: IAccountsRepository) {

    }

    async execute(): Promise<AccountEntity[] | undefined> {
        return await this._repository.list();
    }
}

export default new ListClientUseCase(
    accountsRepository
);