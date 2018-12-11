import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TRANSACTION_TYPE } from '../constants/index';
import { Router } from '@angular/router';
import {
  ServiceService
} from '../service.service';

@Component({
  selector: 'app-transactions',
  templateUrl: 'transactions.page.html',
  styleUrls: ['transactions.page.scss']
})
export class TransactionsPage implements OnInit {
  transactionForm: FormGroup;
  submitted = false;
  CATEGORY:any = [];
  TRANSACTIONS_TYPE = TRANSACTION_TYPE;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: ServiceService) {
    this.transactionForm = this.formBuilder.group({
      transactionName: ['', Validators.required],
      transactionDate: ['', Validators.required],
      transactionType: ['', [Validators.required]],
      transactionDescription: ['', [Validators.required]],
      transactionCategory: ['', [Validators.required]],
      transactionAmount: ['', [Validators.required]],
      transactionNotes: ['']
    });
  }

  ngOnInit() {
  }

  typeChange(event) {
    this.service.getAllCategories(event).subscribe(data => {
      if(data) {
        this.CATEGORY = data;
      }
    });
  }

  get f() { return this.transactionForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.transactionForm.valid) {
      const formData = this.transactionForm.value;
      formData.trasactionId = this.service.randomNuberTrigger();
      this.service.submitTransactions(formData).subscribe(data => console.log(data));
      this.service.getAllTransactions();
      this.router.navigate(['../']);
    }
  }
}