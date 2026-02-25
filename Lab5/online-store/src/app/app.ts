import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Product } from './models/product.model';
import { Category } from './models/category.model';
import { PRODUCTS } from './data/products';
import { CATEGORIES } from './data/categories';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  categories: Category[] = CATEGORIES;
  allProducts: Product[] = PRODUCTS;
  selectedCategory: Category | null = null;
  filteredProducts: Product[] = [];

  selectCategory(category: Category): void {
    this.selectedCategory = category;
    this.filteredProducts = this.allProducts.filter(p => p.categoryId === category.id);
  }
}
