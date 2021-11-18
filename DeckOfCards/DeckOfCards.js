class Card {
    constructor (suit,value,nval){
        this.suit = suit;
        this.value = value;
        this.nval = nval;
    }

    displayInfo(){
        console.log(`Suit: ${this.suit}, Value: ${this.value}, #: ${this.nval}`)
    }
}

class Deck {
    constructor(){
        this.cards = [];
        this.addCards();
    }

    addCards(){
        let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
        for (let i = 0; i < suits.length; i++){
            this.cards.push (new Card(suits[i],"Ace",1));
            this.cards.push (new Card(suits[i],"Two",2));
            this.cards.push (new Card(suits[i],"Three",3));
            this.cards.push (new Card(suits[i],"Four",4));
            this.cards.push (new Card(suits[i],"Five",5));
            this.cards.push (new Card(suits[i],"Six",6));
            this.cards.push (new Card(suits[i],"Seven",7));
            this.cards.push (new Card(suits[i],"Eight",8));
            this.cards.push (new Card(suits[i],"Nine",9));
            this.cards.push (new Card(suits[i],"Ten",10));
            this.cards.push (new Card(suits[i],"Jack",11));
            this.cards.push (new Card(suits[i],"Queen",12));
            this.cards.push (new Card(suits[i],"King",13));
        }
    }

    reset(){
        this.cards = [];
        this.addCards();
        return this;
    }

    shuffle() {
        var m = this.cards.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);

          // And swap it with the current element.
        t = this.cards[m];
        this.cards[m] = this.cards[i];
        this.cards[i] = t;
        }
    
        return this;
    }

    deal() {
        return this.cards.pop();
    }

}

class Player {
    constructor(name){
        this.name = name;
        this.hand = [];
    }

    startHand(num, deck){
        for (let i = 0; i <= num; i++){
            this.hand.push(deck.shuffle().deal());
        }
    }

    dropHand(){
        this.hand = [];
    }

    takeCard(deck){
        this.hand.push(deck.shuffle().deal());
    }

    discardCard(){
        return this.hand.pop();
    }
}

let deck = new Deck();
let player = new Player("Alex");
player.startHand(7,deck);
console.log(deck.cards);
console.log(player.hand);

player.discardCard();
console.log("Discarded");
console.log(player.hand);
player.takeCard(deck);
console.log("Taken");
console.log(deck.cards);
console.log(player.hand);
deck.reset();
console.log("Reset");
console.log(deck.cards);
player.dropHand();
console.log(player.hand);



