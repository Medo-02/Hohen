import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Product } from '../../../Models/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product: any
  @Output() onClick = new EventEmitter<any>();

  handleClick() {
    this.onClick.emit(this.product);
  }
}
