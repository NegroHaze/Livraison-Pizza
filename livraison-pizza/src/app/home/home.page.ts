import { Component, ɵConsole } from '@angular/core';
import Pizza from '../models/pizza';
import { PizzaServicesService } from '../services/pizza-services.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pizzas: Pizza[];

  test: Pizza;
  picture: string;
  i: number;

  error = false;

  constructor(private pizzaServices: PizzaServicesService) { }

  loadAll() {

  }

  chargePizza() {

  }
}
