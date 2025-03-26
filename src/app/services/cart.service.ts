import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../interfaces/cart-item.interface';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  private isCartOpenSubject = new BehaviorSubject<boolean>(false);

  constructor() { }

  getCartItems(): Observable<CartItem[]> {
    return this.cartSubject.asObservable();
  }

  getIsCartOpen(): Observable<boolean> {
    return this.isCartOpenSubject.asObservable();
  }

  toggleCart(): void {
    this.isCartOpenSubject.next(!this.isCartOpenSubject.value);
  }

  addToCart(product: Product): void {
    const existingItem = this.cartItems.find(item => item.product.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
    
    this.cartSubject.next([...this.cartItems]);
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
    this.cartSubject.next([...this.cartItems]);
  }

  updateQuantity(productId: number, quantity: number): void {
    const item = this.cartItems.find(item => item.product.id === productId);
    if (item) {
      item.quantity = quantity;
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        this.cartSubject.next([...this.cartItems]);
      }
    }
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartSubject.next([]);
  }
} 