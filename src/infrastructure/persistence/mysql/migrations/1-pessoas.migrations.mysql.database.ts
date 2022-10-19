import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('pessoas', {
            indexId: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                field: 'idpessoa',
                autoIncrement: true
            },
            cep: Sequelize.DataTypes.STRING,
            limiteCredito: Sequelize.DataTypes.INTEGER,
            observacoes: Sequelize.DataTypes.STRING
        });
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('pessoas');
    }
}