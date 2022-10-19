import { MysqlDatabase } from "../mysql.database";
import * as Sequelize from 'sequelize';

export default MysqlDatabase.getInstance().createModel('enderecos', {
    idenderecos: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true
    },
    cep: Sequelize.DataTypes.STRING,
    logradouro: Sequelize.DataTypes.STRING,
    bairro: Sequelize.DataTypes.STRING,
    cidade: Sequelize.DataTypes.STRING,
    estado: Sequelize.DataTypes.STRING
});