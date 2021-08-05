import { InterfaceSpace } from './InterfaceSpace';


export class Square implements InterfaceSpace{
   
      x:number = 120;

     constructor() {
          
       }

        weith(){
            return this.x + 2 *45;
        }

       height(){
           return this.x + 10 *3;
       }  
}