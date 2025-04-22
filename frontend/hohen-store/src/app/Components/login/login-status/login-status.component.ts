import { Component, Inject, OnInit } from '@angular/core';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-status',
  standalone: true,
  templateUrl: './login-status.component.html',
  styleUrl: './login-status.component.scss',
  imports: [ButtonModule, RouterModule]
})
export class LoginStatusComponent implements OnInit{

  isAuthenticated: boolean = false;
  userFullName: string = '';

  constructor(private oktaAuthService: OktaAuthStateService,
    @Inject(OKTA_AUTH) private oktaAuth: OktaAuth) { }
  
  ngOnInit(): void {
    // Subscribe to authentication state changes
    this.oktaAuthService.authState$.subscribe(
      (result) => {
        this.isAuthenticated = result.isAuthenticated!;
        this.getUserDetails();
      }
    )
  }

  getUserDetails() {
    if (this.isAuthenticated) {
      
      // Fetch the logged in user details
      this.oktaAuth.getUser().then(
        (res) => {
          this.userFullName = res.name as string;
        }
      )
    }
  }


  logout() {
    // Terminates the session and tokens
    this.oktaAuth.signOut();
  }
}
