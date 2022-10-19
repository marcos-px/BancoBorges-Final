import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('contas', {
            idconta: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            saldo: Sequelize.DataTypes.INTEGER,
            limiteTransferencia: Sequelize.DataTypes.INTEGER,
            numeroConta: Sequelize.DataTypes.INTEGER,
            rendimento: Sequelize.DataTypes.INTEGER,
            idpessoa: {
                type: Sequelize.DataTypes.INTEGER,
                references: {
                    model: {
                        tableName: 'pessoas'
                    },
                    key: 'idpessoa'
                }
            },
    })},
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('contas');
    }
}