import { Component, Inject, OnInit } from '@angular/core';
import { OktaAuth } from '@okta/okta-auth-js';
import { OktaSignIn } from '@okta/okta-signin-widget';
import { environment } from '../../environments/enviornment';
import { OKTA_AUTH } from '@okta/okta-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  oidc = environment.oidc;
  oktaSignin: OktaSignIn | undefined;

  constructor(@Inject(OKTA_AUTH) private oktaAuth: OktaAuth) {
      this.oktaSignin = new OktaSignIn({
      baseUrl: this.oidc.issuer.split('oauth2')[0], 
      clientId: this.oidc.clientId, 
      redirectUri: this.oidc.redirectUri,
      authParams: {
        responseType: ['code'],
        pkce: true,  
        scopes: this.oidc.scopes,  
        issuer: this.oidc.issuer,
      }
    });
  }

  ngOnInit(): void {
    this.oktaSignin?.remove()
    this.oktaSignin?.renderEl(
      { el: '#okta-sign-in-container' },

      (res) => {
        console.error(res);
        if (res.status === 'SUCCESS') {
          this.oktaAuth.signInWithRedirect();
        }
      },
      (err) => {
        console.log('Error: ', err);
      }
    );
  }

  ngOnDestroy() {
    if (this.oktaSignin) {
      this.oktaSignin.remove();
    }
  }
}
