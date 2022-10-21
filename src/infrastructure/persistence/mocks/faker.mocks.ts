import Imocks from "./mocks.interface";
import { ClientEntity } from "../../../domain/entities/clients/client.entity";
import { IPessoaEntity } from "../../../domain/entities/clients/pessoa.entity";
import {faker} from '@faker-js/faker'
import { IPessoaFisicaEntity } from "../../../domain/entities/clients/pessoafisica.entity";

export default class FakerMocks implements Imocks{
    getClients(): ClientEntity[] {
        let pessoas: IPessoaEntity{} = {};
    
        const clients: ClientEntity[]=[];
        return clients
    }

    private _getPessoas(): IPessoaEntity[]{
        const pessoas: IPessoaEntity[] = [];
        Array.from[{ lenght:10 }].forEach(()=>{
            pessoas.push({
                cep: faker.address.zipCode('########'),
                limiteCredito: Number(faker.finance.amount(0, 10000)),
                observacoes: faker.random.words()

            })
        })
        return pessoas;
    }

    private _getPessoasFisicas(pessoas: IPessoaEntity[]): IPessoaFisicaEntity[]{
        const pessoasFisicas: IPessoaFisicaEntity[] = [];
        pessoas.forEach((pessoa)=>{
            pessoasFisicas.push({  ...pessoas, ...{nome: faker.name.fullName(), cpf: Number(faker.random.numeric(11))}})
        });
        return pessoasFisicas;
    }
}