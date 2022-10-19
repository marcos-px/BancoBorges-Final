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
exports.default = mysql_database_1.MysqlDatabase.getInstance().createModel('contas', {
    indexId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        field: 'idconta'
    },
    saldo: Sequelize.DataTypes.STRING,
    limiteTransferencia: Sequelize.DataTypes.STRING,
    numeroConta: Sequelize.DataTypes.STRING,
    rendimento: Sequelize.DataTypes.STRING,
    idpessoa: Sequelize.DataTypes.INTEGER,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFzLm1vZGVscy5teXNxbC5kYXRhYmFzZSBjb3B5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2luZnJhc3RydWN0dXJlL3BlcnNpc3RlbmNlL215c3FsL21vZGVscy9jb250YXMubW9kZWxzLm15c3FsLmRhdGFiYXNlIGNvcHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFrRDtBQUNsRCxxREFBdUM7QUFFdkMsa0JBQWUsOEJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUcsUUFBUSxFQUFFO0lBQy9ELE9BQU8sRUFBRTtRQUNMLElBQUksRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU87UUFDakMsVUFBVSxFQUFFLElBQUk7UUFDaEIsS0FBSyxFQUFDLFNBQVM7S0FDbEI7SUFDRCxLQUFLLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0lBQ2pDLG1CQUFtQixFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTTtJQUMvQyxXQUFXLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0lBQ3ZDLFVBQVUsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU07SUFDdEMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTztDQUV4QyxDQUFDLENBQUMifQ==