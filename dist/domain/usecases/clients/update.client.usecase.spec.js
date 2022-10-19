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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const update_client_usecase_1 = __importDefault(require("./update.client.usecase"));
const create_client_usecase_1 = __importDefault(require("./create.client.usecase"));
test("Teste unitário UpdateClientUsecase", () => __awaiter(void 0, void 0, void 0, function* () {
    const client = {
        "cpf": 123456789027,
        "nome": "Erik Borges",
        "limiteCredito": 1000.00,
        "observacoes": "Bom pagador :)",
        "cep": "35535000"
    };
    yield create_client_usecase_1.default.execute(client);
    const client2 = {
        "cpf": 1112,
        "nome": "Erik Borges",
        "limiteCredito": 1000.00,
        "observacoes": "Bom pagador :)",
        "cep": "35535000"
    };
    const client3 = {
        "cpf": 1112,
        "nome": "Erik Borges",
        "limiteCredito": 1000.00,
        "observacoes": "Bom pagador :)",
        "cep": "35535000"
    };
    expect(yield update_client_usecase_1.default.execute(client2)).toMatchObject(client3);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLmNsaWVudC51c2VjYXNlLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZG9tYWluL3VzZWNhc2VzL2NsaWVudHMvdXBkYXRlLmNsaWVudC51c2VjYXNlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvRkFBMEQ7QUFDMUQsb0ZBQTBEO0FBRzFELElBQUksQ0FBQyxvQ0FBb0MsRUFBRSxHQUFRLEVBQUU7SUFDakQsTUFBTSxNQUFNLEdBQWlCO1FBQ3pCLEtBQUssRUFBRSxZQUFZO1FBQ25CLE1BQU0sRUFBRSxhQUFhO1FBQ3JCLGVBQWUsRUFBRSxPQUFPO1FBQ3hCLGFBQWEsRUFBRSxnQkFBZ0I7UUFDL0IsS0FBSyxFQUFFLFVBQVU7S0FDcEIsQ0FBQztJQUNGLE1BQU0sK0JBQW1CLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLE1BQU0sT0FBTyxHQUFpQjtRQUMxQixLQUFLLEVBQUUsSUFBSTtRQUNYLE1BQU0sRUFBRSxhQUFhO1FBQ3JCLGVBQWUsRUFBRSxPQUFPO1FBQ3hCLGFBQWEsRUFBRSxnQkFBZ0I7UUFDL0IsS0FBSyxFQUFFLFVBQVU7S0FDcEIsQ0FBQztJQUNGLE1BQU0sT0FBTyxHQUFpQjtRQUMxQixLQUFLLEVBQUUsSUFBSTtRQUNYLE1BQU0sRUFBRSxhQUFhO1FBQ3JCLGVBQWUsRUFBRSxPQUFPO1FBQ3hCLGFBQWEsRUFBRSxnQkFBZ0I7UUFDL0IsS0FBSyxFQUFFLFVBQVU7S0FDcEIsQ0FBQztJQUNGLE1BQU0sQ0FBQyxNQUFNLCtCQUFtQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM5RSxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=