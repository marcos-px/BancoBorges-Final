import { IDatabase } from "./database.interface";

export class ArrayDatabase implements IDatabase {
    private static _instance: ArrayDatabase;
    private _data: any;

    private constructor(){
        this._data = {};
    }

    public static getInstance(): ArrayDatabase {
        if (!ArrayDatabase._instance) {
            ArrayDatabase._instance = new ArrayDatabase();
        }

        return ArrayDatabase._instance;
    }

    create(type: string, data: any): number {
        let obj: any;
        
        if(this._data[type] === undefined){
            this._data[type] = [];
        }

        data.indexId = this._data[type] ? this._data[type].length : 0;
        obj = data;
        this._data[type].push(obj);

        return obj.indexId;
    }

    update(type: string, data: any): boolean {
        let obj: any;
        
        obj = data;

        if(obj.indexId === undefined)
            return false;
        
        this._data[type][obj.indexId] = obj;

        return obj;
    }

    list(type: string): any[] {
        let objs: any[] = [];

        if(this._data[type] === undefined){
            return [];
        }

        for(let data of this._data[type])
            objs.push(data);

        return objs;
    }

    delete(type: string, dataId: number): boolean {

        if(this._data[type] === undefined){
            return false;
        }

        const indexId = this._data.findIndex((obj: any) => {
                return obj.indexId === dataId;
        });
        

        if(indexId === undefined)
            return false;

        this._data[type].splice(indexId, 1);

        return true;
    }

    read(type: string, dataId: number): any {

        if(this._data[type] === undefined){
            return undefined;
        }

        const data = this._data[type].find((obj: any) => {
                return obj.indexId === dataId;
        });

        if(!data)
            return false;

        return data;
    }
}