import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TRANSACTION_TYPE, TRANSACTION_INCOME_CATEGORY, TRANSACTION_EXPENSE_CATEGORY } from '../constants/index';
import { Router } from '@angular/router';
import {
  ServiceService
} from '../service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  categoryForm: FormGroup;
  submitted = false;
  CATEGORY_TYPE = TRANSACTION_TYPE;
  
  constructor(private formBuilder: FormBuilder, private router: Router, private service: ServiceService) {
    this.categoryForm = this.formBuilder.group({
      categoryType: ['', Validators.required],
      categoryName: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  get f() { return this.categoryForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.categoryForm.valid) {
      const formData:any ={};
      formData.key = this.categoryForm.value.categoryType.toUpperCase().trim();
      formData.value = this.categoryForm.value.categoryType;
      formData.categoryId = this.service.randomNuberTrigger();
      this.service.submitCategories(formData).subscribe(data => console.log(data));
      this.router.navigate(['../']);
    }
  }

}
