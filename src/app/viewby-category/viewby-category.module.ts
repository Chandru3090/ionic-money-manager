import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewbyCategoryPage } from './viewby-category.page';

import { ChartsModule } from 'ng2-charts/ng2-charts';

const routes: Routes = [
  {
    path: '',
    component: ViewbyCategoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewbyCategoryPage]
})
export class ViewbyCategoryPageModule {}
