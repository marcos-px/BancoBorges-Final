"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('pessoas', [
            {
                "idpessoa": 1,
                "cep": "35530000",
                "limiteCredito": 1000,
                "observacoes": "Bom pagador"
            },
            {
                "idpessoa": 2,
                "cep": "32676265",
                "limiteCredito": 0,
                "observacoes": null
            },
            {
                "idpessoa": 3,
                "cep": "1001000",
                "limiteCredito": 100,
                "observacoes": "Mal pagador"
            }
        ]);
    },
    down: (queryInterface) => {
        return queryInterface.bulkDelete('pessoas', {});
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS1wZXNzb2FzLnNlZWRlcnMubXlzcWwuZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvbXlzcWwvc2VlZGVycy8xLXBlc3NvYXMuc2VlZGVycy5teXNxbC5kYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGtCQUFlO0lBQ1gsRUFBRSxFQUFFLENBQUMsY0FBd0MsRUFBRSxFQUFFO1FBQzdDLE9BQU8sY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDeEM7Z0JBQ0ksVUFBVSxFQUFFLENBQUM7Z0JBQ2IsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLGVBQWUsRUFBRSxJQUFJO2dCQUNyQixhQUFhLEVBQUUsYUFBYTthQUMvQjtZQUNEO2dCQUNJLFVBQVUsRUFBRSxDQUFDO2dCQUNiLEtBQUssRUFBRSxVQUFVO2dCQUNqQixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLElBQUk7YUFDdEI7WUFDRDtnQkFDSSxVQUFVLEVBQUUsQ0FBQztnQkFDYixLQUFLLEVBQUUsU0FBUztnQkFDaEIsZUFBZSxFQUFFLEdBQUc7Z0JBQ3BCLGFBQWEsRUFBRSxhQUFhO2FBQy9CO1NBQ0osQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELElBQUksRUFBRSxDQUFDLGNBQXdDLEVBQUUsRUFBRTtRQUMvQyxPQUFPLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FDSixDQUFDIn0=