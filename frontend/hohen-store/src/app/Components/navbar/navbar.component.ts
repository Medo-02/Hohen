import { Component, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { NavigationStart, Router } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { NavItemsComponent } from './nav-items.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    MenubarModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    DrawerModule,
    NavItemsComponent,
    CommonModule,
    SearchComponent,
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  value: any;
  showSideBar = false;
  navbarScrolled: boolean = false;
  isHidden: boolean = false;
  private routerSubscription: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Subscribe to router events to listen for route changes
    this.routerSubscription = this.router.events.subscribe(event => {
      if (this.router.url.includes('dashboard')) {
        this.isHidden = true;  
      } else {
        this.isHidden = false;
      }
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from the router events to avoid memory leaks
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.navbarScrolled = scrollOffset > 0;
  }

  redirectTo(path: string) {
    this.router.navigate([path]);
  }
}
