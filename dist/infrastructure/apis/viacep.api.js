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
exports.ViaCep = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
class ViaCep {
    buscaEndereco(cep) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const responseCep = yield (0, node_fetch_1.default)(`https://viacep.com.br/ws/${cep}/json/`);
                if (responseCep.status != 200)
                    return;
                const dataCep = yield responseCep.json();
                if ('erro' in dataCep)
                    return;
                return {
                    cep: dataCep.cep,
                    logradouro: dataCep.logradouro,
                    complemento: dataCep.complemento,
                    bairro: dataCep.bairro,
                    cidade: dataCep.localidade,
                    estado: dataCep.uf
                };
            }
            catch (error) {
                return;
            }
        });
    }
}
exports.ViaCep = ViaCep;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlhY2VwLmFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9hcGlzL3ZpYWNlcC5hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsNERBQStCO0FBRS9CLE1BQWEsTUFBTTtJQUNGLGFBQWEsQ0FBQyxHQUFXOztZQUNsQyxJQUFHO2dCQUNDLE1BQU0sV0FBVyxHQUFHLE1BQU0sSUFBQSxvQkFBSyxFQUFDLDRCQUE0QixHQUFHLFFBQVEsQ0FBQyxDQUFDO2dCQUV6RSxJQUFHLFdBQVcsQ0FBQyxNQUFNLElBQUksR0FBRztvQkFDeEIsT0FBTztnQkFFWCxNQUFNLE9BQU8sR0FBRyxNQUFNLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFFekMsSUFBRyxNQUFNLElBQUksT0FBTztvQkFDaEIsT0FBTztnQkFFWCxPQUFPO29CQUNILEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRztvQkFDaEIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVO29CQUM5QixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7b0JBQ2hDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtvQkFDdEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxVQUFVO29CQUMxQixNQUFNLEVBQUUsT0FBTyxDQUFDLEVBQUU7aUJBQ3JCLENBQUM7YUFDTDtZQUFDLE9BQU0sS0FBSyxFQUFFO2dCQUNYLE9BQU87YUFDVjtRQUNMLENBQUM7S0FBQTtDQUVKO0FBMUJELHdCQTBCQyJ9