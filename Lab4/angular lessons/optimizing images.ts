import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
    selector: 'app-root',
    imports: [NgOptimizedImage],
    template: `
    <ul>
      <li>
        Static Image:
        <img ngSrc="/logo.svg" alt="Angular logo" width="32" height="32" />
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
      </li>
    </ul>
  `,
})
export class App {
    logoUrl = '/logo.svg';
    logoAlt = 'Angular logo';
}
