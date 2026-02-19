import {Component} from '@angular/core';
import {Comments} from './comments';

@Component({
    selector: 'app-root',
    imports: [Comments],
    template: `
    <div>
      <h1>How I feel about Angular</h1>
      <article>
        <p>Angular is my favorite framework, and this is why. Angular has the coolest deferrable views feature that makes defer loading content the easiest and most ergonomic it has ever been.</p>
      </article>

      @defer (on viewport) {
        <comments />
      } @placeholder {
        <p>Future comments</p>
      } @loading (minimum 2s) {
        <p>Loading comments...</p>
      }
    </div>
  `,
})
export class App {}
