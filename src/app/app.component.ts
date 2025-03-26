import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, CartComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="main-content">
      <router-outlet></router-outlet>
    </div>
    <app-cart></app-cart>
  `,
  styles: [`
    .main-content {
      margin-top: 64px;
      min-height: calc(100vh - 64px);
      background-color: #f8f9fa;
    }
  `]
})
export class AppComponent {
  title = 'modern-shopping-cart';
}
