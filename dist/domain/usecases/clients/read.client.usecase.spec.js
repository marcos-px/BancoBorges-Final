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
const read_client_usecase_1 = __importDefault(require("./read.client.usecase"));
const create_client_usecase_1 = __importDefault(require("./create.client.usecase"));
test("Teste unitário ReadClientUsecase", () => __awaiter(void 0, void 0, void 0, function* () {
    const client = {
        "cpf": 123456789027,
        "nome": "Erik Borges",
        "limiteCredito": 1000.00,
        "observacoes": "Bom pagador :)",
        "cep": "35535000"
    };
    yield create_client_usecase_1.default.execute(client);
    const client2 = {
        "cpf": 123456789027,
        "nome": "Erik Borges",
        "limiteCredito": 1000.00,
        "observacoes": "Bom pagador :)",
        "cep": "35535000"
    };
    expect(yield read_client_usecase_1.default.execute({ clientId: 0 })).toMatchObject(client2);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC5jbGllbnQudXNlY2FzZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RvbWFpbi91c2VjYXNlcy9jbGllbnRzL3JlYWQuY2xpZW50LnVzZWNhc2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGdGQUFzRDtBQUN0RCxvRkFBMEQ7QUFHMUQsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLEdBQVEsRUFBRTtJQUMvQyxNQUFNLE1BQU0sR0FBaUI7UUFDekIsS0FBSyxFQUFFLFlBQVk7UUFDbkIsTUFBTSxFQUFFLGFBQWE7UUFDckIsZUFBZSxFQUFFLE9BQU87UUFDeEIsYUFBYSxFQUFFLGdCQUFnQjtRQUMvQixLQUFLLEVBQUUsVUFBVTtLQUNwQixDQUFDO0lBQ0YsTUFBTSwrQkFBbUIsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUMsTUFBTSxPQUFPLEdBQWlCO1FBQzFCLEtBQUssRUFBRSxZQUFZO1FBQ25CLE1BQU0sRUFBRSxhQUFhO1FBQ3JCLGVBQWUsRUFBRSxPQUFPO1FBQ3hCLGFBQWEsRUFBRSxnQkFBZ0I7UUFDL0IsS0FBSyxFQUFFLFVBQVU7S0FDcEIsQ0FBQztJQUNGLE1BQU0sQ0FBQyxNQUFNLDZCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3BGLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==