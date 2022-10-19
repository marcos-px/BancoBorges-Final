"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_client_usecase_1 = require("./create.client.usecase");
const clients_repository_1 = require("../../../adapters/repositories/clients.repository");
const viacepfactory_api_1 = require("../../../infrastructure/apis/cep/viacepfactory.api");
const apicepfactory_api_1 = require("../../../infrastructure/apis/cep/apicepfactory.api");
jest.mock("../../../adapters/repositories/clients.repository");
const ClientsRepositoryMock = clients_repository_1.ClientsRepository;
test("Teste unitário createClientUsecase", () => __awaiter(void 0, void 0, void 0, function* () {
    const clientRepository = new ClientsRepositoryMock();
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
    const client = {
        "cpf": 123456789027,
        "nome": "Erik Borges",
        "limiteCredito": 1000.00,
        "observacoes": "Bom pagador :)",
        "cep": "35535000"
    };
    const createClientUsecase = new create_client_usecase_1.CreateClientUseCase(clientRepository, new viacepfactory_api_1.ViaCepFactory(), new apicepfactory_api_1.ApiCepFactory());
    expect(yield createClientUsecase.execute(client)).toMatchObject(client);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmNsaWVudC51c2VjYXNlLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZG9tYWluL3VzZWNhc2VzL2NsaWVudHMvY3JlYXRlLmNsaWVudC51c2VjYXNlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxtRUFBOEQ7QUFFOUQsMEZBQXNGO0FBQ3RGLDBGQUFtRjtBQUNuRiwwRkFBbUY7QUFFbkYsSUFBSSxDQUFDLElBQUksQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO0FBQy9ELE1BQU0scUJBQXFCLEdBQUcsc0NBQWlELENBQUM7QUFFaEYsSUFBSSxDQUFDLG9DQUFvQyxFQUFFLEdBQVMsRUFBRTtJQUVsRCxNQUFNLGdCQUFnQixHQUFHLElBQUkscUJBQXFCLEVBQW9DLENBQUM7SUFDdkYsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1FBQ3RDLEtBQUssRUFBRSxZQUFZO1FBQ25CLE1BQU0sRUFBRSxhQUFhO1FBQ3JCLGVBQWUsRUFBRSxPQUFPO1FBQ3hCLGFBQWEsRUFBRSxnQkFBZ0I7UUFDL0IsS0FBSyxFQUFFLFVBQVU7UUFDakIsVUFBVSxFQUFFO1lBQ1IsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxLQUFLLEVBQUUsV0FBVztZQUNuQixRQUFRLEVBQUUscUJBQXFCO1lBQy9CLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsWUFBWSxFQUFFLEVBQUU7U0FDbEI7S0FDSixDQUFDLENBQUM7SUFFSCxNQUFNLE1BQU0sR0FBaUI7UUFDekIsS0FBSyxFQUFFLFlBQVk7UUFDbkIsTUFBTSxFQUFFLGFBQWE7UUFDckIsZUFBZSxFQUFFLE9BQU87UUFDeEIsYUFBYSxFQUFFLGdCQUFnQjtRQUMvQixLQUFLLEVBQUUsVUFBVTtLQUNwQixDQUFDO0lBRUYsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLDJDQUFtQixDQUMvQyxnQkFBZ0IsRUFDaEIsSUFBSSxpQ0FBYSxFQUFFLEVBQ25CLElBQUksaUNBQWEsRUFBRSxDQUN0QixDQUFDO0lBRUYsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzVFLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==