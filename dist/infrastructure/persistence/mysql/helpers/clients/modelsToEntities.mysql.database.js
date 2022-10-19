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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzVG9FbnRpdGllcy5teXNxbC5kYXRhYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9teXNxbC9oZWxwZXJzL2NsaWVudHMvbW9kZWxzVG9FbnRpdGllcy5teXNxbC5kYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLG1CQUF5QixNQUFXO0lBQ2hDLElBQUcsQ0FBQyxNQUFNO1FBQ04sT0FBTztJQUVYLElBQUksTUFBTSxHQUFrQjtRQUN4QixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87UUFDdkIsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHO1FBQ2YsYUFBYSxFQUFFLE1BQU0sQ0FBQyxhQUFhO1FBQ25DLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVztLQUNsQyxDQUFDO0lBRUYsSUFBRyxNQUFNLENBQUMsUUFBUSxFQUFDO1FBQ2YsTUFBTSxDQUFDLFFBQVEsR0FBRztZQUNkLEdBQUcsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUc7WUFDeEIsVUFBVSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVTtZQUN0QyxXQUFXLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXO1lBQ3hDLE1BQU0sRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU07WUFDOUIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTTtZQUM5QixNQUFNLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNO1NBQ2pDLENBQUE7S0FDSjtJQUVELElBQUcsTUFBTSxDQUFDLFlBQVksRUFBQztRQUNsQixNQUE4QixDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztRQUMvRCxNQUE4QixDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQztLQUNqRTtTQUFNLElBQUcsTUFBTSxDQUFDLGNBQWMsRUFBRTtRQUM1QixNQUFnQyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQztRQUNqRixNQUFnQyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztLQUN2RTtTQUFNO1FBQ0gsT0FBTztLQUNWO0lBRUQsT0FBUSxNQUF1QixDQUFDO0FBQ3BDLENBQUM7QUFqQ0QsNEJBaUNDIn0=