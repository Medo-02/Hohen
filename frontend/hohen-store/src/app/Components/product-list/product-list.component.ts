import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { Product } from '../../Models/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from './product-card/product-card.component';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { MenuItem, MessageService } from 'primeng/api';
import { SelectModule } from 'primeng/select';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  imports: [CommonModule, ProductCardComponent, PaginatorModule, SelectModule, FormsModule, ToastModule],
  providers: [MessageService]
})
export class ProductListComponent implements OnInit{

  products: Product[] = [];
  items: MenuItem[];
  selectedSort: String | undefined;
  sortType: String | undefined;

  first: number = 0; // first record index 
  rows: number = 10; // Number of records per page
  totalRecords: number = 0;   // Total number of records available

  constructor(private productService: ProductService, private messageService: MessageService) { 
    this.items = [
      { label: 'السعر الأعلى', value: { field: 'unitPrice', order: 'desc' } },
      { label: 'السعر الأقل', value: { field: 'unitPrice', order: 'asc' } }
    ];
  }
  
  ngOnInit(): void {
    this.loadProducts();
  }
  
  loadProducts() {
    this.productService.getProductList(this.first, this.rows, this.sortType!).subscribe(
      data => {
        this.products = data.products;
        this.totalRecords = data.totalElements
      }
    )
  }


  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;
    this.loadProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onSortChange(event: any) {
    const value = event.value;
    if (value?.field && value?.order) {
      this.sortType = `${value.field},${value.order}`;
      this.messageService.add({
        severity: 'info',
        summary: 'تم الفرز',
        detail: `تم ترتيب المنتجات حسب ${value.order === 'desc' ? 'السعر الأعلى' : 'السعر الأقل'}`
      });
    } else {
      this.sortType = undefined;
    }
    this.first = 0;
    this.rows = 10;
    this.loadProducts();
  }

}
