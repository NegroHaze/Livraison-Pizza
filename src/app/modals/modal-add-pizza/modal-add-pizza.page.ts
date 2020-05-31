import { Component, OnInit, ContentChild } from '@angular/core';
import { PizzaServicesService } from '../../services/pizza-services.service';
import Ingredient from 'src/app/models/ingredients';
import { AlertController } from '@ionic/angular';
import Pizza from 'src/app/models/Pizza';
import PizzaForSend from 'src/app/models/PizzaForSend';

@Component({
  selector: 'app-modal-add-pizza',
  templateUrl: './modal-add-pizza.page.html',
  styleUrls: ['./modal-add-pizza.page.scss'],
})
export class ModalAddPizzaPage implements OnInit {

  ingredients: Ingredient[];
  ingreToShow: Ingredient[] = [];
  formIngredient = [];

  constructor(private pizzaServices: PizzaServicesService, public alertController: AlertController) { }

  photoToAdd: string;
  nomToAdd: string;
  prixToAdd: number;
  ingredientsToAdd: any;

  newIngredient: string;

  ngOnInit() {
    this.ingredients.forEach(ingredient => {
      this.formIngredient.push({ val: ingredient, isChecked: false });
    });
  }
  addNewPizza() {
    let pizzaToPush;
    let ingreToPush: string[] = [];

    let i = 0;
    this.formIngredient.forEach(ingre => {
      if (ingre.isChecked) {
        console.log(this.ingredients[i])
        ingreToPush.push(this.ingredients[i].id);
        this.ingreToShow.push(this.ingredients[i]);
      }
      i++;
    })
    if (ingreToPush.length > 0) {
      pizzaToPush = new PizzaForSend(this.photoToAdd, this.nomToAdd, this.prixToAdd, ingreToPush);
      this.confirmValidateAlert(pizzaToPush);
    }

  }

  addIngredient() {
    this.pizzaServices.postIngredient(new Ingredient(this.newIngredient))
      .subscribe(ingredientAdding => {
        this.formIngredient.push({ val: ingredientAdding, isChecked: false });
        this.newIngredient = "";
      });
  }

  deleteIngredient(ingredientDelete: Ingredient) {
    this.deleteIngredientAlertConfirm(ingredientDelete);
  }

  delIngredient(ingre: Ingredient) {
    for (let i = 0; i < this.formIngredient.length; i++) {
      if (this.formIngredient[i].val.nom == ingre.nom) {
        this.formIngredient.splice(i, 1);
      }
    }
  }

  async deleteIngredientAlertConfirm(ingredientDelete: Ingredient) {
    const alert = await this.alertController.create({
      header: ingredientDelete.nom,
      message: `<strong>Attention</strong>
      l'ingredient <strong>${ingredientDelete.nom}</strong> va etre supprimé`,
      buttons: [
        {
          text: 'Annulé',
          role: 'cancel',
          cssClass: 'button-cancel'
        }, {
          text: 'Supprimé',
          handler: () => {
            this.pizzaServices.deleteIngredient(ingredientDelete.id).subscribe();
            this.delIngredient(ingredientDelete);
          }
        }
      ]
    });
    await alert.present();
  }

  async confirmValidateAlert(newPizza: PizzaForSend) {
    const alert = await this.alertController.create({
      header: 'New Pizza',
      message: `Nom: <strong>${newPizza.nom}</strong>`
        + ` Prix: <strong>${newPizza.prix} €</strong>`
        + `<img src="${newPizza.photo}" style="max-width: 10%;">`
        + `<div>${this.ingreToShow.map(ingre => ingre.nom).join(', ')}</div>`,
      buttons: [
        {
          text: 'Annulé',
          role: 'cancel',
          cssClass: 'button-cancel'
        }, {
          text: 'Confirmé',
          handler: () => {
            this.pizzaServices.postPizza(newPizza)
            .subscribe(_ => {
              window.location.reload();
            });
          }
        }
      ]
    });
    await alert.present();
  }

}