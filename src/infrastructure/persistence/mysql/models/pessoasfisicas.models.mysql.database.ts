import { MysqlDatabase } from "../mysql.database";
import * as Sequelize from 'sequelize';

export default MysqlDatabase.getInstance().createModel('pessoas_fisicas', {
    idpessoafisica: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        field: 'idpessoas_fisicas'
    },
    idpessoa: Sequelize.DataTypes.INTEGER,
    nome: Sequelize.DataTypes.STRING,
    cpf: Sequelize.DataTypes.NUMBER
});