import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';
import MyPreset from './custom-preset';
import { provideKeycloakAndInterceptor } from './app/interceptors/KeycloakAndInterceptor';


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
    provideKeycloakAndInterceptor()
  ],
}).catch((err) => console.error(err));
