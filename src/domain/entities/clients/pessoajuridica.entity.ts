import { IPessoaEntity } from "./pessoa.entity";

export interface IPessoaJuridicaEntity extends IPessoaEntity {
    razaoSocial: string,
    cnpj: number
}