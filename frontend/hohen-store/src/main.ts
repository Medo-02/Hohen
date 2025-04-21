import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { provideHttpClient } from '@angular/common/http';
import MyPreset from './custom-preset';
import { ProductService } from './app/Services/product.service';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MyPreset
      },
      ripple: true,
    }),
    provideHttpClient(),
    ProductService,
    provideRouter(routeConfig)
  ]
}).catch(err => console.error(err));
