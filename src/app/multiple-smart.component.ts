import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { ADD_MULTI, DECREMENT_MULTI, DELETE_MULTI, INCREMENT_MULTI } from './reducer';

@Component({
  selector: 'app-multiple-smart',
  template: `
    <h1>Multiple Counter Example</h1>

    <button (click)="addCounter()">Add counter</button>

    <div *ngFor="let counter of (counterArray$ | async); let i = index">
      <app-one-dummy
        [counter]="counter"
        (increment)="increment(i)"
        (decrement)="decrement(i)">
      </app-one-dummy>

      <button (click)="deleteCounter(i)">Delete counter index = {{ i }}</button>

    </div>
  `
})
export class MultipleSmartComponent implements OnInit {
  counterArray$: Observable<number[]>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.counterArray$ = this.store.select('counterArray');
  }

  addCounter() {
    this.store.dispatch({ type: ADD_MULTI });
  }

  deleteCounter(index: number) {
    this.store.dispatch({ type: DELETE_MULTI, payload: index });
  }

  increment(index: number) {
    this.store.dispatch({ type: INCREMENT_MULTI, payload: index });
  }

  decrement(index: number) {
    this.store.dispatch({ type: DECREMENT_MULTI, payload: index });
  }
}
