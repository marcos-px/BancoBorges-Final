import supertest from "supertest";
import api from "./app";
import { ClientEntity } from "../../../domain/entities/clients/client.entity";

describe("Testes integrados de clientes",  () => {
    test("Teste integrado de criação de cliente", async () => {
        const client: ClientEntity = {
            "cpf": 123456789027,
            "nome": "Erik Borges",
            "limiteCredito": 1000.00,
            "observacoes": "Bom pagador :)",
            "cep": "35535000"
        };

        const res = await supertest(api).post('/clients')
                                        .send(client)
                                        .set('Accept', 'application/json');

        expect(res.status).toEqual(201);
        expect(res.body).toMatchObject(client);
    } );
});