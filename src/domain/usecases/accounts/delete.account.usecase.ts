import { IAccountsRepository } from "../../repositories/accounts.repository.interface";
import accountsRepository from "../../../adapters/repositories/accounts.repository";
import { IUseCase } from "../usecase.interface";
class DeleteClientUseCase implements IUseCase {

    constructor(private _repository: IAccountsRepository) {

    }

    async execute(data: { accountId: number }): Promise<void> {
        return await this._repository.deleteById(data.accountId);
    }
}

export default new DeleteClientUseCase(
    accountsRepository
);