import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [InputTextModule, FormsModule, MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
value: any;

}
