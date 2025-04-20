import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { ProductListComponent } from "./Components/product-list/product-list.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProductListComponent
],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
          preset: Aura,
        }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
