import { ClientEntity } from "../../../domain/entities/clients/client.entity";
import createClientUsecase from "../../../domain/usecases/clients/create.client.usecase";
import FakerMocks from "./faker.mocks";
import Imocks from "./mocks.interface";

class Mocks{
    private _clients: ClientEntity[];

    constructor(mocksGenerator: Imocks){
        this._clients = mocksGenerator.getClients();
    };

    async createClients(){
        let countUsers = 0;
        for(countUsers = 0; countUsers < this._clients.length; countUsers++){
            await createClientUsecase.execute(this._clients[countUsers]);
        }
        return({
            createdUsers: countUsers
        });
    }
};

const mocks = new Mocks(new FakerMocks);

mocks.createClients().then((result) => {
    console.log(result)
})