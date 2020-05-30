import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import bask from './../../models/BasketTransition';

@Component({
  selector: 'app-modal-panier',
  templateUrl: './modal-panier.page.html',
  styleUrls: ['./modal-panier.page.scss'],
})
export class ModalPanierPage implements OnInit {

  panier;
  pizzas;

  pizzasPanier = new Map();
  transitionKeys: any;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  addingPanier(pizzaTransition: bask){
    pizzaTransition.Quantity++;
    this.panier.TotalPizza++;
    this.panier.TotalPrice += pizzaTransition.Pizza.Prix;
  }

  deletePanier(pizzaTransition: bask){
    pizzaTransition.Quantity--;
    if(pizzaTransition.Quantity == 0){
      let index: number = this.panier.Pizzas.indexOf(pizzaTransition)
      if(index !== -1){
        this.panier.Pizzas.splice(index, 1);
      }
    }
    this.panier.TotalPizza--;
    this.panier.TotalPrice -= pizzaTransition.Pizza.Prix;
  }

  dismissModal(){
    this.modalController.dismiss(this.panier); 
   }
}
