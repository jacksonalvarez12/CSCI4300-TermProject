import burger from '../img/burger.png';
import pizza from '../img/pizza.png';
import taco from '../img/taco.png';

export default class Database {
    constructor() {
        this.card1 = [burger, 'Burger', ['1 Bun', '1/3 Pound of Ground Beef', '2 Slices of Cheese'], 'https://www.google.com/'];
        this.card2 = [pizza, 'Pizza', ['Premade Dough', '1 Cup of Marinara Sauce', '6 oz of Cheese'], 'https://www.google.com/'];
        this.card3 = [taco, 'Taco', ['1 Shell', '1/4 Pound of Ground Beef', '3 oz of Shredded Cheese'], 'https://www.google.com/'];
    }

    getCards() {
        return [this.card1, this.card2, this.card3];
    }
}