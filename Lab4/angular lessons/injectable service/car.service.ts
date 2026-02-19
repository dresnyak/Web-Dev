import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CarService {
    getCars(): string[] {
        return ['Sunflower GT', 'Move Plaid', 'Cyber Ruck'];
    }
}
