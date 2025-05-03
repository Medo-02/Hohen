import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { environment } from './environments/enviornment';
import { FooterComponent } from './Components/footer/footer.component';
import { KEYCLOAK_EVENT_SIGNAL, KeycloakEventType } from 'keycloak-angular';


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

  private readonly keycloakSignal = inject(KEYCLOAK_EVENT_SIGNAL);

  constructor(private router: Router) {
    effect(async () => {
      if (this.keycloakSignal().type === KeycloakEventType.AuthRefreshError) {
        await this.router.navigate(['/', 'logout']);
      }
    });
  }
  title = 'hohen-store';
  
  stateOptions: any[] = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];

  value: string = 'option1';
}
