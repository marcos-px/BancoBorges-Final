import { AccountEntity } from "../../../../../domain/entities/accounts/account.entity";



export default function (account: AccountEntity) {
    let conta = {
        indexId:  account.indexId,
        saldo: account.balance,
        numeroConta: account.accountNumber,
        idpessoa: undefined
    };
        if('transferLimit' in account){
        conta = { ...conta, ...{limiteTransferencia: account.transferLimit}};
    };
    if('income' in account){
        conta = { ...conta, ...{limiteTransferencia: account.income}};
    }

    return conta;
};
