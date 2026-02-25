import { Component, input, computed, signal } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = input.required<Product[]>();

  private removedIds = signal(new Set<number>());

  displayedProducts = computed(() => {
    const removed = this.removedIds();
    return this.products().filter(p => !removed.has(p.id));
  });

  onRemoveProduct(productId: number): void {
    this.removedIds.update(ids => {
      const newSet = new Set(ids);
      newSet.add(productId);
      return newSet;
    });
  }
}
