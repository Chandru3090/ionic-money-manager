import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewTransactionbyMonthlyPage } from './view-transactionby-monthly.page';

const routes: Routes = [
  {
    path: '',
    component: ViewTransactionbyMonthlyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewTransactionbyMonthlyPage]
})
export class ViewTransactionbyMonthlyPageModule {}
