import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ModalAddPizzaPage } from './modal-add-pizza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ModalAddPizzaPage
      }
    ])
  ],
  declarations: [ModalAddPizzaPage]
})
export class ModalAddPizzaPageModule {}
