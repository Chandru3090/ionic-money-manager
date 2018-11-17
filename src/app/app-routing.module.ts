import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardPageModule'
  },
  {
    path: 'transactions',
    loadChildren: './transactions/transactions.module#TransactionsPageModule'
  },
  { path: 'viewby-category', loadChildren: './viewby-category/viewby-category.module#ViewbyCategoryPageModule' },
  { path: 'budget', loadChildren: './budget/budget.module#BudgetPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
