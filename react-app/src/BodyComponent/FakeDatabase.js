import burger from '../img/burger.png';
import pizza from '../img/pizza.png';
import taco from '../img/taco.png';

export default class Database {
    constructor() {
        this.card1 = {id:1, img:burger, title:'Burger', ingredients:['1 Bun', '1/3 Pound of Ground Beef', '2 Slices of Cheese'], link:'https://www.yummly.com/recipe/Best-Burger-513137/'};
        this.card2 = {id:2, img:pizza, title:'Pizza', ingredients:['Premade Dough', '1 Cup of Marinara Sauce', '6 oz of Cheese'], link:'https://www.yummly.com/recipe/Easy-Cheese-Pizza-with-Homemade-Pizza-Sauce-2090711/'};
        this.card3 = {id:3, img:taco, title:'Taco', ingredients:['1 Shell', '1/4 Pound of Ground Beef', '3 oz of Shredded Cheese'], link:'https://www.yummly.com/recipe/Taco-Bell-Tacos-1105782/'};

        this.counter = 3;
        this.cards = [this.card1, this.card2, this.card3]
    }

    getCards() {
        return this.cards;
    }

    addCard(src, name, ings, lk) {
        this.cards.push({id:this.incrAndGet(), img:src, title:name, ingredients:ings, link:lk});
    }

    incrAndGet() {
        this.counter += 1;
        return this.counter;
    }
}