import { IAddressEntity } from '../../../domain/entities/clients/address.entity';
import { Cep } from '../../../adapters/connectors/cep.interface';
import fetch from "node-fetch";

export class ViaCep implements Cep {
    public async buscaEndereco(cep: string): Promise<IAddressEntity | undefined> {
        try{
            const responseCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        
            if(responseCep.status != 200)
                return;
    
            const dataCep = await responseCep.json();
            
            if('erro' in dataCep)
                return;
    
            return {
                cep: dataCep.cep,
                logradouro: dataCep.logradouro,
                complemento: dataCep.complemento,
                bairro: dataCep.bairro,
                cidade: dataCep.localidade,
                estado: dataCep.uf
            };
        } catch(error) {
            return;
        }
    }
        
}