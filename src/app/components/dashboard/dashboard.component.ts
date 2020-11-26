import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public transactionApiSubscription: Subscription;
  public transactionList: [];

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
        this.transactionApiSubscription.unsubscribe();
      }
    )

  }

}
