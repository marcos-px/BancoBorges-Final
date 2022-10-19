import { IDatabaseModel } from "../../infrastructure/persistence/databasemodel.interface";
import { ClientEntity } from "../../domain/entities/clients/client.entity";
import { MysqlDatabase } from "../../infrastructure/persistence/mysql/mysql.database";
import { IClientsRepository } from "../../domain/repositories/clients.repository.interface";
import * as Sequelize from 'sequelize'
import pessoasModel from '../../infrastructure/persistence/mysql/models/pessoas.models.mysql.database';
import pessoasFisicasModel from '../../infrastructure/persistence/mysql/models/pessoasfisicas.models.mysql.database';
import pessoasJuridicasModel from '../../infrastructure/persistence/mysql/models/pessoasjuridicas.models.mysql.database';
import enderecosModel from '../../infrastructure/persistence/mysql/models/enderecos.models.mysql.database';
import modelsToEntitiesClientsMysqlDatabase from "../../infrastructure/persistence/mysql/helpers/clients/modelsToEntities.clients.mysql.database";
import entitiesToModels from '../../infrastructure/persistence/mysql/helpers/clients/entitiesToModels.clients.mysql.database';

export class ClientsRepository implements IClientsRepository {
    constructor(
        private _database: IDatabaseModel, 
        private _modelPessoas: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        private _modelPessoasFisicas: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        private _modelPessoasJuridicas: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        private _modelEnderecos: Sequelize.ModelCtor<Sequelize.Model<any, any>>
        ){
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

    async readById(resourceId: number): Promise<ClientEntity | undefined> {
        try{
            const pessoa = await this._database.read(this._modelPessoas, resourceId, {
                include: [
                    'pessoaFisica',
                    'pessoaJuridica',
                    'endereco'
                ]
            });
            
            return modelsToEntitiesClientsMysqlDatabase(pessoa);
        } catch(err){
            throw new Error((err as Error).message);
        }
    }

    async create(resource: ClientEntity): Promise<ClientEntity> {

        const { pessoa, pessoaFisica, pessoaJuridica, endereco } = entitiesToModels(resource);
        
        const pessoaModel = await this._database.create(this._modelPessoas, pessoa);
        
        if(pessoaFisica){
            pessoaFisica.idpessoa = pessoaModel.null;
            const pessoaFisicaModel = await this._database.create(this._modelPessoasFisicas, pessoaFisica);
        }

        if(pessoaJuridica){
            pessoaJuridica.idpessoa = pessoaModel.null;
            const pessoaJuridicaModel = await this._database.create(this._modelPessoasJuridicas, pessoaJuridica);
        }

        if(endereco){
            endereco.idpessoa = pessoaModel.null;
            const enderecoModel = await this._database.create(this._modelEnderecos, endereco);
        }
            
        resource.indexId = pessoaModel.null;

        return resource;
    }

    async deleteById(resourceId: number): Promise<void> {
        await this._database.delete(this._modelPessoasFisicas, { idpessoa: resourceId });
        await this._database.delete(this._modelPessoasJuridicas, { idpessoa: resourceId });
        await this._database.delete(this._modelEnderecos, { idpessoa: resourceId });
        await this._database.delete(this._modelPessoas, { indexId: resourceId });
    }

    async list(): Promise<ClientEntity[]> {
        const pessoas = await this._database.list(this._modelPessoas, { include: [
            'pessoaFisica',
            'pessoaJuridica',
            'endereco'
        ]});

        const clients = pessoas.map(modelsToEntitiesClientsMysqlDatabase);

        return clients;
    }

    async updateById(resource: ClientEntity): Promise<ClientEntity | undefined> {

        let pessoaModel = await this._database.read(this._modelPessoas, resource.indexId!, {
            include: [
                'pessoaFisica',
                'pessoaJuridica',
                'endereco'
            ]
        });

        const { pessoa, pessoaFisica, pessoaJuridica, endereco } = entitiesToModels(resource);
        
        await this._database.update(pessoaModel, pessoa);
        
        if(pessoaFisica){
            await this._database.update(await pessoaModel.getPessoaFisica(), pessoaFisica);
        }

        if(pessoaJuridica){
            await this._database.update(await pessoaModel.getPessoaJuridica(), pessoaJuridica);
        }

        if(endereco){
            await this._database.update(await pessoaModel.getEnderecos(), endereco);
        }

        return resource;
    }
}

export default new ClientsRepository(
    MysqlDatabase.getInstance(),
    pessoasModel,
    pessoasFisicasModel,
    pessoasJuridicasModel,
    enderecosModel
    );