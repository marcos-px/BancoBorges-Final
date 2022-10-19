"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: (queryInterface) => {
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
        ]);
    },
    down: (queryInterface) => {
        return queryInterface.bulkDelete('enderecos', {});
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC1lbmRlcmVjb3Muc2VlZGVycy5teXNxbC5kYXRhYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9teXNxbC9zZWVkZXJzLzQtZW5kZXJlY29zLnNlZWRlcnMubXlzcWwuZGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxrQkFBZTtJQUNYLEVBQUUsRUFBRSxDQUFDLGNBQXdDLEVBQUUsRUFBRTtRQUM3QyxPQUFPLGNBQWMsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFO1lBQzFDO2dCQUNJLFVBQVUsRUFBRSxDQUFDO2dCQUNiLEtBQUssRUFBRSxXQUFXO2dCQUNsQixZQUFZLEVBQUUsRUFBRTtnQkFDaEIsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRSxJQUFJO2FBQ2pCO1lBQ0Q7Z0JBQ0ksVUFBVSxFQUFFLENBQUM7Z0JBQ2IsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLFlBQVksRUFBRSxnQ0FBZ0M7Z0JBQzlDLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFLElBQUk7YUFDakI7WUFDRDtnQkFDSSxVQUFVLEVBQUUsQ0FBQztnQkFDYixLQUFLLEVBQUUsV0FBVztnQkFDbEIsWUFBWSxFQUFFLGFBQWE7Z0JBQzNCLFFBQVEsRUFBRSxJQUFJO2dCQUNkLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsSUFBSTthQUNqQjtTQUNKLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRCxJQUFJLEVBQUUsQ0FBQyxjQUF3QyxFQUFFLEVBQUU7UUFDL0MsT0FBTyxjQUFjLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDO0NBQ0osQ0FBQyJ9