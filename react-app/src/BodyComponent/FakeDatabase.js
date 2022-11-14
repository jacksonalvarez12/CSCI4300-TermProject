import burger from '../img/burger.png';
import pizza from '../img/pizza.png';
import taco from '../img/taco.png';

export default class Database {
    constructor() {
        this.card1 = [burger, 'Burger', ['1 Bun', '1/3 Pound of Ground Beef', '2 Slices of Cheese'], 'https://www.yummly.com/recipe/Best-Burger-513137/'];
        this.card2 = [pizza, 'Pizza', ['Premade Dough', '1 Cup of Marinara Sauce', '6 oz of Cheese'], 'https://www.yummly.com/recipe/Easy-Cheese-Pizza-with-Homemade-Pizza-Sauce-2090711/'];
        this.card3 = [taco, 'Taco', ['1 Shell', '1/4 Pound of Ground Beef', '3 oz of Shredded Cheese'], 'https://www.yummly.com/recipe/Taco-Bell-Tacos-1105782/'];
    }

    getCards() {
        return [this.card1, this.card2, this.card3];
    }
}