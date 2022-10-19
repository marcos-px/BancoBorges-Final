"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(conta) {
    if (!conta)
        return;
    let account = {
        indexId: conta.indexId,
        balance: conta.saldo,
        clientId: conta.idpessoa,
        accountNumber: conta.numeroConta,
    };
    if (conta.limiteTransferencia)
        account.transferLimit = conta.limiteTransferencia;
    account.income = conta.income;
    return account;
}
exports.default = default_1;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzVG9FbnRpdGllcy5teXNxbC5hY2NvdW50cy5kYXRhYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9teXNxbC9oZWxwZXJzL2FjY291bnRzL21vZGVsc1RvRW50aXRpZXMubXlzcWwuYWNjb3VudHMuZGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFNQSxtQkFBeUIsS0FBVTtJQUMvQixJQUFJLENBQUMsS0FBSztRQUNOLE9BQU87SUFFWCxJQUFJLE9BQU8sR0FBbUI7UUFDMUIsT0FBTyxFQUFHLEtBQUssQ0FBQyxPQUFPO1FBQ3ZCLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSztRQUNwQixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7UUFDeEIsYUFBYSxFQUFFLEtBQUssQ0FBQyxXQUFXO0tBQ25DLENBQUE7SUFFRyxJQUFHLEtBQUssQ0FBQyxtQkFBbUI7UUFDM0IsT0FBa0MsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLG1CQUFtQixDQUFDO0lBQzdFLE9BQWdDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFFNUQsT0FBUSxPQUF5QixDQUFDO0FBQ3RDLENBQUM7QUFoQkQsNEJBZ0JDO0FBQUEsQ0FBQyJ9