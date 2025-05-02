import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { environment } from './environments/enviornment';
import { FooterComponent } from './Components/footer/footer.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SelectButtonModule,
    RouterModule,
    NavbarComponent,
    FooterComponent
  ],
})
export class AppComponent {
  title = 'hohen-store';
  
  stateOptions: any[] = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];

  value: string = 'option1';
}
