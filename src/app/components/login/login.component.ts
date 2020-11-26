import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: String;
  public password: String;
  private loginApiSubscription: Subscription

  constructor(private apiService: ApiService, private storeService: StoreService) { }

  ngOnInit(): void {
  }

  onLoginSubmit() {
    console.log(this.email);
    console.log(this.password);

    this.apiService.login({
      email: this.email,
      password: this.password
    })

    this.loginApiSubscription = this.storeService.loginApiDataChanged.subscribe(
      (data) => {

        console.log(data);

        if(data.status) {

        } else {
          alert(data.msg)
        }
        
        this.loginApiSubscription.unsubscribe();
      }
    )
    console.log("works");

  }

}
