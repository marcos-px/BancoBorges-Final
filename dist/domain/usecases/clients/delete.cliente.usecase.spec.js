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
const delete_client_usecase_1 = __importDefault(require("./delete.client.usecase"));
test("Teste unitário DeleteClientUsecase", () => __awaiter(void 0, void 0, void 0, function* () {
    const client = {
        clientId: 0
    };
    expect(yield delete_client_usecase_1.default.execute(client)).toBeUndefined();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLmNsaWVudGUudXNlY2FzZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RvbWFpbi91c2VjYXNlcy9jbGllbnRzL2RlbGV0ZS5jbGllbnRlLnVzZWNhc2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLG9GQUEwRDtBQUUxRCxJQUFJLENBQUMsb0NBQW9DLEVBQUUsR0FBUSxFQUFFO0lBQ2pELE1BQU0sTUFBTSxHQUFHO1FBQ1gsUUFBUSxFQUFFLENBQUM7S0FDZCxDQUFDO0lBQ0YsTUFBTSxDQUFDLE1BQU0sK0JBQW1CLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDdEUsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9