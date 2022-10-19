"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('pessoas_fisicas', [
            {
                "idpessoa": 1,
                "nome": "Erik Borges",
                "cpf": "12345678900"
            },
            {
                "idpessoa": 3,
                "nome": "Jhon Conor",
                "cpf": "11122233344"
            }
        ]);
    },
    down: (queryInterface) => {
        return queryInterface.bulkDelete('pessoas_fisicas', {});
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi1wZXNzb2FzZmlzaWNhcy5zZWVkZXJzLm15c3FsLmRhdGFiYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2luZnJhc3RydWN0dXJlL3BlcnNpc3RlbmNlL215c3FsL3NlZWRlcnMvMi1wZXNzb2FzZmlzaWNhcy5zZWVkZXJzLm15c3FsLmRhdGFiYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsa0JBQWU7SUFDWCxFQUFFLEVBQUUsQ0FBQyxjQUF3QyxFQUFFLEVBQUU7UUFDN0MsT0FBTyxjQUFjLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFO1lBQ2hEO2dCQUNJLFVBQVUsRUFBRSxDQUFDO2dCQUNiLE1BQU0sRUFBRSxhQUFhO2dCQUNyQixLQUFLLEVBQUUsYUFBYTthQUN2QjtZQUNEO2dCQUNJLFVBQVUsRUFBRSxDQUFDO2dCQUNiLE1BQU0sRUFBRSxZQUFZO2dCQUNwQixLQUFLLEVBQUUsYUFBYTthQUN2QjtTQUNKLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRCxJQUFJLEVBQUUsQ0FBQyxjQUF3QyxFQUFFLEVBQUU7UUFDL0MsT0FBTyxjQUFjLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7Q0FDSixDQUFDIn0=