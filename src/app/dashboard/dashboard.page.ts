import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
})
export class DashboardPage implements OnInit, OnDestroy {
  transactions: any = [];
  INCOME = 0;
  EXPENSE = 0;
  showProgressBar = false;
  currentDate = new Date();
  firstDayOfMonth: any;
  lastDayOfMonth: any;
  subscription: Subscription;

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.firstDayOfMonth = moment(new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1)).format('YYYY-MM-DD');
    this.lastDayOfMonth = moment(new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0)).format('YYYY-MM-DD');
    this.loadAllTransactions();
  }
  navigate(link: any) {
    this.router.navigate(['./' + link]);
  }
  deleteTransaction(id) {
    this.subscription = this.service.deleteTransaction(id).subscribe(data => {
      this.loadAllTransactions();
    })
  }

  loadAllTransactions() {
    this.subscription = this.service.getAllTransactions().subscribe(data => {
      if (data) {
        let incomeAmount = 0;
        let expenseAmount = 0;
        this.transactions = data;
        this.transactions.map(element => {
          if (element.transactionType === 'INCOME' && ((element.transactionDate >= this.firstDayOfMonth) && (element.transactionDate <= this.lastDayOfMonth))) {
            incomeAmount = incomeAmount + Number(element.transactionAmount);
          } else if (element.transactionType === 'EXPENSE' && ((element.transactionDate >= this.firstDayOfMonth) && (element.transactionDate <= this.lastDayOfMonth))) {
            expenseAmount = expenseAmount + Number(element.transactionAmount);
          }
        });
        this.INCOME = incomeAmount;
        this.EXPENSE = expenseAmount;
        this.showProgressBar = true;
      }
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}