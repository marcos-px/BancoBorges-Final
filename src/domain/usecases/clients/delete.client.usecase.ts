import { IClientsRepository } from "../../repositories/clients.repository.interface";
import ClientsRepository from "../../../adapters/repositories/clients.repository";
import { IUseCase } from "../usecase.interface";

class DeleteClientUseCase implements IUseCase {

    constructor(private _repository: IClientsRepository) {

    }

    async execute(data: { clientId: number }): Promise<void> {
        return await this._repository.deleteById(data.clientId);
    }
}

export default new DeleteClientUseCase(
    ClientsRepository
);