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
exports.ApiCep = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
class ApiCep {
    buscaEndereco(cep) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const responseCep = yield (0, node_fetch_1.default)(`https://cdn.apicep.com/file/apicep/${cep.slice(0, 5)}-${cep.slice(5, 8)}.json`);
                if (responseCep.status != 200)
                    return;
                const dataCep = yield responseCep.json();
                return {
                    cep: dataCep.code,
                    logradouro: dataCep.address,
                    bairro: dataCep.district,
                    cidade: dataCep.city,
                    estado: dataCep.state
                };
            }
            catch (error) {
                return;
            }
        });
    }
}
exports.ApiCep = ApiCep;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpY2VwLmFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9hcGlzL2FwaWNlcC5hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsNERBQStCO0FBRS9CLE1BQWEsTUFBTTtJQUNGLGFBQWEsQ0FBQyxHQUFXOztZQUNsQyxJQUFHO2dCQUNDLE1BQU0sV0FBVyxHQUFHLE1BQU0sSUFBQSxvQkFBSyxFQUFDLHNDQUFzQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBRWpILElBQUcsV0FBVyxDQUFDLE1BQU0sSUFBSSxHQUFHO29CQUN4QixPQUFPO2dCQUVYLE1BQU0sT0FBTyxHQUFHLE1BQU0sV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUV6QyxPQUFPO29CQUNILEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSTtvQkFDakIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxPQUFPO29CQUMzQixNQUFNLEVBQUUsT0FBTyxDQUFDLFFBQVE7b0JBQ3hCLE1BQU0sRUFBRSxPQUFPLENBQUMsSUFBSTtvQkFDcEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxLQUFLO2lCQUN4QixDQUFDO2FBQ0w7WUFBQyxPQUFNLEtBQUssRUFBRTtnQkFDWCxPQUFPO2FBQ1Y7UUFDTCxDQUFDO0tBQUE7Q0FDSjtBQXJCRCx3QkFxQkMifQ==