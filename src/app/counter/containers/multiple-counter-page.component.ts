import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import * as multiple from '../actions/multiple-counter.actions';
import { State } from '../reducers';
import * as fromMultiple from '../reducers';
import { MultipleState } from '../reducers/multiple-counter.reducer';

@Component({
  template: `
    <h1>Multiple Counter Example</h1>

    <button (click)="addCounter()">Add counter</button>

    <div *ngFor="let counter of (counterArray$ | async); let i = index">
      <app-single-counter
        [counter]="counter.value"
        (increment)="increment(i)"
        (decrement)="decrement(i)">
      </app-single-counter>

      <button (click)="deleteCounter(i)">Delete counter index = {{ i }}</button>

    </div>
  `
})
export class MultipleCounterPageComponent implements OnInit {
  counterArray$: Observable<MultipleState>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.counterArray$ = this.store.select(fromMultiple.getMultipleCounter);
  }

  addCounter() {
    this.store.dispatch(new multiple.AddCounterAction());
  }

  deleteCounter(index: number) {
    this.store.dispatch(new multiple.DeleteCounterAction(index));
  }

  increment(index: number) {
    this.store.dispatch(new multiple.IncrementMultipleCounterAction(index));
  }

  decrement(index: number) {
    this.store.dispatch(new multiple.DecrementMultipleCounterAction(index));
  }
}
