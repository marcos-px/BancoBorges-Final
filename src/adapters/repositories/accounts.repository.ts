import { IDatabase } from "../../infrastructure/persistence/database.interface";
import { AccountEntity } from "../../domain/entities/accounts/account.entity"
import { ArrayDatabase } from "../../infrastructure/persistence/array.database";
import { IAccountsRepository } from "../../domain/repositories/accounts.repository.interface";
import { IDatabaseModel } from "../../infrastructure/persistence/databasemodel.interface";
import * as Sequelize from "sequelize";
import { MysqlDatabase } from "../../infrastructure/persistence/mysql/mysql.database";
import pessoasModelsMysqlDatabase from "../../infrastructure/persistence/mysql/models/pessoas.models.mysql.database";
import contasModelsMysqlDatabaseCopy from "../../infrastructure/persistence/mysql/models/contas.models.mysql.database copy";
class AccountsRepository implements IAccountsRepository {
    private _type: string = 'account';

    constructor(
        private _database: IDatabaseModel,
        private _modelPessoas: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        private _modelContas: Sequelize.ModelCtor<Sequelize.Model<any, any>>){
            this._modelPessoas.hasOne(this._modelContas, {
                foreignKey: 'idpessoa',
                as: 'contas'
            });
    }

    async readById(resourceId: number): Promise<AccountEntity | undefined> {
        try{
            const conta = await this._database.read(this._modelContas, resourceId);
                return conta
                // include: [
                //     'pessoaFisica',
                //     'pessoaJuridica',
                //     'endereco'
                // ]
            } catch(err){
            throw new Error((err as Error).message);
        }
    }

    async create(resource: AccountEntity): Promise<AccountEntity> {
        resource.indexId = this._database.create(this._type, resource);
        return resource;
    }

    async deleteById(resourceId: number): Promise<void> {
        this._database.create(this._type, resourceId);
    }

    async list(): Promise<AccountEntity[]> {
        return this._database.list(this._type);
    }

    async updateById(resource: AccountEntity): Promise<AccountEntity | undefined> {
        this._database.update(this._type, resource);
        return resource;
    }
}

export default new AccountsRepository(
        MysqlDatabase.getInstance(), 
        pessoasModelsMysqlDatabase,
        contasModelsMysqlDatabaseCopy
    );