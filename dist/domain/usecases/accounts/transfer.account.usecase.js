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
const withdraw_account_usecase_1 = __importDefault(require("./withdraw.account.usecase"));
const deposit_account_usecase_1 = __importDefault(require("./deposit.account.usecase"));
class TransferAccountUseCase {
    constructor(_repository) {
        this._repository = _repository;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let sourceAccount;
            try {
                const targetAccount = yield accounts_repository_1.default.readById(data.targetAccountId);
                if (!targetAccount) {
                    throw new Error('Não foi possível encontrar os recursos na conta destino.');
                }
                sourceAccount = yield withdraw_account_usecase_1.default.execute({
                    accountId: data.sourceAccountId,
                    value: data.value
                });
                if (!sourceAccount) {
                    throw new Error('Não foi possível encontrar os recursos na conta origem.');
                }
                else if (!('transferLimit' in sourceAccount) || !('transferLimit' in targetAccount)) {
                    throw new Error('Não é possível fazer transferencias envolvendo contas poupança.');
                }
            }
            catch (error) {
                throw error;
            }
            try {
                if (sourceAccount.transferLimit < data.value) {
                    throw new Error(`Valor acima do limite de transferência diário: ${sourceAccount.transferLimit}.`);
                }
                return yield deposit_account_usecase_1.default.execute({
                    accountId: data.targetAccountId,
                    value: data.value
                });
            }
            catch (error) {
                yield deposit_account_usecase_1.default.execute({
                    accountId: data.sourceAccountId,
                    value: data.value
                });
                throw error;
            }
        });
    }
}
exports.default = new TransferAccountUseCase(accounts_repository_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXIuYWNjb3VudC51c2VjYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RvbWFpbi91c2VjYXNlcy9hY2NvdW50cy90cmFuc2Zlci5hY2NvdW50LnVzZWNhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFQSw2R0FBb0Y7QUFFcEYsMEZBQWdFO0FBQ2hFLHdGQUE4RDtBQUU5RCxNQUFNLHNCQUFzQjtJQUV4QixZQUFvQixXQUFnQztRQUFoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBcUI7SUFFcEQsQ0FBQztJQUVLLE9BQU8sQ0FBQyxJQUF5RTs7WUFDbkYsSUFBSSxhQUF3QyxDQUFDO1lBQzdDLElBQUc7Z0JBQ0MsTUFBTSxhQUFhLEdBQUcsTUFBTSw2QkFBa0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUM5RSxJQUFHLENBQUMsYUFBYSxFQUFDO29CQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsMERBQTBELENBQUMsQ0FBQztpQkFDL0U7Z0JBRUQsYUFBYSxHQUFHLE1BQU0sa0NBQXNCLENBQUMsT0FBTyxDQUFDO29CQUNqRCxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWU7b0JBQy9CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztpQkFDcEIsQ0FBQyxDQUFDO2dCQUVILElBQUcsQ0FBQyxhQUFhLEVBQUM7b0JBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO2lCQUM5RTtxQkFBTSxJQUFHLENBQUMsQ0FBQyxlQUFlLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLGVBQWUsSUFBSSxhQUFhLENBQUMsRUFBRTtvQkFDbEYsTUFBTSxJQUFJLEtBQUssQ0FBQyxpRUFBaUUsQ0FBQyxDQUFDO2lCQUN0RjthQUNKO1lBQUMsT0FBTSxLQUFLLEVBQUU7Z0JBQ1gsTUFBTSxLQUFLLENBQUM7YUFDZjtZQUVELElBQUc7Z0JBQ0MsSUFBRyxhQUFhLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUM7b0JBQ3hDLE1BQU0sSUFBSSxLQUFLLENBQUMsa0RBQWtELGFBQWEsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO2lCQUNyRztnQkFFRCxPQUFPLE1BQU0saUNBQXFCLENBQUMsT0FBTyxDQUFDO29CQUN2QyxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWU7b0JBQy9CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztpQkFDcEIsQ0FBQyxDQUFDO2FBQ047WUFBQyxPQUFNLEtBQUssRUFBRTtnQkFDWCxNQUFNLGlDQUFxQixDQUFDLE9BQU8sQ0FBQztvQkFDaEMsU0FBUyxFQUFFLElBQUksQ0FBQyxlQUFlO29CQUMvQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7aUJBQ3BCLENBQUMsQ0FBQztnQkFDSCxNQUFNLEtBQUssQ0FBQzthQUNmO1FBQ0wsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLHNCQUFzQixDQUNyQyw2QkFBa0IsQ0FDckIsQ0FBQyJ9