"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('pessoas_juridicas', [
            {
                "idpessoa": 2,
                "razaoSocial": "SkyNet",
                "cnpj": "26742457000165"
            }
        ]);
    },
    down: (queryInterface) => {
        return queryInterface.bulkDelete('pessoas_juridicas', {});
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy1wZXNzb2FzanVyaWRpY2FzLnNlZWRlcnMubXlzcWwuZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvbXlzcWwvc2VlZGVycy8zLXBlc3NvYXNqdXJpZGljYXMuc2VlZGVycy5teXNxbC5kYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGtCQUFlO0lBQ1gsRUFBRSxFQUFFLENBQUMsY0FBd0MsRUFBRSxFQUFFO1FBQzdDLE9BQU8sY0FBYyxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRTtZQUNsRDtnQkFDSSxVQUFVLEVBQUUsQ0FBQztnQkFDYixhQUFhLEVBQUUsUUFBUTtnQkFDdkIsTUFBTSxFQUFFLGdCQUFnQjthQUMzQjtTQUNKLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRCxJQUFJLEVBQUUsQ0FBQyxjQUF3QyxFQUFFLEVBQUU7UUFDL0MsT0FBTyxjQUFjLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlELENBQUM7Q0FDSixDQUFDIn0=