import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { Product } from '../../Models/product';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, PaginatorModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{

  products: Product[] = [];

  first: number = 0; // first record index 
  rows: number = 10; // Number of records per page
  totalRecords: number = 0;   // Total number of records available

  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProductList(this.first, this.rows).subscribe(
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
  }

}
