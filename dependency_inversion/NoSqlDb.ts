import { IDb } from './IDb';


export class NoSqlDb implements IDb {
     constructor() {
          
       }

    connect(){
        console.log("coonection to MySql ")
    }
    
}
