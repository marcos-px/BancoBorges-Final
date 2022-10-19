"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViaCepFactory = void 0;
const cepfactory_api_1 = require("../../../adapters/connectors/cepfactory.api");
const viacep_api_1 = require("./viacep.api");
class ViaCepFactory extends cepfactory_api_1.CepFactory {
    factoryMethod() {
        return new viacep_api_1.ViaCep();
    }
}
exports.ViaCepFactory = ViaCepFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlhY2VwZmFjdG9yeS5hcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvYXBpcy9jZXAvdmlhY2VwZmFjdG9yeS5hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsZ0ZBQXlFO0FBQ3pFLDZDQUFzQztBQUV0QyxNQUFhLGFBQWMsU0FBUSwyQkFBVTtJQUNsQyxhQUFhO1FBQ2hCLE9BQU8sSUFBSSxtQkFBTSxFQUFFLENBQUM7SUFDeEIsQ0FBQztDQUNKO0FBSkQsc0NBSUMifQ==