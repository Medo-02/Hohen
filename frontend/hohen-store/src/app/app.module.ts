import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import Aura from '@primeng/themes/aura';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { ProductListComponent } from "./Components/product-list/product-list.component";
import { ProductService } from './Services/product.service';
import { NavbarComponent } from "./Components/navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProductListComponent,
    NavbarComponent
  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura
      },
      ripple: true,
    }),
    provideHttpClient(),
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
