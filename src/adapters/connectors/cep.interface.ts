import { IAddressEntity } from '../../domain/entities/clients/address.entity';

export interface Cep {
    buscaEndereco(cep: string): Promise<IAddressEntity | undefined>;
}