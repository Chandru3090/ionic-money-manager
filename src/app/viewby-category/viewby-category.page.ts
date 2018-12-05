import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-viewby-category',
  templateUrl: './viewby-category.page.html',
  styleUrls: ['./viewby-category.page.scss'],
})
export class ViewbyCategoryPage implements OnInit {

  doughnutChart: any;
  rawData: any = [];
  categoryData: any = [];
  categoryDetails: any = [];
  overAllcategoryTotalAmount: number = 0;
  categoryTotalAmount: number = 0;
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getAllTransactions().subscribe(data => {
      if (data) {
        let expenseCategory: any = [];
        this.doughnutChart = {
          labels: [], data: [],
        };
        expenseCategory = data;
        this.rawData = JSON.parse(JSON.stringify(data));
        expenseCategory.map(x => {
          if (x.transactionType === 'EXPENSE') {
            if (this.categoryData.filter(elementx => elementx.transactionCategory === x.transactionCategory).length > 0) {
              const index = this.categoryData.findIndex(elementx => elementx.transactionCategory === x.transactionCategory);
              this.categoryData[index].transactionAmount = Number(this.categoryData[index].transactionAmount) + Number(x.transactionAmount);
            } else {
              this.categoryData.push(x);
            }
          }
        });

        this.categoryData.map(x => {
          this.doughnutChart.labels.push(x.transactionCategory);
          this.doughnutChart.data.push(x.transactionAmount);
          this.overAllcategoryTotalAmount = this.overAllcategoryTotalAmount + Number(x.transactionAmount);
        });
        this.doughnutChart.type = 'doughnut';
        this.doughnutChart.options = {
          rotation: 1 * Math.PI,
          circumference: 1 * Math.PI
        }
      }
    });
  }
  public chartClicked(e: any): void {
    this.categoryTotalAmount = 0;
    this.categoryDetails = this.rawData.filter(x => x.transactionCategory === this.doughnutChart.labels[e.active[0]._index]);
    this.categoryDetails.map(x => { this.categoryTotalAmount = this.categoryTotalAmount + Number(x.transactionAmount); })
    this.categoryData.map(x => {
      x.highlight = (x.transactionCategory === this.doughnutChart.labels[e.active[0]._index]) ? true : false;
    });
  }

  // event on pie chart slice hover
  public chartHovered(e: any): void {
    console.log(e);
  }
}
