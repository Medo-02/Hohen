import { Routes } from "@angular/router";
import { HomeComponent } from "./Components/home/home.component";
import { ProductListComponent } from "./Components/product-list/product-list.component";

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'products',
    component: ProductListComponent,
    title: 'Product List',
  },
];
export default routeConfig;