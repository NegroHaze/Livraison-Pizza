import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  PizzaClick;

  ngOnInit() {
    console.log(this.PizzaClick)
  }

  dismissModal(){
   this.modalController.dismiss(); 
  }

  ngOnDestroy(){
    this.PizzaClick = null;
  }
}
