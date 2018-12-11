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
  { path: 'budget', loadChildren: './budget/budget.module#BudgetPageModule' },
  { path: 'category', loadChildren: './category/category.module#CategoryPageModule' },
  { path: 'view-categories', loadChildren: './view-categories/view-categories.module#ViewCategoriesPageModule' },
  { path: 'view-transactionby-yearly', loadChildren: './view-transactionby-yearly/view-transactionby-yearly.module#ViewTransactionbyYearlyPageModule' },
  { path: 'view-transactionby-monthly', loadChildren: './view-transactionby-monthly/view-transactionby-monthly.module#ViewTransactionbyMonthlyPageModule' },
  { path: 'emi-calculator', loadChildren: './emi-calculator/emi-calculator.module#EmiCalculatorPageModule' },
  { path: 'loan-tracker', loadChildren: './loan-tracker/loan-tracker.module#LoanTrackerPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
