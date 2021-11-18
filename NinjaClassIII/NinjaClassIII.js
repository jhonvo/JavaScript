class Ninja{
    constructor (name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`The name of the ninja is ${this.name}`);
    }

    showStats(){
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Health: ${this.health}, Speed: ${this.speed}`)
    }

    drinkSake(){
        this.health += 10;
    }
}

class Sensei extends Ninja{
    constructor (name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        this.drinkSake();
        console.log(`What one programmer can do in one month, two programmers can do in two months.`)
    }

    showStats(){
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Health: ${this.health}, Speed: ${this.speed}, Wisdom: ${this.wisdom}`)
    }

}

let superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

let ninja = new Ninja("MyNinja");
ninja.showStats();