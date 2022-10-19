import { IAccountEntity } from "./baseaccount.entity";

export interface ICheckingAccountEntity extends IAccountEntity {
    transferLimit: number
}