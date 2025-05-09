import { Routes } from "@angular/router";
import { HomeComponent } from "./Components/home/home.component";
import { ProductListComponent } from "./Components/product-list/product-list.component";
import { DashboardComponent } from "./Components/dashboard/dashboard.component";
import { canActivateGuard } from "./guards/keycloak-auth.guard";
import { DashboardHomeComponent } from "./Components/dashboard/dashboard-home/dashboard-home.component";
import { DashboardCategoriesComponent } from "./Components/dashboard/dashboard-categories/dashboard-categories.component";
import { DashboardProductsComponent } from "./Components/dashboard/dashboard-products/dashboard-products.component";
import { DashboardMessagesComponent } from "./Components/dashboard/dashboard-messages/dashboard-messages.component";


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
    title: 'Dashboard',
    canActivate: [canActivateGuard],
    data: { role: 'ADMIN' },
    loadChildren: () => import('./Components/dashboard/dashboard.routes').then(m => m.dashboardRoutes),
  },
];
export default routeConfig;