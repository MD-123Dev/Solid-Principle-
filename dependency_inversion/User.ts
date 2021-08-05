import { Database } from './Database';
import { IDb } from './IDb';



class User{

       idb:IDb;

         constructor(idb:IDb) {
           this.idb = idb;
       }

      userInfo(){
          this.idb.connect();
      }

	
    
}

/*const x = new User(new Database());
x.userInfo();*/



