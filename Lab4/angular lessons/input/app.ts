import {Component} from '@angular/core';
import {User} from './user';

@Component({
    selector: 'app-root',
    imports: [User],
    template: `<app-user name="Simran"></app-user>`,
})
export class App {}
