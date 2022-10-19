import { MysqlDatabase } from "../mysql.database";
import * as Sequelize from 'sequelize';

export default MysqlDatabase.getInstance().createModel('pessoas_juridicas', {
    idpessoajuridica: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        field: 'idpessoas_juridicas'
    },
    idpessoa: Sequelize.DataTypes.INTEGER,
    razaoSocial: Sequelize.DataTypes.STRING,
    cnpj: Sequelize.DataTypes.NUMBER
});