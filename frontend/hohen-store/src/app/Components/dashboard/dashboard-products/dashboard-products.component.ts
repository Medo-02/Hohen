import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from '../../product-list/product-list.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { SearchComponent } from "../../search/search.component";
import { MenuItem, MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../../../Models/product';
import { DialogModule } from 'primeng/dialog';
import { ProductCardComponent } from "../../product-list/product-card/product-card.component";
import { CheckboxModule } from 'primeng/checkbox';
import { Toast } from 'primeng/toast';
import { DeleteProductComponent } from './delete-product/delete-product.component';

@Component({
  selector: 'app-dashboard-products',
  standalone: true,
  templateUrl: './dashboard-products.component.html',
  styleUrl: './dashboard-products.component.scss',
  imports: [ProductListComponent, ToolbarModule, ButtonModule, SelectModule,
    SearchComponent, FormsModule, CommonModule, DialogModule, ProductCardComponent,
    CheckboxModule, Toast, DeleteProductComponent],
   providers: [MessageService]
})
export class DashboardProductsComponent {
  items: MenuItem[];
  selectedAction: string | undefined;
  selectedProduct: Product | undefined;
  visible: boolean = false;

  @ViewChild(ProductListComponent) productListComponent!: ProductListComponent;

  constructor(private messageService: MessageService) {
    this.items = [
      { label: 'تعديل', value: 'edit' },
      { label: 'حذف', value: 'delete'}
    ];
  }

  selectProduct(product: Product) {
    this.selectedProduct = product;
    if (this.selectedAction) {
      this.visible = true;
    } else {
        this.messageService.add({
        severity: 'error',
        summary: 'لم يتم اختيار الإجراء',
        detail: 'قم بإختيار الاجراء قبل تحديد المنتج'
      });
    }
  }

  onProductDeleted(event: string) {
    if (event) {
      this.messageService.add({
        severity: 'success',
        summary: 'تم حذف المنتج التالي :',
        detail: event
      });
      this.productListComponent.loadProducts();
      this.visible = false;
    }
  }

}
