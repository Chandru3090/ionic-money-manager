import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewTransactionbyYearlyPage } from './view-transactionby-yearly.page';

import { ChartsModule } from 'ng2-charts/ng2-charts';

const routes: Routes = [
  {
    path: '',
    component: ViewTransactionbyYearlyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ChartsModule
  ],
  declarations: [ViewTransactionbyYearlyPage]
})
export class ViewTransactionbyYearlyPageModule {}
