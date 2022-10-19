"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViaCepFactory = void 0;
const cepfactory_api_1 = require("../../adapters/connectors/cepfactory.api");
const viacep_api_1 = require("./viacep.api");
class ViaCepFactory extends cepfactory_api_1.CepFactory {
    factoryMethod() {
        return new viacep_api_1.ViaCep();
    }
}
exports.ViaCepFactory = ViaCepFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlhY2VwZmFjdG9yeS5hcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvYXBpcy92aWFjZXBmYWN0b3J5LmFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw2RUFBc0U7QUFDdEUsNkNBQXNDO0FBRXRDLE1BQWEsYUFBYyxTQUFRLDJCQUFVO0lBQ2xDLGFBQWE7UUFDaEIsT0FBTyxJQUFJLG1CQUFNLEVBQUUsQ0FBQztJQUN4QixDQUFDO0NBQ0o7QUFKRCxzQ0FJQyJ9