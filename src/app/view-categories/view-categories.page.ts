import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.page.html',
  styleUrls: ['./view-categories.page.scss'],
})
export class ViewCategoriesPage implements OnInit {

  incomeCategories: any = [];
  expenseCategories: any = [];
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getAllCategories('INCOME').subscribe(data => this.incomeCategories = data);
    this.service.getAllCategories('EXPENSE').subscribe(data => this.expenseCategories = data);
  }

}
