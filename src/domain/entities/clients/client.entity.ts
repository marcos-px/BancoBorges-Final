import { IPessoaFisicaEntity } from "./pessoafisica.entity";
import { IPessoaJuridicaEntity } from "./pessoajuridica.entity";

export type ClientEntity = IPessoaFisicaEntity | IPessoaJuridicaEntity;