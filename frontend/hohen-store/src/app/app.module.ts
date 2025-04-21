import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import Aura from '@primeng/themes/aura';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { ProductListComponent } from "./Components/product-list/product-list.component";
import { ProductService } from './Services/product.service';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import MyPreset from '../custom-preset';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent,
    HomeComponent,
    ProductListComponent,
    NavbarComponent
  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MyPreset
      },
      ripple: true,
    }),
    provideHttpClient(),
    ProductService
  ]
})
export class AppModule { }
