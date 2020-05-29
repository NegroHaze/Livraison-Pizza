import Pizza from './Pizza';
import bask from './BasketTransition';

export default class Basket {
    Pizzasse: bask[];
    Pizzas: Pizza[];
    TotalPrice: number;

    constructor(pizzasse: bask[], pizzas: Pizza[], totalPrice: number) {
        this.Pizzasse = pizzasse;
        this.Pizzas = pizzas;
        this.TotalPrice =totalPrice;
    }
}