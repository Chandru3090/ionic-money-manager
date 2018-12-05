import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Thumbnail } from '@ionic/angular';

@Component({
  selector: 'app-view-transactionby-yearly',
  templateUrl: './view-transactionby-yearly.page.html',
  styleUrls: ['./view-transactionby-yearly.page.scss'],
})
export class ViewTransactionbyYearlyPage implements OnInit {

  lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
  ];
  lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  lineChartOptions: any = {
    responsive: true
  };
  lineChartLegend: boolean = true;
  lineChartType: string = 'line';
  allTransactions: any = [];

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getAllTransactions().subscribe(data => this.allTransactions = data);
  }

  chartHovered(event) {
    console.log(event);
  }

  chartClicked(event) {
    console.log(event);
  }
}
