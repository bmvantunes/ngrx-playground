import { Action } from '@ngrx/store';

import * as singleCounter from '../actions/single-counter.actions';

export interface SingleState {
  creationDate: Date,
  value: number
};

export const createInitialState = () => ({ creationDate: new Date(), value: 0 });
export const initialState: SingleState = createInitialState();

export function singleCounterReducer(state = initialState, action: singleCounter.Actions) {
  switch (action.type) {
    case singleCounter.INCREMENT_SINGLE_COUNTER:
      return { ...state, value: state.value + 1 };

    case singleCounter.DECREMENT_SINGLE_COUNTER:
      return { ...state, value: state.value - 1 };

    default:
      return state;
  }
}
