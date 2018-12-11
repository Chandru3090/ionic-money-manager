import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoanTrackerPage } from './loan-tracker.page';

const routes: Routes = [
  {
    path: '',
    component: LoanTrackerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoanTrackerPage]
})
export class LoanTrackerPageModule {}
