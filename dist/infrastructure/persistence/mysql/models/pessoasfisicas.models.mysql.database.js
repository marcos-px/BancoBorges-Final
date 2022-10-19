"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_database_1 = require("../mysql.database");
const Sequelize = __importStar(require("sequelize"));
exports.default = mysql_database_1.MysqlDatabase.getInstance().createModel('pessoas_fisicas', {
    idpessoafisica: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        field: 'idpessoas_fisicas'
    },
    idpessoa: Sequelize.DataTypes.INTEGER,
    nome: Sequelize.DataTypes.STRING,
    cpf: Sequelize.DataTypes.NUMBER
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVzc29hc2Zpc2ljYXMubW9kZWxzLm15c3FsLmRhdGFiYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2luZnJhc3RydWN0dXJlL3BlcnNpc3RlbmNlL215c3FsL21vZGVscy9wZXNzb2FzZmlzaWNhcy5tb2RlbHMubXlzcWwuZGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFrRDtBQUNsRCxxREFBdUM7QUFFdkMsa0JBQWUsOEJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUU7SUFDdEUsY0FBYyxFQUFFO1FBQ1osSUFBSSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTztRQUNqQyxVQUFVLEVBQUUsSUFBSTtRQUNoQixLQUFLLEVBQUUsbUJBQW1CO0tBQzdCO0lBQ0QsUUFBUSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTztJQUNyQyxJQUFJLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0lBQ2hDLEdBQUcsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU07Q0FDbEMsQ0FBQyxDQUFDIn0=