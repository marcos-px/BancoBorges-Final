import { ICheckingAccountEntity } from './checkingaccount.entity';
import { ISavingAccountEntity } from './savingsaccount.entity';

export type AccountEntity = ICheckingAccountEntity | ISavingAccountEntity;