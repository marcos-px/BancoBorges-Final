import { ClientEntity } from "../../../../../domain/entities/clients/client.entity";
import { IPessoaEntity } from "../../../../../domain/entities/clients/pessoa.entity"; 
import { IPessoaFisicaEntity } from "../../../../../domain/entities/clients/pessoafisica.entity";
import { IPessoaJuridicaEntity } from "../../../../../domain/entities/clients/pessoajuridica.entity";
export default function (pessoa: any): ClientEntity | undefined {
    if(!pessoa)
        return;

    let client: IPessoaEntity = {
        indexId: pessoa.indexId,
        cep: pessoa.cep,
        limiteCredito: pessoa.limiteCredito,
        observacoes: pessoa.observacoes
    };

    if(pessoa.endereco){
        client.endereco = {
            cep: pessoa.endereco.cep,
            logradouro: pessoa.endereco.logradouro,
            complemento: pessoa.endereco.complemento,
            bairro: pessoa.endereco.bairro,
            cidade: pessoa.endereco.cidade,
            estado: pessoa.endereco.estado
        }
    }

    if(pessoa.pessoaFisica){
        (client as IPessoaFisicaEntity).nome = pessoa.pessoaFisica.nome;
        (client as IPessoaFisicaEntity).cpf = pessoa.pessoaFisica.cpf;
    } else if(pessoa.pessoaJuridica) {
        (client as IPessoaJuridicaEntity).razaoSocial = pessoa.pessoaJuridica.razaoSocial;
        (client as IPessoaJuridicaEntity).cnpj = pessoa.pessoaJuridica.cnpj;
    } else {
        return;
    }

    return (client as ClientEntity);
}