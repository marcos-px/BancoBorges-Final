import { Cep } from '../../../adapters/connectors/cep.interface';
import { CepFactory } from '../../../adapters/connectors/cepfactory.api';
import { ViaCep } from './viacep.api';

export class ViaCepFactory extends CepFactory {
    public factoryMethod(): Cep {
        return new ViaCep();
    }
}