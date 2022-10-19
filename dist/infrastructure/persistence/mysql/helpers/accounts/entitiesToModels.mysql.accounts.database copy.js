"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(account) {
    let conta = {
        indexId: account.indexId,
        saldo: account.balance,
        numeroConta: account.accountNumber,
        idpessoa: undefined
    };
    if ('transferLimit' in account) {
        conta = Object.assign(Object.assign({}, conta), { limiteTransferencia: account.transferLimit });
    }
    ;
    if ('income' in account) {
        conta = Object.assign(Object.assign({}, conta), { limiteTransferencia: account.income });
    }
    return conta;
}
exports.default = default_1;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRpZXNUb01vZGVscy5teXNxbC5hY2NvdW50cy5kYXRhYmFzZSBjb3B5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2luZnJhc3RydWN0dXJlL3BlcnNpc3RlbmNlL215c3FsL2hlbHBlcnMvYWNjb3VudHMvZW50aXRpZXNUb01vZGVscy5teXNxbC5hY2NvdW50cy5kYXRhYmFzZSBjb3B5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsbUJBQXlCLE9BQXNCO0lBQzNDLElBQUksS0FBSyxHQUFHO1FBQ1IsT0FBTyxFQUFHLE9BQU8sQ0FBQyxPQUFPO1FBQ3pCLEtBQUssRUFBRSxPQUFPLENBQUMsT0FBTztRQUN0QixXQUFXLEVBQUUsT0FBTyxDQUFDLGFBQWE7UUFDbEMsUUFBUSxFQUFFLFNBQVM7S0FDdEIsQ0FBQztJQUNFLElBQUcsZUFBZSxJQUFJLE9BQU8sRUFBQztRQUM5QixLQUFLLG1DQUFRLEtBQUssR0FBSyxFQUFDLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxhQUFhLEVBQUMsQ0FBQyxDQUFDO0tBQ3hFO0lBQUEsQ0FBQztJQUNGLElBQUcsUUFBUSxJQUFJLE9BQU8sRUFBQztRQUNuQixLQUFLLG1DQUFRLEtBQUssR0FBSyxFQUFDLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO0tBQ2pFO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQWZELDRCQWVDO0FBQUEsQ0FBQyJ9