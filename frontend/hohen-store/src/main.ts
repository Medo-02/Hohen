import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { OKTA_AUTH, OktaAuthModule, OKTA_CONFIG, OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import routeConfig from './app/routes';
import { environment } from './app/environments/enviornment';
import MyPreset from './custom-preset';

const oktaAuth = new OktaAuth(environment.oidc);

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MyPreset,
      },
      ripple: true,
    }),
    provideHttpClient(),
    provideRouter(routeConfig),
    { provide: OKTA_AUTH, useValue: oktaAuth },
    OktaAuthModule,
    { provide: OKTA_CONFIG, useValue: { oktaAuth } },
  ],
}).catch((err) => console.error(err));
