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
const read_client_usecase_1 = __importDefault(require("../../../domain/usecases/clients/read.client.usecase"));
const read_account_usecase_1 = __importDefault(require("../../../domain/usecases/accounts/read.account.usecase"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:users-middleware');
class AccountsMiddleware {
    validateRequiredAccountBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body && req.body.clientId !== undefined) {
                next();
            }
            else {
                res.status(400).send({ error: `Verifique os campos obrigatórios para criar uma conta.` });
            }
        });
    }
    validateClientExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield read_client_usecase_1.default.execute({
                clientId: Number(req.body.clientId)
            });
            if (user) {
                next();
            }
            else {
                res.status(404).send({ error: `Usuário ${req.body.clientId} não existe` });
            }
        });
    }
    validateAccountExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const account = yield read_account_usecase_1.default.execute({
                accountId: Number(req.params.accountId)
            });
            if (account) {
                next();
            }
            else {
                res.status(404).send({ error: `Account ${req.params.accountId} não existe` });
            }
        });
    }
    validateAccountRepeated(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let resourceID = req.body.accountNumber;
            const account = yield read_account_usecase_1.default.execute({
                accountId: resourceID
            });
            if (!account) {
                next();
            }
            else {
                res.status(409).send({ error: `Conta ${resourceID} já existe` });
            }
        });
    }
}
exports.default = new AccountsMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudHMubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZGFwdGVycy9hcGlzL21pZGRsZXdhcmVzL2FjY291bnRzLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrR0FBcUY7QUFDckYsa0hBQXdGO0FBQ3hGLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUUzRCxNQUFNLGtCQUFrQjtJQUNkLGlDQUFpQyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7WUFDM0csSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtnQkFDN0MsSUFBSSxFQUFFLENBQUM7YUFDVjtpQkFBTTtnQkFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSx3REFBd0QsRUFBQyxDQUFDLENBQUM7YUFDM0Y7UUFDTCxDQUFDO0tBQUE7SUFFSyxvQkFBb0IsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQzlGLE1BQU0sSUFBSSxHQUFHLE1BQU0sNkJBQWlCLENBQUMsT0FBTyxDQUFDO2dCQUN6QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ3RDLENBQUMsQ0FBQztZQUNILElBQUksSUFBSSxFQUFFO2dCQUNOLElBQUksRUFBRSxDQUFDO2FBQ1Y7aUJBQU07Z0JBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsYUFBYSxFQUFDLENBQUMsQ0FBQzthQUM1RTtRQUNMLENBQUM7S0FBQTtJQUVLLHFCQUFxQixDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7WUFDL0YsTUFBTSxPQUFPLEdBQUcsTUFBTSw4QkFBa0IsQ0FBQyxPQUFPLENBQUM7Z0JBQzdDLFNBQVMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7YUFDMUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxPQUFPLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLENBQUM7YUFDVjtpQkFBTTtnQkFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxXQUFXLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxhQUFhLEVBQUMsQ0FBQyxDQUFDO2FBQy9FO1FBQ0wsQ0FBQztLQUFBO0lBRUssdUJBQXVCLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOztZQUNqRyxJQUFJLFVBQVUsR0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUNoRCxNQUFNLE9BQU8sR0FBRyxNQUFNLDhCQUFrQixDQUFDLE9BQU8sQ0FBQztnQkFDN0MsU0FBUyxFQUFFLFVBQVU7YUFDeEIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDVixJQUFJLEVBQUUsQ0FBQzthQUNWO2lCQUFNO2dCQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLFNBQVMsVUFBVSxZQUFZLEVBQUMsQ0FBQyxDQUFDO2FBQ2xFO1FBQ0wsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLGtCQUFrQixFQUFFLENBQUMifQ==