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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRpZXNUb01vZGVscy5teXNxbC5kYXRhYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9teXNxbC9lbnRpdGllc1RvTW9kZWxzLm15c3FsLmRhdGFiYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsbUJBQXlCLE1BQW9CO0lBQ3pDLE1BQU0sTUFBTSxHQUFHO1FBQ1gsT0FBTyxFQUFHLE1BQU0sQ0FBQyxPQUFPO1FBQ3hCLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRztRQUNmLGFBQWEsRUFBRSxNQUFNLENBQUMsYUFBYTtRQUNuQyxXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVc7S0FDbEMsQ0FBQztJQUVGLElBQUksWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUM3QixJQUFHLEtBQUssSUFBSSxNQUFNLEVBQUM7UUFDZixZQUFZLEdBQUc7WUFDWCxRQUFRLEVBQUUsU0FBUztZQUNuQixHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUc7WUFDZixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7U0FDcEIsQ0FBQTtLQUNKO0lBRUQsSUFBSSxjQUFjLEdBQUcsU0FBUyxDQUFDO0lBQy9CLElBQUcsTUFBTSxJQUFJLE1BQU0sRUFBQztRQUNoQixjQUFjLEdBQUc7WUFDYixRQUFRLEVBQUUsU0FBUztZQUNuQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7WUFDakIsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXO1NBQ2xDLENBQUE7S0FDSjtJQUVELElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUN6QixJQUFHLFVBQVUsSUFBSSxNQUFNLEVBQUM7UUFDcEIsUUFBUSxtQ0FBUSxNQUFNLENBQUMsUUFBUSxHQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFFLENBQUM7S0FDakU7SUFFRCxPQUFPO1FBQ0gsTUFBTSxFQUFFLE1BQU07UUFDZCxZQUFZLEVBQUUsWUFBWTtRQUMxQixjQUFjLEVBQUUsY0FBYztRQUM5QixRQUFRLEVBQUUsUUFBUTtLQUNyQixDQUFDO0FBQ04sQ0FBQztBQXJDRCw0QkFxQ0MifQ==