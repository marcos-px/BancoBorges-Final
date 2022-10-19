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
const mysql_database_1 = require("../../infrastructure/persistence/mysql/mysql.database");
const pessoas_models_mysql_database_1 = __importDefault(require("../../infrastructure/persistence/mysql/models/pessoas.models.mysql.database"));
const contas_models_mysql_database_copy_1 = __importDefault(require("../../infrastructure/persistence/mysql/models/contas.models.mysql.database copy"));
class AccountsRepository {
    constructor(_database, _modelPessoas, _modelContas) {
        this._database = _database;
        this._modelPessoas = _modelPessoas;
        this._modelContas = _modelContas;
        this._type = 'account';
        this._modelPessoas.hasOne(this._modelContas, {
            foreignKey: 'idpessoa',
            as: 'contas'
        });
    }
    readById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conta = yield this._database.read(this._modelContas, resourceId);
                return conta;
                // include: [
                //     'pessoaFisica',
                //     'pessoaJuridica',
                //     'endereco'
                // ]
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            resource.indexId = this._database.create(this._type, resource);
            return resource;
        });
    }
    deleteById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            this._database.create(this._type, resourceId);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._database.list(this._type);
        });
    }
    updateById(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            this._database.update(this._type, resource);
            return resource;
        });
    }
}
exports.default = new AccountsRepository(mysql_database_1.MysqlDatabase.getInstance(), pessoas_models_mysql_database_1.default, contas_models_mysql_database_copy_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudHMucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZGFwdGVycy9yZXBvc2l0b3JpZXMvYWNjb3VudHMucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQU1BLDBGQUFzRjtBQUN0RixnSkFBcUg7QUFDckgsd0pBQTRIO0FBQzVILE1BQU0sa0JBQWtCO0lBR3BCLFlBQ1ksU0FBeUIsRUFDekIsYUFBNkQsRUFDN0QsWUFBNEQ7UUFGNUQsY0FBUyxHQUFULFNBQVMsQ0FBZ0I7UUFDekIsa0JBQWEsR0FBYixhQUFhLENBQWdEO1FBQzdELGlCQUFZLEdBQVosWUFBWSxDQUFnRDtRQUxoRSxVQUFLLEdBQVcsU0FBUyxDQUFDO1FBTTFCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDekMsVUFBVSxFQUFFLFVBQVU7WUFDdEIsRUFBRSxFQUFFLFFBQVE7U0FDZixDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUssUUFBUSxDQUFDLFVBQWtCOztZQUM3QixJQUFHO2dCQUNDLE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDbkUsT0FBTyxLQUFLLENBQUE7Z0JBQ1osYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLHdCQUF3QjtnQkFDeEIsaUJBQWlCO2dCQUNqQixJQUFJO2FBQ1A7WUFBQyxPQUFNLEdBQUcsRUFBQztnQkFDWixNQUFNLElBQUksS0FBSyxDQUFFLEdBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMzQztRQUNMLENBQUM7S0FBQTtJQUVLLE1BQU0sQ0FBQyxRQUF1Qjs7WUFDaEMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQy9ELE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxVQUFrQjs7WUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNsRCxDQUFDO0tBQUE7SUFFSyxJQUFJOztZQUNOLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxRQUF1Qjs7WUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM1QyxPQUFPLFFBQVEsQ0FBQztRQUNwQixDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksa0JBQWtCLENBQzdCLDhCQUFhLENBQUMsV0FBVyxFQUFFLEVBQzNCLHVDQUEwQixFQUMxQiwyQ0FBNkIsQ0FDaEMsQ0FBQyJ9