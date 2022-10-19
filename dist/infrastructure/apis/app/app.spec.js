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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("./app"));
describe("Testes integrados de clientes", () => {
    test("Teste integrado de criação de cliente", () => __awaiter(void 0, void 0, void 0, function* () {
        const client = {
            "cpf": 123456789027,
            "nome": "Erik Borges",
            "limiteCredito": 1000.00,
            "observacoes": "Bom pagador :)",
            "cep": "35535000"
        };
        const res = yield (0, supertest_1.default)(app_1.default).post('/clients')
            .send(client)
            .set('Accept', 'application/json');
        expect(res.status).toEqual(201);
        expect(res.body).toMatchObject(client);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvYXBpcy9hcHAvYXBwLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBa0M7QUFDbEMsZ0RBQXdCO0FBR3hCLFFBQVEsQ0FBQywrQkFBK0IsRUFBRyxHQUFHLEVBQUU7SUFDNUMsSUFBSSxDQUFDLHVDQUF1QyxFQUFFLEdBQVMsRUFBRTtRQUNyRCxNQUFNLE1BQU0sR0FBaUI7WUFDekIsS0FBSyxFQUFFLFlBQVk7WUFDbkIsTUFBTSxFQUFFLGFBQWE7WUFDckIsZUFBZSxFQUFFLE9BQU87WUFDeEIsYUFBYSxFQUFFLGdCQUFnQjtZQUMvQixLQUFLLEVBQUUsVUFBVTtTQUNwQixDQUFDO1FBRUYsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFBLG1CQUFTLEVBQUMsYUFBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ1osR0FBRyxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRW5FLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUMsQ0FBQSxDQUFFLENBQUM7QUFDUixDQUFDLENBQUMsQ0FBQyJ9