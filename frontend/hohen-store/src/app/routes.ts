import { Routes } from "@angular/router";
import { HomeComponent } from "./Components/home/home.component";
import { ProductListComponent } from "./Components/product-list/product-list.component";
import { DashboardComponent } from "./Components/dashboard/dashboard.component";
import { canActivateGuard } from "./guards/keycloak-auth.guard";


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
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
    canActivate: [canActivateGuard],
    data: { role: 'ADMIN' }
  },
];
export default routeConfig;