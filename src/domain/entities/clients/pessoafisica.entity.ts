import { IPessoaEntity } from "./pessoa.entity";

export interface IPessoaFisicaEntity extends IPessoaEntity {
    nome: string,
    cpf: number
}