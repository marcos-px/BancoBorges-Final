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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpY2VwLmFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9hcGlzL2NlcC9hcGljZXAuYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDREQUErQjtBQUUvQixNQUFhLE1BQU07SUFDRixhQUFhLENBQUMsR0FBVzs7WUFDbEMsSUFBRztnQkFDQyxNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUEsb0JBQUssRUFBQyxzQ0FBc0MsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUVqSCxJQUFHLFdBQVcsQ0FBQyxNQUFNLElBQUksR0FBRztvQkFDeEIsT0FBTztnQkFFWCxNQUFNLE9BQU8sR0FBRyxNQUFNLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFFekMsT0FBTztvQkFDSCxHQUFHLEVBQUUsT0FBTyxDQUFDLElBQUk7b0JBQ2pCLFVBQVUsRUFBRSxPQUFPLENBQUMsT0FBTztvQkFDM0IsTUFBTSxFQUFFLE9BQU8sQ0FBQyxRQUFRO29CQUN4QixNQUFNLEVBQUUsT0FBTyxDQUFDLElBQUk7b0JBQ3BCLE1BQU0sRUFBRSxPQUFPLENBQUMsS0FBSztpQkFDeEIsQ0FBQzthQUNMO1lBQUMsT0FBTSxLQUFLLEVBQUU7Z0JBQ1gsT0FBTzthQUNWO1FBQ0wsQ0FBQztLQUFBO0NBQ0o7QUFyQkQsd0JBcUJDIn0=