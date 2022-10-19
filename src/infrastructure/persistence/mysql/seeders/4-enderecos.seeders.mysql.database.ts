import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkInsert('enderecos', [
            {
                "idpessoa": 1,
                "cep": "35530-000",
                "logradouro": "",
                "bairro": "",
                "cidade": "Cláudio",
                "estado": "MG"
            },
            {
                "idpessoa": 2,
                "cep": "32676-265",
                "logradouro": "Avenida Juiz Marco Túlio Isaac",
                "bairro": "Laranjeiras",
                "cidade": "Betim",
                "estado": "MG"
            },
            {
                "idpessoa": 3,
                "cep": "01001-000",
                "logradouro": "Praça da Sé",
                "bairro": "Sé",
                "cidade": "São Paulo",
                "estado": "SP"
            }
        ])
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkDelete('enderecos', {});
    }
};