"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(client) {
    const pessoa = {
        indexId: client.indexId,
        cep: client.cep,
        limiteCredito: client.limiteCredito,
        observacoes: client.observacoes
    };
    let pessoaFisica = undefined;
    if ('cpf' in client) {
        pessoaFisica = {
            idpessoa: undefined,
            cpf: client.cpf,
            nome: client.nome
        };
    }
    let pessoaJuridica = undefined;
    if ('cnpj' in client) {
        pessoaJuridica = {
            idpessoa: undefined,
            cnpj: client.cnpj,
            razaoSocial: client.razaoSocial
        };
    }
    let endereco = undefined;
    if ('endereco' in client) {
        endereco = Object.assign(Object.assign({}, client.endereco), { idpessoa: undefined });
    }
    return {
        pessoa: pessoa,
        pessoaFisica: pessoaFisica,
        pessoaJuridica: pessoaJuridica,
        endereco: endereco
    };
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRpZXNUb01vZGVscy5teXNxbC5kYXRhYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9teXNxbC9oZWxwZXJzL2VudGl0aWVzVG9Nb2RlbHMubXlzcWwuZGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxtQkFBeUIsTUFBb0I7SUFDekMsTUFBTSxNQUFNLEdBQUc7UUFDWCxPQUFPLEVBQUcsTUFBTSxDQUFDLE9BQU87UUFDeEIsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHO1FBQ2YsYUFBYSxFQUFFLE1BQU0sQ0FBQyxhQUFhO1FBQ25DLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVztLQUNsQyxDQUFDO0lBRUYsSUFBSSxZQUFZLEdBQUcsU0FBUyxDQUFDO0lBQzdCLElBQUcsS0FBSyxJQUFJLE1BQU0sRUFBQztRQUNmLFlBQVksR0FBRztZQUNYLFFBQVEsRUFBRSxTQUFTO1lBQ25CLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRztZQUNmLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtTQUNwQixDQUFBO0tBQ0o7SUFFRCxJQUFJLGNBQWMsR0FBRyxTQUFTLENBQUM7SUFDL0IsSUFBRyxNQUFNLElBQUksTUFBTSxFQUFDO1FBQ2hCLGNBQWMsR0FBRztZQUNiLFFBQVEsRUFBRSxTQUFTO1lBQ25CLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNqQixXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVc7U0FDbEMsQ0FBQTtLQUNKO0lBRUQsSUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLElBQUcsVUFBVSxJQUFJLE1BQU0sRUFBQztRQUNwQixRQUFRLG1DQUFRLE1BQU0sQ0FBQyxRQUFRLEdBQUssRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUUsQ0FBQztLQUNqRTtJQUVELE9BQU87UUFDSCxNQUFNLEVBQUUsTUFBTTtRQUNkLFlBQVksRUFBRSxZQUFZO1FBQzFCLGNBQWMsRUFBRSxjQUFjO1FBQzlCLFFBQVEsRUFBRSxRQUFRO0tBQ3JCLENBQUM7QUFDTixDQUFDO0FBckNELDRCQXFDQyJ9