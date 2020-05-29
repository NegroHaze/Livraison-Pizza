import Pizza from './Pizza';

export default class BasketTransition {
    Pizza: Pizza;
    Quantity: number;

    constructor(pizza: Pizza, quantity: number) {
        this.Pizza = pizza;
        this.Quantity = quantity;
    }
}