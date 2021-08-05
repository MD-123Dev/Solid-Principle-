

class Persone{
  
  getNom(){
    return "al";
  }
}

class Client extends Persone {

    constructor() {
    super();
    
  }

}

class User extends Persone {
  constructor() {
    super();
    
  }
}

const ne = new Persone();
//const ne = new Client();
//ne = new User();

console.log(ne.getNom());





