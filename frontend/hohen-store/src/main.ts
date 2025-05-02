import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';
import { environment } from './app/environments/enviornment';
import MyPreset from './custom-preset';


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
  ],
}).catch((err) => console.error(err));
