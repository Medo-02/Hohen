import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-items.component.html',
})
export class NavItemsComponent {
  constructor(private router: Router) { }
  
  redirectTo(path: string) {
    this.router.navigate([path]);
  }
} 