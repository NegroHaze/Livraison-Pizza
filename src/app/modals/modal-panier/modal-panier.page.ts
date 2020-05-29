import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

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
    this.chargePanier();
  }

  
  chargePanier(){
    this.pizzas.forEach(piz => {
      let incre = 0;
      this.panier.Pizzas.forEach(pizInPanier => {
        if(piz.nom == pizInPanier.Nom){
          incre++;
        }
      });
      if(incre != 0){
        this.pizzasPanier.set(piz, incre);
      }
    });
    this.transitionKeys = this.pizzasPanier.keys();
  }

  addingPanier(){
    console.log('add')
  }

  deletePanier(){
    console.log('remove')
  }

  dismissModal(){
    this.modalController.dismiss(); 
   }
}
