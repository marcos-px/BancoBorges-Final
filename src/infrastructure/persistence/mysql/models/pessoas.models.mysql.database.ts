import { MysqlDatabase } from "../mysql.database";
import * as Sequelize from 'sequelize';

export default MysqlDatabase.getInstance().createModel('pessoas', {
    indexId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        field: 'idpessoa'
    },
    cep: Sequelize.DataTypes.STRING,
    limiteCredito: Sequelize.DataTypes.NUMBER,
    observacoes: Sequelize.DataTypes.STRING
});