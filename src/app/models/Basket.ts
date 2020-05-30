import bask from './BasketTransition';

export default class Basket {
    Pizzas: bask[];
    TotalPizza: number;
    TotalPrice: number;

    constructor(pizzas: bask[]) {
        this.Pizzas = pizzas;
        this.TotalPizza = 0;
        this.TotalPrice = 0;
    }
}