import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { ProductListComponent } from './app/components/product-list/product-list.component';
import { ProductDetailComponent } from './app/components/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
}).catch(err => console.error(err));
