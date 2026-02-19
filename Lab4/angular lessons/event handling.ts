import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <section (mouseover)="showSecretMessage()">
      <p>{{ message }}</p>
    </section>
  `,
})
export class App {
    message = 'Hover over the section!';

    showSecretMessage() {
        this.message = 'Way to go 🚀';
    }
}
