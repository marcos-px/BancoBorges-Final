import { AccountEntity } from "../../entities/accounts/account.entity";
import { IAccountsRepository } from "../../repositories/accounts.repository.interface";
import accountsRepository from "../../../adapters/repositories/accounts.repository";
import { IUseCase } from "../usecase.interface";

class CreateAccountUseCase implements IUseCase {

    constructor(private _repository: IAccountsRepository) {

    }

    async execute(data: AccountEntity): Promise<AccountEntity | undefined> {
        return await this._repository.create(data);
    }
}

export default new CreateAccountUseCase(
    accountsRepository
);