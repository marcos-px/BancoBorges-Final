import { Cep } from './cep.interface';
import { IAddressEntity } from '../../domain/entities/clients/address.entity';

export abstract class CepFactory {
    public abstract factoryMethod(): Cep;

    public preencheEndereco(cep: string): Promise<IAddressEntity | undefined> {
        const cepProvider = this.factoryMethod();

        return cepProvider.buscaEndereco(cep);
    }
}