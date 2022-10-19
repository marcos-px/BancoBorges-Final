import { ClientEntity } from "../entities/clients/client.entity";

export interface IClientsRepository {
    readById(resourceId: number): Promise<ClientEntity | undefined>,
    create(resource: ClientEntity): Promise<ClientEntity>,
    deleteById(resourceId: number): Promise<void>,
    list(): Promise<ClientEntity[]>,
    updateById(resource: ClientEntity): Promise<ClientEntity | undefined>
}