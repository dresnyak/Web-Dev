import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'app-user',
    imports: [FormsModule],
    template: `
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
    <p>Selected: {{ favoriteFramework }}</p>
  `,
})
export class User {
    favoriteFramework = '';
}
