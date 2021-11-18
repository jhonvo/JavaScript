function Ninja (name){
    this.name = name;
    this.health = 100;
    let speed = 3;
    let strength = 3;
    
    this.sayName = function(){
        console.log(`My ninja name is ${this.name}`);
    }

    this.showStatscopy = function(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${speed}, Strength: ${strength}`);
    }

    this.drinkSake = function(){
        this.health += 10;
    }

}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStatscopy();
ninja1.drinkSake();
ninja1.showStatscopy();

