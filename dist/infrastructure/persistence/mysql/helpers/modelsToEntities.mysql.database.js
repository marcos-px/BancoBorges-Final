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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzVG9FbnRpdGllcy5teXNxbC5kYXRhYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9teXNxbC9oZWxwZXJzL21vZGVsc1RvRW50aXRpZXMubXlzcWwuZGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSxtQkFBeUIsTUFBVztJQUNoQyxJQUFHLENBQUMsTUFBTTtRQUNOLE9BQU87SUFFWCxJQUFJLE1BQU0sR0FBa0I7UUFDeEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1FBQ3ZCLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRztRQUNmLGFBQWEsRUFBRSxNQUFNLENBQUMsYUFBYTtRQUNuQyxXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVc7S0FDbEMsQ0FBQztJQUVGLElBQUcsTUFBTSxDQUFDLFFBQVEsRUFBQztRQUNmLE1BQU0sQ0FBQyxRQUFRLEdBQUc7WUFDZCxHQUFHLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHO1lBQ3hCLFVBQVUsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVU7WUFDdEMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVztZQUN4QyxNQUFNLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNO1lBQzlCLE1BQU0sRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU07WUFDOUIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTTtTQUNqQyxDQUFBO0tBQ0o7SUFFRCxJQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUM7UUFDbEIsTUFBOEIsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDL0QsTUFBOEIsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7S0FDakU7U0FBTSxJQUFHLE1BQU0sQ0FBQyxjQUFjLEVBQUU7UUFDNUIsTUFBZ0MsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7UUFDakYsTUFBZ0MsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7S0FDdkU7U0FBTTtRQUNILE9BQU87S0FDVjtJQUVELE9BQVEsTUFBdUIsQ0FBQztBQUNwQyxDQUFDO0FBakNELDRCQWlDQyJ9