import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { Product } from '../../Models/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from './product-card/product-card.component';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { MenuItem, MessageService } from 'primeng/api';
import { SelectModule } from 'primeng/select';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { CategoryService } from '../../Services/category.service';
import { Category } from '../../Models/category';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  imports: [CommonModule, ProductCardComponent, PaginatorModule, SelectModule, FormsModule,
    ToastModule, CheckboxModule, ButtonModule, FloatLabelModule],
  providers: [MessageService]
})
export class ProductListComponent implements OnInit{

  @Input() isDashboard: boolean = false;
  @Output() onClick = new EventEmitter<any>();
  
  isEditable: boolean = false;
  products: Product[] = [];
  items: MenuItem[];
  selectedSort: string | undefined;
  sortType: string | undefined;
  categories: Category[] = [];
  selectedCategory: Category[] | undefined;
  searchTerm: string | undefined;

  first: number = 0; // first record index 
  rows: number = 10; // Number of records per page
  totalRecords: number = 0;   // Total number of records available

  constructor(private productService: ProductService, private messageService: MessageService, private categoryService: CategoryService,
    private router: ActivatedRoute
  ) { 
    this.items = [
      { label: 'السعر الأعلى', value: { field: 'unitPrice', order: 'desc' } },
      { label: 'السعر الأقل', value: { field: 'unitPrice', order: 'asc' } }
    ];
  }
  
  ngOnInit(): void {
    this.isEditable = this.isDashboard;
    // Subscribe to query parameters and reload products whenever they change
    this.router.queryParams.subscribe(values => {
      this.searchTerm = values['search'];
      // Whenever the searchTerm changes, reload the products
      this.loadProducts()
      }
    )
    this.loadCategories();
    this.loadProducts(); // Initial load for products
  }
  
  loadProducts() {
    this.productService.getProductList(this.first, this.rows, this.sortType!, this.selectedCategory!, this.searchTerm!).subscribe(
      data => {
        this.products = data.products;
        this.totalRecords = data.totalElements
      }
    )
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(
      data => {
        this.categories = data
      }
    )
  }

  // first is the current page number rows 
  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;
    this.loadProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // Sort based on price descending and ascending 
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
  // Filter Category based on selected categories and rest page
  onCategoryChange(event: any) {
    this.first = 0;
    this.rows = 10;
    this.loadProducts();
    this.messageService.add({
        severity: 'info',
        summary: 'تم التصنيف',
        detail: `تم تحديث المتجات حسب التصنيفات المختارة`
      });
  }

  selectProduct(product: Product) {
    if (this.isEditable) {
      this.onClick.emit(product);
    }
  }
}
