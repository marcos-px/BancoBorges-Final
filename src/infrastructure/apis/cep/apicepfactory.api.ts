import { Cep } from '../../../adapters/connectors/cep.interface';
import { CepFactory } from '../../../adapters/connectors/cepfactory.api';
import { ApiCep } from './apicep.api';

export class ApiCepFactory extends CepFactory {
    public factoryMethod(): Cep {
        return new ApiCep();
    }
}