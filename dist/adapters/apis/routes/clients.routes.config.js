"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsRoutes = void 0;
const common_routes_config_1 = require("./common.routes.config");
const clients_controller_1 = __importDefault(require("../controllers/clients.controller"));
const clients_middleware_1 = __importDefault(require("../middlewares/clients.middleware"));
class ClientsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'ClientsRoutes');
    }
    configureRoutes() {
        this.app.route(`/clients`)
            .get(clients_controller_1.default.listClients)
            .post(clients_middleware_1.default.validateRequiredClientBodyFields, clients_middleware_1.default.validateClientRepeated, clients_controller_1.default.createClient);
        this.app.route(`/clients/bulk`)
            .post(clients_middleware_1.default.uploadFile().single('file'), clients_middleware_1.default.parseXlsx, clients_controller_1.default.createClientBulk);
        this.app.route(`/clients/:clientId`)
            .all(clients_middleware_1.default.validateClientExists)
            .get(clients_controller_1.default.getClientById)
            .put(clients_middleware_1.default.validateRequiredClientBodyFields, clients_controller_1.default.updateClient)
            .delete(clients_controller_1.default.removeClient);
        return this.app;
    }
}
exports.ClientsRoutes = ClientsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvcm91dGVzL2NsaWVudHMucm91dGVzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxpRUFBNEQ7QUFDNUQsMkZBQWtFO0FBQ2xFLDJGQUFrRTtBQUdsRSxNQUFhLGFBQWMsU0FBUSx5Q0FBa0I7SUFDakQsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO2FBQ3JCLEdBQUcsQ0FBQyw0QkFBaUIsQ0FBQyxXQUFXLENBQUM7YUFDbEMsSUFBSSxDQUNELDRCQUFpQixDQUFDLGdDQUFnQyxFQUNsRCw0QkFBaUIsQ0FBQyxzQkFBc0IsRUFDeEMsNEJBQWlCLENBQUMsWUFBWSxDQUNqQyxDQUFDO1FBRUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2FBQ3RCLElBQUksQ0FDRCw0QkFBaUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQzdDLDRCQUFpQixDQUFDLFNBQVMsRUFDM0IsNEJBQWlCLENBQUMsZ0JBQWdCLENBQ3JDLENBQUE7UUFFVCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQzthQUN2QixHQUFHLENBQUMsNEJBQWlCLENBQUMsb0JBQW9CLENBQUM7YUFDM0MsR0FBRyxDQUFDLDRCQUFpQixDQUFDLGFBQWEsQ0FBQzthQUNwQyxHQUFHLENBQ0EsNEJBQWlCLENBQUMsZ0NBQWdDLEVBQ2xELDRCQUFpQixDQUFDLFlBQVksQ0FDakM7YUFDQSxNQUFNLENBQUMsNEJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFeEQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7Q0FDSjtBQWhDRCxzQ0FnQ0MifQ==