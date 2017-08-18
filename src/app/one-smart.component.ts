import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { DECREMENT_SINGLE, INCREMENT_SINGLE } from './reducer';

@Component({
  selector: 'app-one-smart',
  template: `
    <h1>Single Counter Example</h1>

    <app-one-dummy
      [counter]="counter$ | async"
      (increment)="increment()"
      (decrement)="decrement()">
    </app-one-dummy>
  `
})
export class OneSmartComponent implements OnInit {
  counter$: Observable<number>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.counter$ = this.store.select('counter');
  }

  increment() {
    this.store.dispatch({ type: INCREMENT_SINGLE });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT_SINGLE });
  }
}
