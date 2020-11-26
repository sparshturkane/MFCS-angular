import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public home: String;
  constructor(private router: Router) {
    this.home = ''
  }

  ngOnInit(): void {

    console.log(localStorage.getItem('authorization'));
    
    if (localStorage.getItem('authorization')) {
      this.home = 'dashboard'
    } else {
      this.home = '/'
    }
  }

  onLogoutHandle() {
    localStorage.removeItem("authorization")
    this.router.navigate(['/']);
    this.home = '/'
  }

}
