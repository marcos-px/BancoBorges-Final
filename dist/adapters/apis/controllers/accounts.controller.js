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
const create_account_usecase_1 = __importDefault(require("../../../domain/usecases/accounts/create.account.usecase"));
const read_account_usecase_1 = __importDefault(require("../../../domain/usecases/accounts/read.account.usecase"));
const update_account_usecase_1 = __importDefault(require("../../../domain/usecases/accounts/update.account.usecase"));
const delete_account_usecase_1 = __importDefault(require("../../../domain/usecases/accounts/delete.account.usecase"));
const list_account_usecase_1 = __importDefault(require("../../../domain/usecases/accounts/list.account.usecase"));
const deposit_account_usecase_1 = __importDefault(require("../../../domain/usecases/accounts/deposit.account.usecase"));
const withdraw_account_usecase_1 = __importDefault(require("../../../domain/usecases/accounts/withdraw.account.usecase"));
const transfer_account_usecase_1 = __importDefault(require("../../../domain/usecases/accounts/transfer.account.usecase"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:accounts-controller');
class AccountsController {
    listAccounts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const accounts = yield list_account_usecase_1.default.execute();
            res.status(200).send(accounts);
        });
    }
    getAccountById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const account = yield read_account_usecase_1.default.execute({
                accountId: Number(req.params.accountId)
            });
            res.status(200).send(account);
        });
    }
    createAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const account = yield create_account_usecase_1.default.execute(req.body);
            log(account);
            res.status(201).send(account);
        });
    }
    updateAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const account = yield update_account_usecase_1.default.execute(req.body);
            res.status(200).send(account);
        });
    }
    removeAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield delete_account_usecase_1.default.execute({
                accountId: Number(req.params.accountId)
            });
            res.status(204).send();
        });
    }
    deposit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const account = yield deposit_account_usecase_1.default.execute({
                    accountId: Number(req.params.accountId),
                    value: req.body.value
                });
                res.status(200).send(account);
            }
            catch (error) {
                res.status(500).send({
                    message: error.message
                });
            }
        });
    }
    withdraw(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const account = yield withdraw_account_usecase_1.default.execute({
                    accountId: Number(req.params.accountId),
                    value: req.body.value
                });
                res.status(200).send(account);
            }
            catch (error) {
                res.status(500).send({
                    message: error.message
                });
            }
        });
    }
    transfer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const account = yield transfer_account_usecase_1.default.execute({
                    sourceAccountId: Number(req.params.accountId),
                    value: req.body.value,
                    targetAccountId: req.body.targetAccountId
                });
                res.status(200).send(account);
            }
            catch (error) {
                res.status(500).send({
                    message: error.message
                });
            }
        });
    }
}
exports.default = new AccountsController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudHMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZGFwdGVycy9hcGlzL2NvbnRyb2xsZXJzL2FjY291bnRzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxzSEFBNEY7QUFDNUYsa0hBQXdGO0FBQ3hGLHNIQUE0RjtBQUM1RixzSEFBNEY7QUFDNUYsa0hBQXdGO0FBQ3hGLHdIQUE4RjtBQUM5RiwwSEFBZ0c7QUFDaEcsMEhBQWdHO0FBQ2hHLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMseUJBQXlCLENBQUMsQ0FBQztBQUU5RCxNQUFNLGtCQUFrQjtJQUNkLFlBQVksQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUMxRCxNQUFNLFFBQVEsR0FBRyxNQUFNLDhCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLENBQUM7S0FBQTtJQUVLLGNBQWMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUM1RCxNQUFNLE9BQU8sR0FBRyxNQUFNLDhCQUFrQixDQUFDLE9BQU8sQ0FBQztnQkFDN0MsU0FBUyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQzthQUMxQyxDQUFDLENBQUM7WUFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxDQUFDO0tBQUE7SUFFSyxhQUFhLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDM0QsTUFBTSxPQUFPLEdBQUcsTUFBTSxnQ0FBb0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdELEdBQUcsQ0FBQyxPQUFPLENBQUMs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