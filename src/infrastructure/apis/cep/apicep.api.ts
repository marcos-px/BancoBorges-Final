import { IAddressEntity } from '../../../domain/entities/clients/address.entity';
import { Cep } from '../../../adapters/connectors/cep.interface';
import fetch from "node-fetch";

export class ApiCep implements Cep {
    public async buscaEndereco(cep: string): Promise<IAddressEntity | undefined> {
        try{
            const responseCep = await fetch(`https://cdn.apicep.com/file/apicep/${cep.slice(0, 5)}-${cep.slice(5, 8)}.json`);
            
            if(responseCep.status != 200)
                return;

            const dataCep = await responseCep.json();

            return {
                cep: dataCep.code,
                logradouro: dataCep.address,
                bairro: dataCep.district,
                cidade: dataCep.city,
                estado: dataCep.state
            };
        } catch(error) {
            return;
        }
    }
}