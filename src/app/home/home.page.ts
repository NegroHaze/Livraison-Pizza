import { Component } from '@angular/core';
import iPizza from '../models/ipizza';
import Pizza from '../models/Pizza';
import Panier from '../models/basket';
import BasketTransition from '../models/BasketTransition';
import Ingredient from '../models/ingredients';

import { PizzaServicesService } from '../services/pizza-services.service';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modals/modalDetails/modal.page'
import { ModalPanierPage } from '../modals/modal-panier/modal-panier.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  panier = new Panier([]);

  pizzas: iPizza[];
  ingredients: Ingredient[];

  adminMode = false;

  constructor(private pizzaServices: PizzaServicesService, public alertController: AlertController,
    public modalController: ModalController) { }

  ngOnInit() {
    this.chargePizza();
  }

  chargePizza() {
    this.pizzaServices.getPizza()
      .subscribe(resp => {
        this.pizzas = resp.body;
        this.chargeIngredient();
      })
  }

  chargeIngredient() {
    this.pizzaServices.getIngredient()
      .subscribe(resp => {
        this.pizzas.forEach(pizza => {
          let i = 0;
          if (pizza.ingredients != null) {
            pizza.ingredients.forEach(ingreInPizza => {
              resp.body.forEach(ingre => {
                if (ingreInPizza.toString() == ingre.id) {
                  pizza.ingredients[i] = ingre;
                }
              })
              i++;
            })
          }
        })
      })
  }

  addingPanier(pizzaToAdd: iPizza) {
    let adding = true;
    let breaking = false;
    if (this.panier.Pizzas.length == 0) {
      this.panier.Pizzas.push(new BasketTransition(new Pizza(pizzaToAdd.photo, pizzaToAdd.nom, pizzaToAdd.prix, pizzaToAdd.id, pizzaToAdd.ingredients), 1));
    } else {
      this.panier.Pizzas.forEach(val => {
        if (!breaking) {
          if (pizzaToAdd.nom == val.Pizza.Nom) {
            val.Quantity++;
            adding = true;
            breaking = true;
          } else {
            adding = false;
          }
        }
      })
      if (!adding) {
        this.panier.Pizzas.push(new BasketTransition(new Pizza(pizzaToAdd.photo, pizzaToAdd.nom, pizzaToAdd.prix, pizzaToAdd.id, pizzaToAdd.ingredients), 1));
      }
    }
    this.panier.TotalPizza++;
    if (typeof pizzaToAdd.prix === "string") {
      pizzaToAdd.prix = parseInt(pizzaToAdd.prix);
    }
    this.panier.TotalPrice += pizzaToAdd.prix;
  }

  goToDetails(piz: iPizza) {
    this.presentModal(ModalPage, { PizzaClick: new Pizza(piz.photo, piz.nom, piz.prix, piz.id, piz.ingredients) })
  }

  goToPanier() {
    this.presentModal(ModalPanierPage, { panier: this.panier, pizzas: this.pizzas });
  }

  async presentModal(page: any, props: any) {
    const modal = await this.modalController.create({
      component: page,
      componentProps: props
    });
    if (page === ModalPanierPage) {
      modal.onDidDismiss().then(retrievePanier => {
        this.panier = retrievePanier.data;
      })
    }
    return await modal.present();
  }

  switchTo(mode: string){
    this.adminMode = mode == "admin";
  }

  deletePizza(pizza: Pizza){
    
  }

}
