import { IAccountEntity } from "./baseaccount.entity";

export interface ISavingAccountEntity extends IAccountEntity {
    income: number
}