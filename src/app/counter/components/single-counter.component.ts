import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-single-counter',
  template: `
    <div>Current Count: {{ counter }}</div>
    <button (click)="increment.emit()">Increment</button>
    <button (click)="decrement.emit()">Decrement</button>
  `
})
export class SingleCounterComponent {
  @Input() counter: number;
  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();
}
