import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import * as moment from 'moment';

@Component({
  selector: 'app-view-transactionby-yearly',
  templateUrl: './view-transactionby-yearly.page.html',
  styleUrls: ['./view-transactionby-yearly.page.scss'],
})
export class ViewTransactionbyYearlyPage implements OnInit {

  chartData: any = [];
  chartLabels: any = [];
  chartOptions: any = {
    responsive: true
  };
  chartLegend: boolean = true;
  chartType: string = 'bar';
  allTransactions: any = [];
  expenseGroupedTransacions: any = [];
  incomeGroupedTransacions: any = [];
  overallExpenseTransactionAmount: number = 0;
  overallIncomeTransactionAmount: number = 0;

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getAllTransactions().subscribe(data => {
      this.allTransactions = data;
      const expenseDatas = [];
      const incomeDatas = [];
      this.allTransactions.map(x => {
        if (x.transactionType === 'EXPENSE') {
          const date = moment(new Date(x.transactionDate));
          x.transactionYear = date.format('YYYY');
          expenseDatas.push(x);
        } else if (x.transactionType === 'INCOME') {
          const date = moment(new Date(x.transactionDate));
          x.transactionYear = date.format('YYYY');
          incomeDatas.push(x);
        }
      });
      const expenseGroupedTrans = this.groupBy(expenseDatas, 'transactionYear');
      const incoeGroupedTrans = this.groupBy(incomeDatas, 'transactionYear');

      this.expenseGroupedTransacions = this.groupMapping(expenseGroupedTrans);
      this.incomeGroupedTransacions = this.groupMapping(incoeGroupedTrans);

      this.chartData.push({ data: this.incomeExpenseGroupDataFrame(this.incomeGroupedTransacions, 'INCOME'), label:  ' INCOME' });
      this.chartData.push({ data: this.incomeExpenseGroupDataFrame(this.expenseGroupedTransacions, 'EXPENSE'), label: ' EXPENSE' });
    });
  }

  groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      var key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }

  toggleChart() {
    this.chartType = (this.chartType === 'line') ? 'bar' : 'line';
  }

  chartHovered(event) {
    console.log(event);
  }

  chartClicked(event) {
    console.log(event);
  }

  groupMapping(data) {
    const groupedData = [];
    Object.keys(data).forEach(function (key) {
      const obj: any = {};
      obj.year = key;
      let initialValue = 0;
      obj.amount = data[key].reduce(
        (accumulator, currentValue) => accumulator + Number(currentValue.transactionAmount), initialValue
      );
      groupedData.push(obj);
    });
    return groupedData;
  }

  incomeExpenseGroupDataFrame(data, type) {
    const arrayItems = [];
    data.map(x => {
      arrayItems.push(x.amount);
      if (type === 'EXPENSE') {
        this.overallExpenseTransactionAmount = this.overallExpenseTransactionAmount + Number(x.amount);
      } else {
        this.overallIncomeTransactionAmount = this.overallIncomeTransactionAmount + Number(x.amount);
        this.chartLabels.push(x.year);
      }
    });
    return arrayItems;
  }
}