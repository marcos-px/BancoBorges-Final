"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(pessoa) {
    if (!pessoa)
        return;
    let client = {
        indexId: pessoa.indexId,
        cep: pessoa.cep,
        limiteCredito: pessoa.limiteCredito,
        observacoes: pessoa.observacoes
    };
    if (pessoa.endereco) {
        client.endereco = {
            cep: pessoa.endereco.cep,
            logradouro: pessoa.endereco.logradouro,
            complemento: pessoa.endereco.complemento,
            bairro: pessoa.endereco.bairro,
            cidade: pessoa.endereco.cidade,
            estado: pessoa.endereco.estado
        };
    }
    if (pessoa.pessoaFisica) {
        client.nome = pessoa.pessoaFisica.nome;
        client.cpf = pessoa.pessoaFisica.cpf;
    }
    else if (pessoa.pessoaJuridica) {
        client.razaoSocial = pessoa.pessoaJuridica.razaoSocial;
        client.cnpj = pessoa.pessoaJuridica.cnpj;
    }
    else {
        return;
    }
    return client;
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzVG9FbnRpdGllcy5teXNxbC5kYXRhYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9teXNxbC9tb2RlbHNUb0VudGl0aWVzLm15c3FsLmRhdGFiYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0EsbUJBQXlCLE1BQVc7SUFDaEMsSUFBRyxDQUFDLE1BQU07UUFDTixPQUFPO0lBRVgsSUFBSSxNQUFNLEdBQWtCO1FBQ3hCLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTztRQUN2QixHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUc7UUFDZixhQUFhLEVBQUUsTUFBTSxDQUFDLGFBQWE7UUFDbkMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXO0tBQ2xDLENBQUM7SUFFRixJQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUM7UUFDZixNQUFNLENBQUMsUUFBUSxHQUFHO1lBQ2QsR0FBRyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRztZQUN4QixVQUFVLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVO1lBQ3RDLFdBQVcsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVc7WUFDeEMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTTtZQUM5QixNQUFNLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNO1lBQzlCLE1BQU0sRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU07U0FDakMsQ0FBQTtLQUNKO0lBRUQsSUFBRyxNQUFNLENBQUMsWUFBWSxFQUFDO1FBQ2xCLE1BQThCLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1FBQy9ELE1BQThCLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDO0tBQ2pFO1NBQU0sSUFBRyxNQUFNLENBQUMsY0FBYyxFQUFFO1FBQzVCLE1BQWdDLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO1FBQ2pGLE1BQWdDLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO0tBQ3ZFO1NBQU07UUFDSCxPQUFPO0tBQ1Y7SUFFRCxPQUFRLE1BQXVCLENBQUM7QUFDcEMsQ0FBQztBQWpDRCw0QkFpQ0MifQ==