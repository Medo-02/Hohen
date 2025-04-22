import { Routes } from "@angular/router";
import { HomeComponent } from "./Components/home/home.component";
import { ProductListComponent } from "./Components/product-list/product-list.component";
import { OktaCallbackComponent } from "@okta/okta-angular";
import { LoginComponent } from "./Components/login/login.component";

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Okta',
  },
  {
    path: 'login/callback',
    component: OktaCallbackComponent,
    title: 'Okta',
  },
  {
    path: 'products',
    component: ProductListComponent,
    title: 'Product List',
  },
];
export default routeConfig;