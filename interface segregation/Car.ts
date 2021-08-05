import { InterfaceMark } from './InterfaceMark';
import { InterfaceColor } from './InterfaceColor';


export class Car implements InterfaceColor,InterfaceMark {


     constructor() {
          
       }

     nameColor(){
         return "red";
     }


     nameMark(){
         return "bougati"
     }

}