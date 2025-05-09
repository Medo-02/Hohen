import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Checkbox } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { ProductCardComponent } from '../../../product-list/product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Product } from '../../../../Models/product';
import { ProductService } from '../../../../Services/product.service';

@Component({
  selector: 'app-delete-product',
  standalone: true,
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.scss',
  imports: [Checkbox, DialogModule, ProductCardComponent, FormsModule, ButtonModule]
})
export class DeleteProductComponent {
  @Input() product: any
  @Output() deleted = new EventEmitter<string>();
  
  checked: boolean = false;
  
  constructor(private productService: ProductService) { }
  
  confirmDelete() {
    this.productService.deleteProduct(this.product).subscribe(() => {
      this.deleted.emit(this.product.name);
    })
  }
}
