import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [InputTextModule, FormsModule, MenubarModule,
    InputGroupModule, InputGroupAddonModule, ButtonModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  value: any;
  
  constructor(private router: Router) { }
  
  redirectTo(path: String) {
    this.router.navigate([path])
  }

}
