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
exports.ClientsRepository = void 0;
const mysql_database_1 = require("../../infrastructure/persistence/mysql/mysql.database");
const pessoas_models_mysql_database_1 = __importDefault(require("../../infrastructure/persistence/mysql/models/pessoas.models.mysql.database"));
const pessoasfisicas_models_mysql_database_1 = __importDefault(require("../../infrastructure/persistence/mysql/models/pessoasfisicas.models.mysql.database"));
const pessoasjuridicas_models_mysql_database_1 = __importDefault(require("../../infrastructure/persistence/mysql/models/pessoasjuridicas.models.mysql.database"));
const enderecos_models_mysql_database_1 = __importDefault(require("../../infrastructure/persistence/mysql/models/enderecos.models.mysql.database"));
const modelsToEntities_clients_mysql_database_1 = __importDefault(require("../../infrastructure/persistence/mysql/helpers/clients/modelsToEntities.clients.mysql.database"));
const entitiesToModels_clients_mysql_database_1 = __importDefault(require("../../infrastructure/persistence/mysql/helpers/clients/entitiesToModels.clients.mysql.database"));
class ClientsRepository {
    constructor(_database, _modelPessoas, _modelPessoasFisicas, _modelPessoasJuridicas, _modelEnderecos) {
        this._database = _database;
        this._modelPessoas = _modelPessoas;
        this._modelPessoasFisicas = _modelPessoasFisicas;
        this._modelPessoasJuridicas = _modelPessoasJuridicas;
        this._modelEnderecos = _modelEnderecos;
        this._modelPessoas.hasOne(this._modelPessoasFisicas, {
            foreignKey: 'idpessoa',
            as: 'pessoaFisica'
        });
        this._modelPessoas.hasOne(this._modelPessoasJuridicas, {
            foreignKey: 'idpessoa',
            as: 'pessoaJuridica'
        });
        this._modelPessoas.hasOne(this._modelEnderecos, {
            foreignKey: 'idpessoa',
            as: 'endereco'
        });
    }
    readById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pessoa = yield this._database.read(this._modelPessoas, resourceId, {
                    include: [
                        'pessoaFisica',
                        'pessoaJuridica',
                        'endereco'
                    ]
                });
                return (0, modelsToEntities_clients_mysql_database_1.default)(pessoa);
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const { pessoa, pessoaFisica, pessoaJuridica, endereco } = (0, entitiesToModels_clients_mysql_database_1.default)(resource);
            const pessoaModel = yield this._database.create(this._modelPessoas, pessoa);
            if (pessoaFisica) {
                pessoaFisica.idpessoa = pessoaModel.null;
                const pessoaFisicaModel = yield this._database.create(this._modelPessoasFisicas, pessoaFisica);
            }
            if (pessoaJuridica) {
                pessoaJuridica.idpessoa = pessoaModel.null;
                const pessoaJuridicaModel = yield this._database.create(this._modelPessoasJuridicas, pessoaJuridica);
            }
            if (endereco) {
                endereco.idpessoa = pessoaModel.null;
                const enderecoModel = yield this._database.create(this._modelEnderecos, endereco);
            }
            resource.indexId = pessoaModel.null;
            return resource;
        });
    }
    deleteById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._database.delete(this._modelPessoasFisicas, { idpessoa: resourceId });
            yield this._database.delete(this._modelPessoasJuridicas, { idpessoa: resourceId });
            yield this._database.delete(this._modelEnderecos, { idpessoa: resourceId });
            yield this._database.delete(this._modelPessoas, { indexId: resourceId });
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const pessoas = yield this._database.list(this._modelPessoas, { include: [
                    'pessoaFisica',
                    'pessoaJuridica',
                    'endereco'
                ] });
            const clients = pessoas.map(modelsToEntities_clients_mysql_database_1.default);
            return clients;
        });
    }
    updateById(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            let pessoaModel = yield this._database.read(this._modelPessoas, resource.indexId, {
                include: [
                    'pessoaFisica',
                    'pessoaJuridica',
                    'endereco'
                ]
            });
            const { pessoa, pessoaFisica, pessoaJuridica, endereco } = (0, entitiesToModels_clients_mysql_database_1.default)(resource);
            yield this._database.update(pessoaModel, pessoa);
            if (pessoaFisica) {
                yield this._database.update(yield pessoaModel.getPessoaFisica(), pessoaFisica);
            }
            if (pessoaJuridica) {
                yield this._database.update(yield pessoaModel.getPessoaJuridica(), pessoaJuridica);
            }
            if (endereco) {
                yield this._database.update(yield pessoaModel.getEnderecos(), endereco);
            }
            return resource;
        });
    }
}
exports.ClientsRepository = ClientsRepository;
exports.default = new ClientsRepository(mysql_database_1.MysqlDatabase.getInstance(), pessoas_models_mysql_database_1.default, pessoasfisicas_models_mysql_database_1.default, pessoasjuridicas_models_mysql_database_1.default, enderecos_models_mysql_database_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL3JlcG9zaXRvcmllcy9jbGllbnRzLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsMEZBQXNGO0FBR3RGLGdKQUF1RztBQUN2Ryw4SkFBcUg7QUFDckgsa0tBQXlIO0FBQ3pILG9KQUEyRztBQUMzRyw2S0FBa0o7QUFDbEosNktBQThIO0FBRTlILE1BQWEsaUJBQWlCO0lBQzFCLFlBQ1ksU0FBeUIsRUFDekIsYUFBNkQsRUFDN0Qsb0JBQW9FLEVBQ3BFLHNCQUFzRSxFQUN0RSxlQUErRDtRQUovRCxjQUFTLEdBQVQsU0FBUyxDQUFnQjtRQUN6QixrQkFBYSxHQUFiLGFBQWEsQ0FBZ0Q7UUFDN0QseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFnRDtRQUNwRSwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQWdEO1FBQ3RFLG9CQUFlLEdBQWYsZUFBZSxDQUFnRDtRQUV2RSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDakQsVUFBVSxFQUFFLFVBQVU7WUFDdEIsRUFBRSxFQUFFLGNBQWM7U0FDckIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQ25ELFVBQVUsRUFBRSxVQUFVO1lBQ3RCLEVBQUUsRUFBRSxnQkFBZ0I7U0FDdkIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUM1QyxVQUFVLEVBQUUsVUFBVTtZQUN0QixFQUFFLEVBQUUsVUFBVTtTQUNqQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUssUUFBUSxDQUFDLFVBQWtCOztZQUM3QixJQUFHO2dCQUNDLE1BQU0sTUFBTSxHQUFH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