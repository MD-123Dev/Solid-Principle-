import { IDb } from './IDb';


export class Database implements IDb{

     constructor() {
          
       }

    connect(){
        console.log("coonection to db ")
    }
   
}