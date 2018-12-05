import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { TransactionsPage } from './transactions.page';
import { ServiceService } from '../service.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: TransactionsPage
      }
    ])
  ],
  declarations: [TransactionsPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers:[ServiceService]
})
export class TransactionsPageModule {}
