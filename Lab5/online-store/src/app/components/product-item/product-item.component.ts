import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  product = input.required<Product>();
  remove = output<number>();

  selectedImageIndex = 0;
  showShareMenu = false;

  get stars(): number[] {
    return [1, 2, 3, 4, 5];
  }

  getStarClass(star: number): string {
    const rating = this.product().rating;
    if (star <= Math.floor(rating)) {
      return 'star filled';
    } else if (star === Math.ceil(rating) && rating % 1 !== 0) {
      return 'star half';
    }
    return 'star empty';
  }

  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }

  prevImage(): void {
    const images = this.product().images;
    this.selectedImageIndex =
      this.selectedImageIndex > 0
        ? this.selectedImageIndex - 1
        : images.length - 1;
  }

  nextImage(): void {
    const images = this.product().images;
    this.selectedImageIndex =
      this.selectedImageIndex < images.length - 1
        ? this.selectedImageIndex + 1
        : 0;
  }

  onLike(): void {
    this.product().likes++;
  }

  onDelete(): void {
    this.remove.emit(this.product().id);
  }

  toggleShareMenu(): void {
    this.showShareMenu = !this.showShareMenu;
  }

  shareWhatsApp(): void {
    const product = this.product();
    const url = `https://wa.me/?text=${encodeURIComponent('Посмотри этот товар: ' + product.link)}`;
    window.open(url, '_blank');
    this.showShareMenu = false;
  }

  shareTelegram(): void {
    const product = this.product();
    const url = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(product.name)}`;
    window.open(url, '_blank');
    this.showShareMenu = false;
  }

  formatPrice(price: number): string {
    return price.toLocaleString('ru-KZ');
  }
}
