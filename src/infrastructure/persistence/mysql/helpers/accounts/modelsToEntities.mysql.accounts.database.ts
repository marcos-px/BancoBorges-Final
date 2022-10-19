import { AccountEntity } from "../../../../../domain/entities/accounts/account.entity";
import { IAccountEntity } from "../../../../../domain/entities/accounts/baseaccount.entity";
import { ICheckingAccountEntity } from "../../../../../domain/entities/accounts/checkingaccount.entity";
import { ISavingAccountEntity } from "../../../../../domain/entities/accounts/savingsaccount.entity";


export default function (conta: any): AccountEntity | undefined {
    if (!conta)
        return;

    let account: IAccountEntity = {
        indexId:  conta.indexId,
        balance: conta.saldo,
        clientId: conta.idpessoa,
        accountNumber: conta.numeroConta,
    }
    
        if(conta.limiteTransferencia )
        (account as ICheckingAccountEntity).transferLimit = conta.limiteTransferencia;
        (account as ISavingAccountEntity).income = conta.income;
        
    return (account as AccountEntity);
};
