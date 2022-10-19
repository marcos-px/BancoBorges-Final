import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkInsert('pessoas_juridicas', [
            {
                "idpessoa": 2,
                "razaoSocial": "SkyNet",
                "cnpj": "26742457000165"
            }
        ])
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkDelete('pessoas_juridicas', {});
    }
};