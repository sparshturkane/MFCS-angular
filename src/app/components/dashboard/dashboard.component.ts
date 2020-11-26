import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { StoreService } from 'src/app/services/store.service';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public transactionApiSubscription: Subscription;
  public transactionList: [];

  public updateCustomerName: String;
  public updateAmount: String;
  public updateDescription: String;
  public updateType: String;
  public updateTransactionId: String;

  public customerName: String;
  public amount: String;
  public description: String;
  public type: String;

  constructor(private storeService: StoreService, private router: Router, private apiService: ApiService) {
    if (!localStorage.getItem('authorization')) {
      this.router.navigate(['/']);
    }

    this.transactionList = [];
  }

  ngOnInit(): void {
    this.transactionAPI()
  }

  transactionAPI() {
    this.apiService.transaction_get(localStorage.getItem('authorization'));

    this.transactionApiSubscription = this.storeService.transactionApiDataChanged.subscribe(
      (data) => {
        console.log(data);
        this.transactionList = data.data;
        // this.transactionApiSubscription.unsubscribe();
      }
    )

  }

  deleteTransaction(transactionId) {
    this.apiService.transaction_delete(transactionId, localStorage.getItem('authorization'));
  }

  onClickEdit(customerName, amount, description, type, transactionId) {
    this.updateCustomerName = customerName
    this.updateAmount = amount
    this.updateDescription = description
    this.updateType = type
    this.updateTransactionId = transactionId
  }

  editTransaction() {
    var postParams = {
      customerName: this.updateCustomerName,
      amount: this.updateAmount,
      description: this.updateDescription,
      type: this.updateType,
      transactionId: this.updateTransactionId
    }
    this.apiService.transaction_update(postParams, localStorage.getItem('authorization'));
    $('#editTransaction').modal('toggle');
  }

  addTransaction() {
    var postParams = {
      customerName: this.customerName,
      amount: this.amount,
      description: this.description,
      type: this.type
    }
    this.apiService.transaction_create(postParams, localStorage.getItem('authorization'));
    $('#addTransaction').modal('toggle');
  }

}
