import { AccountEntity } from "../entities/accounts/account.entity";

export interface IAccountsRepository {
    readById(resourceId: number): Promise<AccountEntity | undefined>,
    create(resource: AccountEntity): Promise<AccountEntity>,
    deleteById(resourceId: number): Promise<void>,
    list(): Promise<AccountEntity[]>,
    updateById(resource: AccountEntity): Promise<AccountEntity | undefined>
}