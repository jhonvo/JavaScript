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

    this.punch = function(target){
        if (target instanceof Ninja){
            target.health -= 5;
            console.log(`${target.name} was punched by ${this.name} and lost 5 Health!`)
        }
    }

    this.kick = function(target){
        if (target instanceof Ninja){
            let lost = 15*strength;
            target.health -= lost;
            console.log(`${target.name} was kicked by ${this.name} and lost ${lost} Health!`)
        }
    }

}

var ninja1 = new Ninja("Hyabusa");
var ninja2 = new Ninja("Blue");

ninja2.showStatscopy();
ninja2.showStatscopy();

ninja1.punch(ninja2);
ninja2.showStatscopy();
ninja2.kick(ninja1);
ninja1.showStatscopy();
