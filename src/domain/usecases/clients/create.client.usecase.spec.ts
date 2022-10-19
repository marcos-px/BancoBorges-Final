import { CreateClientUseCase } from "./create.client.usecase";
import { ClientEntity } from "../../entities/clients/client.entity";
import { ClientsRepository } from "../../../adapters/repositories/clients.repository";
import { ViaCepFactory } from "../../../infrastructure/apis/cep/viacepfactory.api";
import { ApiCepFactory } from "../../../infrastructure/apis/cep/apicepfactory.api";

jest.mock("../../../adapters/repositories/clients.repository");
const ClientsRepositoryMock = ClientsRepository as jest.Mock<ClientsRepository>;

test("Teste unitário createClientUsecase", async () => {

    const clientRepository = new ClientsRepositoryMock() as jest.Mocked<ClientsRepository>;
    clientRepository.create.mockResolvedValue({
        "cpf": 123456789027,
        "nome": "Erik Borges",
        "limiteCredito": 1000.00,
        "observacoes": "Bom pagador :)",
        "cep": "35535000",
        "endereco": {
            "bairro": "Bom Jardim das Pedras",
            "cep": "35535-000",
           "cidade": "Carmópolis de Minas",
           "complemento": "",
           "estado": "MG",
           "logradouro": "",
        }
    });

    const client: ClientEntity = {
        "cpf": 123456789027,
        "nome": "Erik Borges",
        "limiteCredito": 1000.00,
        "observacoes": "Bom pagador :)",
        "cep": "35535000"
    };

    const createClientUsecase = new CreateClientUseCase(
        clientRepository,
        new ViaCepFactory(),
        new ApiCepFactory()
    );

    expect(await createClientUsecase.execute(client)).toMatchObject(client);
});