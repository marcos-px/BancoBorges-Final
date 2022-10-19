"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const accounts_repository_1 = __importDefault(require("../../../adapters/repositories/accounts.repository"));
class WithdrawAccountUseCase {
    constructor(_repository) {
        this._repository = _repository;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (data.value <= 0) {
                throw new Error("O valor deve ser maior que zero.");
            }
            const account = yield accounts_repository_1.default.readById(data.accountId);
            if (!account) {
                throw new Error("Conta não encontrada para saque.");
            }
            else if (account.balance < data.value) {
                throw new Error("Você não tem saldo suficiente para esse saque.");
            }
            account.balance -= data.value;
            /**
             * Aqui teria algum comando para envio do dinheiro para o cliente em um ambiente real.
             */
            return accounts_repository_1.default.updateById(account);
        });
    }
}
exports.default = new WithdrawAccountUseCase(accounts_repository_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aGRyYXcuYWNjb3VudC51c2VjYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RvbWFpbi91c2VjYXNlcy9hY2NvdW50cy93aXRoZHJhdy5hY2NvdW50LnVzZWNhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFQSw2R0FBb0Y7QUFHcEYsTUFBTSxzQkFBc0I7SUFFeEIsWUFBb0IsV0FBZ0M7UUFBaEMsZ0JBQVcsR0FBWCxXQUFXLENBQXFCO0lBRXBELENBQUM7SUFFSyxPQUFPLENBQUMsSUFBMEM7O1lBQ3BELElBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQzthQUN2RDtZQUVELE1BQU0sT0FBTyxHQUFHLE1BQU0sNkJBQWtCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUVsRSxJQUFHLENBQUMsT0FBTyxFQUFFO2dCQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQzthQUN2RDtpQkFBTSxJQUFJLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDckMsTUFBTSxJQUFJLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO2FBQ3JFO1lBRUQsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO1lBRTlCOztlQUVHO1lBRUgsT0FBTyw2QkFBa0IsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLHNCQUFzQixDQUNyQyw2QkFBa0IsQ0FDckIsQ0FBQyJ9