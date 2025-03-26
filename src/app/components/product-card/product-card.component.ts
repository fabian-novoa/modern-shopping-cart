import { Component, Input } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces/product.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  addToCart(): void {
    this.cartService.addToCart(this.product);
  }

  navigateToDetail(): void {
    this.router.navigate(['/product', this.product.id]);
  }
} 