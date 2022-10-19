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
const Sequelize = __importStar(require("sequelize"));
exports.default = {
    up: (queryInterface) => {
        return queryInterface.createTable('pessoas_fisicas', {
            idpessoafisica: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                field: 'idpessoas_fisicas',
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
            nome: Sequelize.DataTypes.STRING,
            cpf: Sequelize.DataTypes.STRING
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('pessoas_fisicas');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi1wZXNzb2FzZmlzaWNhcy5taWdyYXRpb25zLm15c3FsLmRhdGFiYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2luZnJhc3RydWN0dXJlL3BlcnNpc3RlbmNlL215c3FsL21pZ3JhdGlvbnMvMi1wZXNzb2FzZmlzaWNhcy5taWdyYXRpb25zLm15c3FsLmRhdGFiYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBdUM7QUFFdkMsa0JBQWU7SUFDWCxFQUFFLEVBQUUsQ0FBQyxjQUF3QyxFQUFFLEVBQUU7UUFDN0MsT0FBTyxjQUFjLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFO1lBQ2pELGNBQWMsRUFBRTtnQkFDWixJQUFJLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPO2dCQUNqQyxVQUFVLEVBQUUsSUFBSTtnQkFDaEIsS0FBSyxFQUFFLG1CQUFtQjtnQkFDMUIsYUFBYSxFQUFFLElBQUk7YUFDdEI7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTztnQkFDakMsVUFBVSxFQUFFO29CQUNSLEtBQUssRUFBRTt3QkFDSCxTQUFTLEVBQUUsU0FBUztxQkFDdkI7b0JBQ0QsR0FBRyxFQUFFLFVBQVU7aUJBQ2xCO2FBQ0o7WUFDRCxJQUFJLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNO1lBQ2hDLEdBQUcsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU07U0FDbEMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELElBQUksRUFBRSxDQUFDLGNBQXdDLEVBQUUsRUFBRTtRQUMvQyxPQUFPLGNBQWMsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN2RCxDQUFDO0NBQ0osQ0FBQSJ9