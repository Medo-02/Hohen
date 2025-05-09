import { Component } from '@angular/core';
import { ProductListComponent } from '../../product-list/product-list.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { SearchComponent } from "../../search/search.component";
import { MenuItem } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../../../Models/product';

@Component({
  selector: 'app-dashboard-products',
  standalone: true,
  templateUrl: './dashboard-products.component.html',
  styleUrl: './dashboard-products.component.scss',
  imports: [ProductListComponent, ToolbarModule, ButtonModule, SelectModule, SearchComponent, FormsModule, CommonModule]
})
export class DashboardProductsComponent {
  items: MenuItem[];
  selectedAction: string | undefined;
  selectedProduct: Product | undefined;
  constructor() {
    this.items = [
      { label: 'تعديل', value: 'edit' },
      { label: 'حذف', value: 'delete'}
    ];
  }

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }
}
