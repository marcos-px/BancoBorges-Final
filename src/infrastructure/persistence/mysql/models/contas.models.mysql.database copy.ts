import { MysqlDatabase } from "../mysql.database";
import * as Sequelize from 'sequelize';

export default MysqlDatabase.getInstance().createModel ( 'contas', {
    indexId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        field:'idconta'
    },
    saldo: Sequelize.DataTypes.STRING,
    limiteTransferencia: Sequelize.DataTypes.STRING,
    numeroConta: Sequelize.DataTypes.STRING,
    rendimento: Sequelize.DataTypes.STRING,
    idpessoa: Sequelize.DataTypes.INTEGER,
    
});
