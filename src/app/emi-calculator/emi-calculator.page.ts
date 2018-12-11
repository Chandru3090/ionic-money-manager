import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  ServiceService
} from '../service.service';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.page.html',
  styleUrls: ['./emi-calculator.page.scss'],
})
export class EmiCalculatorPage implements OnInit {
  loanCalculatorForm: FormGroup;
  submitted = false;
  emiResults: any = {};

  constructor(private formBuilder: FormBuilder, private router: Router, private service: ServiceService) {
    this.loanCalculatorForm = this.formBuilder.group({
      loanAmount: ['100000', Validators.required],
      rateofInterest: ['', Validators.required],
      loanTendure: ['1', [Validators.required]]
    });
  }
  ngOnInit() {
    this.loanCalculatorForm.valueChanges.subscribe(x => {
      this.emiResults = {};
    });
  }

  get f() { return this.loanCalculatorForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loanCalculatorForm.valid) {
      const principal = this.loanCalculatorForm.value.loanAmount;
      const rateofInterest = this.loanCalculatorForm.value.rateofInterest / 100 / 12;
      const payments = this.loanCalculatorForm.value.loanTendure * 12;

      // Now compute the monthly payment figure, using esoteric math.
      const x = Math.pow(1 + rateofInterest, payments);
      const monthly = (principal * x * rateofInterest) / (x - 1);

      // Check that the result is a finite number. If so, display the results.
      if (!isNaN(monthly) &&
        (monthly != Number.POSITIVE_INFINITY) &&
        (monthly != Number.NEGATIVE_INFINITY)) {
        this.emiResults.monthlyPayment = Math.round(monthly);
        this.emiResults.totalPayment = Math.round(monthly * payments);
        this.emiResults.totalinterest = Math.round((monthly * payments) - principal);
      }
    }
  }
}
