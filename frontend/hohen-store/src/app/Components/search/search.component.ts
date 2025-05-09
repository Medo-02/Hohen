import { Component } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  imports: [InputGroupAddonModule, InputGroupModule, InputTextModule, ButtonModule, FormsModule]
})
export class SearchComponent {
  keyword: string | undefined;

  constructor(private router: Router){}



  search() {
    if (this.router.url.includes('dashboard')) { // The search triggered in the dashboard page
      this.router.navigate(['/dashboard/products'], { queryParams: { search: this.keyword } });
    } else {
      this.router.navigate(['/products'], { queryParams: { search: this.keyword } });
    }
  }

}
