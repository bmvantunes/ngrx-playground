import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromMultiple from './multiple-counter.reducer';
import * as fromSingle from './single-counter.reducer';

export interface CounterState {
  multiple: fromMultiple.MultipleState;
  single: fromSingle.SingleState;
}

export interface State {
  'counters': CounterState;
}

export const reducers = {
  multiple: fromMultiple.multipleCounterReducer,
  single: fromSingle.singleCounterReducer,
};

/**
 * Feature Selector
 */
const getCounterState = createFeatureSelector<CounterState>('counters');

/**
 * From Multiple Counter Reducer
 */
export const getMultipleCounter = createSelector(
  getCounterState,
  (state: CounterState) => state.multiple
);

/**
 * From Single Counter Reducer
 */
export const getSingleCounter = createSelector(
  getCounterState,
  (state: CounterState) => state.single
);
