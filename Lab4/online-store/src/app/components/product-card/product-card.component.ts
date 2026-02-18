import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;

  selectedImageIndex: number = 0;
  showShareMenu: boolean = false;

  get stars(): number[] {
    return [1, 2, 3, 4, 5];
  }

  getStarClass(star: number): string {
    if (star <= Math.floor(this.product.rating)) {
      return 'star filled';
    } else if (star === Math.ceil(this.product.rating) && this.product.rating % 1 !== 0) {
      return 'star half';
    }
    return 'star empty';
  }

  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }

  prevImage(): void {
    this.selectedImageIndex =
      this.selectedImageIndex > 0
        ? this.selectedImageIndex - 1
        : this.product.images.length - 1;
  }

  nextImage(): void {
    this.selectedImageIndex =
      this.selectedImageIndex < this.product.images.length - 1
        ? this.selectedImageIndex + 1
        : 0;
  }

  toggleShareMenu(): void {
    this.showShareMenu = !this.showShareMenu;
  }

  shareWhatsApp(): void {
    const url = `https://wa.me/?text=${encodeURIComponent('Check out this product: ' + this.product.link)}`;
    window.open(url, '_blank');
    this.showShareMenu = false;
  }

  shareTelegram(): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
    this.showShareMenu = false;
  }

  formatPrice(price: number): string {
    return price.toLocaleString('ru-KZ');
  }
}
