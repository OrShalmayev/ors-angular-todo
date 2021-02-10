import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent implements OnInit {
  public isLoggedIn:Boolean = false;

  constructor(
    private auth: AuthenticationService,
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn()
  }

  public logOut(){
    this.auth.logout()
  }
}
