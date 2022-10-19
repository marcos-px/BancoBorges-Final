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
// import clientsService from '../../common/services/clients.service';
const read_client_usecase_1 = __importDefault(require("../../../domain/usecases/clients/read.client.usecase"));
const debug_1 = __importDefault(require("debug"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const xlsx_files_1 = __importDefault(require("../../../infrastructure/files/xlsx.files"));
const winston_logs_1 = __importDefault(require("../../../infrastructure/logs/winston.logs"));
const cpfvalidation_helpers_adapters_1 = __importDefault(require("../../helpers/cpfvalidation.helpers.adapters"));
const constants_config_1 = __importDefault(require("../../../infrastructure/config/constants.config"));
const log = (0, debug_1.default)('app:clients-middleware');
class ClientsMiddleware {
    validateRequiredClientBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body && (req.body.cpf || req.body.cnpj)) {
                if (req.body.cpf && !(0, cpfvalidation_helpers_adapters_1.default)(req.body.cpf)) {
                    res.status(400).send({ error: constants_config_1.default.CLIENTS.MESSAGES.ERROR.INVALID_CPF });
                }
                else {
                    next();
                }
            }
            else {
                res.status(400).send({ error: constants_config_1.default.CLIENTS.MESSAGES.ERROR.VOID_CPF_CNPJ });
            }
        });
    }
    validateClientExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield read_client_usecase_1.default.execute({
                clientId: Number(req.params.clientId)
            });
            if (client) {
                winston_logs_1.default.info(['Cliente encontrado: ', client]);
                next();
            }
            else {
                winston_logs_1.default.error(`Usuário ${req.params.clientId} não existe`);
                res.status(404).send({ error: constants_config_1.default.CLIENTS.MESSAGES.ERROR.USER_NOT_EXISTS.replace('{USER_ID}', req.params.clientId) });
            }
        });
    }
    validateClientRepeated(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let resourceID = ('cpf' in req.body ? req.body.cpf : req.body.cnpj);
            const client = yield read_client_usecase_1.default.execute({
                clientId: resourceID
            });
            if (!client) {
                next();
            }
            else {
                res.status(409).send({ error: constants_config_1.default.CLIENTS.MESSAGES.ERROR.USER_ALREADY_EXISTS.replace('{USER_ID}', String(resourceID)) });
            }
        });
    }
    uploadFile() {
        return (0, multer_1.default)({
            storage: multer_1.default.diskStorage({
                destination: (req, file, cb) => {
                    cb(null, path_1.default.resolve("uploads"));
                },
                filename: (req, file, cb) => {
                    cb(null, `${Date.now()}-${file.originalname.toLocaleLowerCase()}`);
                },
            }),
        });
    }
    parseXlsx(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.fileData = xlsx_files_1.default.parse(req.file.path);
            next();
        });
    }
}
exports.default = new ClientsMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvbWlkZGxld2FyZXMvY2xpZW50cy5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esc0VBQXNFO0FBQ3RFLCtHQUFxRjtBQUNyRixrREFBMEI7QUFDMUIsb0RBQTRCO0FBQzVCLGdEQUF3QjtBQUN4QiwwRkFBMEU7QUFDMUUsNkZBQStEO0FBQy9ELGtIQUF3RjtBQUN4Rix1R0FBOEU7QUFFOUUsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLHdCQUF3QixDQUFDLENBQUM7QUFFN0QsTUFBTSxpQkFBaUI7SUFDYixnQ0FBZ0MsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQzFHLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzdDLElBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFBLHdDQUE0QixFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUM7b0JBQzNELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLDBCQUFlLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQztpQkFDckY7cUJBQU07b0JBQ0gsSUFBSSxFQUFFLENBQUM7aUJBQ1Y7YUFDSjtpQkFBTTtnQkFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSwwQkFBZSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEs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