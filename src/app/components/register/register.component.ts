import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public name: String;
  public email: String;
  public password: String;
  public registerApiSubscription: Subscription;

  constructor(private apiService: ApiService, private storeService: StoreService, private router: Router) { }

  ngOnInit(): void {
  }

  onRegisterSubmit() {
    this.apiService.register({
      name: this.name,
      email: this.email,
      password: this.password
    })

    this.registerApiSubscription = this.storeService.registerApiDataChanged.subscribe(
      (data) => {
        if (data.status) {
          alert("Register Successful")
          this.router.navigate(['/']);
        } else {
          alert(data.msg)
        }

        this.registerApiSubscription.unsubscribe();
      }
    )
  }
}
