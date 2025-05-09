import { Component, OnInit } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [TabsModule, RouterOutlet, RouterLink]
})
export class DashboardComponent implements OnInit{

  tabs = [
    { route: 'home', label: 'Dashboard', icon: 'pi pi-home' },
    { route: 'categories', label: 'Categories', icon: 'pi pi-sitemap' },
    { route: 'products', label: 'Products', icon: 'pi pi-box' },
    { route: 'messages', label: 'Messages', icon: 'pi pi-inbox' }
  ];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  cl() {
    console.log("Clicekd");
  }

}
