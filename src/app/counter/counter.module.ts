import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { SingleCounterComponent } from './components/single-counter.component';
import { MultipleCounterPageComponent } from './containers/multiple-counter-page.component';
import { SingleCounterPageComponent } from './containers/single-counter-page.component';
import { reducers } from './reducers';

@NgModule({
  declarations: [
    SingleCounterComponent,
    SingleCounterPageComponent,
    MultipleCounterPageComponent
  ],

  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'single' },
      { path: 'single', component: SingleCounterPageComponent },
      { path: 'multiple', component: MultipleCounterPageComponent }
    ]),

    StoreModule.forFeature('counters', reducers)
  ]
})
export class CounterModule { }
