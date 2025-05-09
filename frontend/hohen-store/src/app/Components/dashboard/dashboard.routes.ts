import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardCategoriesComponent } from './dashboard-categories/dashboard-categories.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardMessagesComponent } from './dashboard-messages/dashboard-messages.component';
import { DashboardProductsComponent } from './dashboard-products/dashboard-products.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: DashboardHomeComponent },
      { path: 'categories', component: DashboardCategoriesComponent },
      { path: 'products', component: DashboardProductsComponent },
      { path: 'messages', component: DashboardMessagesComponent },
    ],
  },
];
