import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as single from '../actions/single-counter.actions';
import * as fromSingle from '../reducers';
import { SingleState } from '../reducers/single-counter.reducer';


@Component({
  template: `
    <h1>Single Counter Example</h1>

    <app-single-counter
      [counter]="(counter$ | async)?.value"
      (increment)="increment()"
      (decrement)="decrement()">
    </app-single-counter>
  `
})
export class SingleCounterPageComponent implements OnInit {
  counter$: Observable<SingleState>;

  constructor(private store: Store<fromSingle.State>) { }

  ngOnInit() {
    this.counter$ = this.store.select(fromSingle.getSingleCounter);
  }

  increment() {
    this.store.dispatch(new single.IncrementSingleCounterAction());
  }

  decrement() {
    this.store.dispatch(new single.DecrementSingleCounterAction());
  }
}
