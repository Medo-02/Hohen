import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { NavItemsComponent } from './nav-items.component';
import { LoginStatusComponent } from "../login/login-status/login-status.component";

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
    LoginStatusComponent
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  value: any;
  showSideBar = false;
  
  constructor(private router: Router) { }
  
  redirectTo(path: string) {
    this.router.navigate([path]);
  }
}
