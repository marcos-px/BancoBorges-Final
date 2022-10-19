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
        return queryInterface.createTable('contas', {
            idconta: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            saldo: Sequelize.DataTypes.INTEGER,
            limiteTransferencia: Sequelize.DataTypes.INTEGER,
            numeroConta: Sequelize.DataTypes.INTEGER,
            rendimento: Sequelize.DataTypes.INTEGER,
            idpessoa: {
                type: Sequelize.DataTypes.INTEGER,
                references: {
                    model: {
                        tableName: 'pessoas'
                    },
                    key: 'idpessoa'
                }
            },
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('contas');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS1jb250YXMubWlncmF0aW9ucy5teXNxbC5kYXRhYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9teXNxbC9taWdyYXRpb25zLzUtY29udGFzLm1pZ3JhdGlvbnMubXlzcWwuZGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUF1QztBQUV2QyxrQkFBZTtJQUNYLEVBQUUsRUFBRSxDQUFDLGNBQXdDLEVBQUUsRUFBRTtRQUM3QyxPQUFPLGNBQWMsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO1lBQ3hDLE9BQU8sRUFBRTtnQkFDTCxJQUFJLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPO2dCQUNqQyxVQUFVLEVBQUUsSUFBSTtnQkFDaEIsYUFBYSxFQUFFLElBQUk7YUFDdEI7WUFDRCxLQUFLLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPO1lBQ2xDLG1CQUFtQixFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTztZQUNoRCxXQUFXLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPO1lBQ3hDLFVBQVUsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU87WUFDdkMsUUFBUSxFQUFFO2dCQUNOLElBQUksRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU87Z0JBQ2pDLFVBQVUsRUFBRTtvQkFDUixLQUFLLEVBQUU7d0JBQ0gsU0FBUyxFQUFFLFNBQVM7cUJBQ3ZCO29CQUNELEdBQUcsRUFBRSxVQUFVO2lCQUNsQjthQUNKO1NBQ1IsQ0FBQyxDQUFBO0lBQUEsQ0FBQztJQUNILElBQUksRUFBRSxDQUFDLGNBQXdDLEVBQUUsRUFBRTtRQUMvQyxPQUFPLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQztDQUNKLENBQUEifQ==