import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('pessoas_juridicas', {
            idpessoajuridica: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                field: 'idpessoas_juridicas',
                autoIncrement: true
            },
            idpessoa: {
                type: Sequelize.DataTypes.INTEGER,
                references: {
                    model: {
                        tableName: 'pessoas'
                    },
                    key: 'idpessoa'
                }
            },
            razaoSocial: Sequelize.DataTypes.STRING,
            cnpj: Sequelize.DataTypes.STRING
        });
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('pessoas_juridicas');
    }
}