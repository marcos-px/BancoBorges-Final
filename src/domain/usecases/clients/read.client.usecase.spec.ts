import readClientUsecase from './read.client.usecase';
import createClientUsecase from './create.client.usecase';
import { ClientEntity } from "../../entities/clients/client.entity";

test("Teste unitário ReadClientUsecase", async() => {
    const client: ClientEntity = {
        "cpf": 123456789027,
        "nome": "Erik Borges",
        "limiteCredito": 1000.00,
        "observacoes": "Bom pagador :)",
        "cep": "35535000"
    };
    await createClientUsecase.execute(client);
    const client2: ClientEntity = {
        "cpf": 123456789027,
        "nome": "Erik Borges",
        "limiteCredito": 1000.00,
        "observacoes": "Bom pagador :)",
        "cep": "35535000"
    };
    expect(await readClientUsecase.execute({ clientId: 0 })).toMatchObject(client2);
});