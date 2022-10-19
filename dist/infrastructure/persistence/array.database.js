"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayDatabase = void 0;
class ArrayDatabase {
    constructor() {
        this._data = {};
    }
    static getInstance() {
        if (!ArrayDatabase._instance) {
            ArrayDatabase._instance = new ArrayDatabase();
        }
        return ArrayDatabase._instance;
    }
    create(type, data) {
        let obj;
        if (this._data[type] === undefined) {
            this._data[type] = [];
        }
        data.indexId = this._data[type] ? this._data[type].length : 0;
        obj = data;
        this._data[type].push(obj);
        return obj.indexId;
    }
    update(type, data) {
        let obj;
        obj = data;
        if (obj.indexId === undefined)
            return false;
        this._data[type][obj.indexId] = obj;
        return obj;
    }
    list(type) {
        let objs = [];
        if (this._data[type] === undefined) {
            return [];
        }
        for (let data of this._data[type])
            objs.push(data);
        return objs;
    }
    delete(type, dataId) {
        if (this._data[type] === undefined) {
            return false;
        }
        const indexId = this._data.findIndex((obj) => {
            return obj.indexId === dataId;
        });
        if (indexId === undefined)
            return false;
        this._data[type].splice(indexId, 1);
        return true;
    }
    read(type, dataId) {
        if (this._data[type] === undefined) {
            return undefined;
        }
        const data = this._data[type].find((obj) => {
            return obj.indexId === dataId;
        });
        if (!data)
            return false;
        return data;
    }
}
exports.ArrayDatabase = ArrayDatabase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvYXJyYXkuZGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSxhQUFhO0lBSXRCO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxXQUFXO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFO1lBQzFCLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztTQUNqRDtRQUVELE9BQU8sYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQVksRUFBRSxJQUFTO1FBQzFCLElBQUksR0FBUSxDQUFDO1FBRWIsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBQztZQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUN6QjtRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RCxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFM0IsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBWSxFQUFFLElBQVM7UUFDMUIsSUFBSSxHQUFRLENBQUM7UUFFYixHQUFHLEdBQUcsSUFBSSxDQUFDO1FBRVgsSUFBRyxHQUFHLENBQUMsT0FBTyxLQUFLLFNBQVM7WUFDeEIsT0FBTyxLQUFLLENBQUM7UUFFakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBRXBDLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVELElBQUksQ0FBQyxJQUFZO1FBQ2IsSUFBSSxJQUFJLEdBQVUsRUFBRSxDQUFDO1FBRXJCLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLEVBQUM7WUFDOUIsT0FBTyxFQUFFLENBQUM7U0FDYjtRQUVELEtBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTSxDQUFDLElBQVksRUFBRSxNQUFjO1FBRS9CLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLEVBQUM7WUFDOUIsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQzFDLE9BQU8sR0FBRyxDQUFDLE9BQU8sS0FBSyxNQUFNLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFHSCxJQUFHLE9BQU8sS0FBSyxTQUFTO1lBQ3BCLE9BQU8sS0FBSyxDQUFDO1FBRWpCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVwQyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsSUFBSSxDQUFDLElBQVksRUFBRSxNQUFjO1FBRTdCLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLEVBQUM7WUFDOUIsT0FBTyxTQUFTLENBQUM7U0FDcEI7UUFFRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ3hDLE9BQU8sR0FBRyxDQUFDLE9BQU8sS0FBSyxNQUFNLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFHLENBQUMsSUFBSTtZQUNKLE9BQU8sS0FBSyxDQUFDO1FBRWpCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FDSjtBQTFGRCxzQ0EwRkMifQ==