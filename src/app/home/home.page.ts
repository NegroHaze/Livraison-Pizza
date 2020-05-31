import { Component } from '@angular/core';
import iPizza from '../models/ipizza';
import Pizza from '../models/Pizza';
import Panier from '../models/basket';
import BasketTransition from '../models/BasketTransition';
import Ingredient from '../models/ingredients';

import { PizzaServicesService } from '../services/pizza-services.service';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modals/modalDetails/modal.page';
import { ModalPanierPage } from '../modals/modal-panier/modal-panier.page';
import { ModalAddPizzaPage } from '../modals/modal-add-pizza/modal-add-pizza.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  panier = new Panier([]);

  allPizzas: iPizza[];
  ingredient: Ingredient[];

  adminMode = false;

  constructor(private pizzaServices: PizzaServicesService, public alertController: AlertController,
    public modalController: ModalController) { }

  ngOnInit() {
    this.chargePizza();
  }

  chargePizza() {
    this.pizzaServices.getPizza()
      .subscribe(resp => {
        this.allPizzas = resp.body;
        this.chargeIngredient();
      })
  }

  chargeIngredient() {
    this.pizzaServices.getIngredient()
      .subscribe(resp => {
        this.ingredient = resp.body;
        this.allPizzas.forEach(pizza => {
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
      this.panier.Pizzas.push(new BasketTransition(new Pizza(pizzaToAdd.photo, pizzaToAdd.nom, pizzaToAdd.prix, pizzaToAdd.ingredients, pizzaToAdd.id), 1));
    } else {
      this.panier.Pizzas.forEach(val => {
        if (!breaking) {
          if (pizzaToAdd.nom == val.Pizza.nom) {
            val.Quantity++;
            adding = true;
            breaking = true;
          } else {
            adding = false;
          }
        }
      })
      if (!adding) {
        this.panier.Pizzas.push(new BasketTransition(new Pizza(pizzaToAdd.photo, pizzaToAdd.nom, pizzaToAdd.prix, pizzaToAdd.ingredients, pizzaToAdd.id), 1));
      }
    }
    this.panier.TotalPizza++;
    if (typeof pizzaToAdd.prix === "string") {
      pizzaToAdd.prix = parseInt(pizzaToAdd.prix);
    }
    this.panier.TotalPrice += pizzaToAdd.prix;
  }

  goToDetails(piz: iPizza) {
    this.presentModal(ModalPage, { PizzaClick: new Pizza(piz.photo, piz.nom, piz.prix, piz.ingredients, piz.id) })
  }

  goToPanier() {
    this.presentModal(ModalPanierPage, { panier: this.panier, pizzas: this.allPizzas });
  }

  goToAddPizza(){
    this.presentModal(ModalAddPizzaPage, {ingredients: this.ingredient});
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

  switchTo(mode: string) {
    this.adminMode = mode == "admin";
  }

  deletePizza(pizza: Pizza) {
    this.deletePizzaAlertConfirm(pizza)
  }

  updatePizza(pizza: Pizza){
  }

  async deletePizzaAlertConfirm(pizzaDelete: Pizza) {
    const alert = await this.alertController.create({
      header: pizzaDelete.nom,
      message: `<strong>Attention</strong>
      la pizza <strong>${pizzaDelete.nom}</strong> va etre supprimée`,
      buttons: [
        {
          text: 'Annulé',
          role: 'cancel',
          cssClass: 'button-cancel'
        }, {
          text: 'Supprimé',
          handler: () => {
            this.pizzaServices.deletePizza(pizzaDelete.id).subscribe(_ => window.location.reload());
          }
        }
      ]
    });
    await alert.present();
  }
}
