// PART !
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion:{
            name:"Frank",
            type:"Flea",
            inventory: ["small hat", "sunglass"],
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
    }

 console.log(adventurer.name);
    console.log(adventurer.health);
    adventurer.inventory.forEach((item)=>{
        console.log(item)
    })

adventurer.roll();

console.log("*****************************");

    

// PART 2
class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
  }

  const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];
robin.roll();


// console.log("*****************************");

// Part 3

class Adventurer extends Character {
    static roles = ["fighter","Healer","Wizard","Destroyer"]
static extraPwer="red";
    constructor (name, role,extraPower) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      this.extraPower=extraPower;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
      for(let r of role){
        if(r==this.role){
            console.log("role is present");
            
        }
      }
    }
    
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
    jump(){
        console.log(`${this.name} is jumping ahead`);
        
    }
  }

  class Companion extends Character{
    constructor(name,avatar,relation){
        super(name);
        this.avatar=avatar;
        this.relation = relation;
    
    }
    static MAX_HEALTH = 100;
specialPower(){
    console.log(`${this.avatar} is the avatar of ${this.name}`);
    
}

  }


  const robin1 = new Adventurer("Robin","Defender","scorpion");
  robin1.scout();
  const leo = new Companion("Leo","cat","pet")
leo.specialPower();