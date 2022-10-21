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
const create_client_usecase_1 = __importDefault(require("../../../domain/usecases/clients/create.client.usecase"));
const faker_mocks_1 = __importDefault(require("./faker.mocks"));
class Mocks {
    constructor(mocksGenerator) {
        this._clients = mocksGenerator.getClients();
    }
    ;
    createClients() {
        return __awaiter(this, void 0, void 0, function* () {
            let countUsers = 0;
            for (countUsers = 0; countUsers < this._clients.length; countUsers++) {
                yield create_client_usecase_1.default.execute(this._clients[countUsers]);
            }
            return ({
                createdUsers: countUsers
            });
        });
    }
}
;
const mocks = new Mocks(new faker_mocks_1.default);
mocks.createClients().then((result) => {
    console.log(result);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9tb2Nrcy9tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbUhBQXlGO0FBQ3pGLGdFQUF1QztBQUd2QyxNQUFNLEtBQUs7SUFHUCxZQUFZLGNBQXNCO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFBQSxDQUFDO0lBRUksYUFBYTs7WUFDZixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDbkIsS0FBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsRUFBQztnQkFDaEUsTUFBTSwrQkFBbUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2FBQ2hFO1lBQ0QsT0FBTSxDQUFDO2dCQUNILFlBQVksRUFBRSxVQUFVO2FBQzNCLENBQUMsQ0FBQztRQUNQLENBQUM7S0FBQTtDQUNKO0FBQUEsQ0FBQztBQUVGLE1BQU0sS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUkscUJBQVUsQ0FBQyxDQUFDO0FBRXhDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtJQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ3ZCLENBQUMsQ0FBQyxDQUFBIn0=