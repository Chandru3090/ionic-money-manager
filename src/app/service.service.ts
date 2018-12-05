import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  API_URL = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getAllTransactions() {
    return this.httpClient.get(`${this.API_URL}/transactions`);
  }

  submitTransactions(data:any) {
    return this.httpClient.post(`${this.API_URL}/transactions`, data);
  }

  deleteTransaction(id:any) {
    return this.httpClient.delete(`${this.API_URL}/transactions/${id}`);
  }

  submitCategories(data:any) {
    const state = data.categoryType==='EXPENSE' ? 'expenseCategories' : 'incomeCategories';
    return this.httpClient.post(`${this.API_URL}/${state}`, data);
  }

  getAllCategories(type:any) {
    const state = type==='EXPENSE' ? 'expenseCategories' : 'incomeCategories';
    return this.httpClient.get(`${this.API_URL}/${state}`);
  }

  randomNuberTrigger() {
    let min = 100000000;
    let max = 999999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
