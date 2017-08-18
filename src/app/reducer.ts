import { Action } from '@ngrx/store';

export const INCREMENT_SINGLE = 'INCREMENT_SINGLE';
export const DECREMENT_SINGLE = 'DECREMENT_SINGLE';

export function counterReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case INCREMENT_SINGLE:
      return state + 1;

    case DECREMENT_SINGLE:
      return state - 1;

    default:
      return state;
  }
}

export const ADD_MULTI = 'ADD_COUNTER';
export const INCREMENT_MULTI = 'INCREMENT_MULTI';
export const DECREMENT_MULTI = 'DECREMENT_MULTI';
export const DELETE_MULTI = 'DELETE_MULTI';

export function counterArrayReducer(state: number[] = [0], action: any) {
  switch (action.type) {
    case ADD_MULTI:
      return [
        ...state,
        0
      ];
    case DELETE_MULTI:
      return state.filter((value, index) => {
        return index !== action.payload;
      });
    /**
     * Duplication between DECREMENT_MULTI and INCREMENT_MULTI can be removed! :)
     */
    case DECREMENT_MULTI:
      return state.map((current, index) => {
        if (index !== action.payload) {
          return current;
        }
        return counterReducer(current, { type: DECREMENT_SINGLE });
      });
    case INCREMENT_MULTI:
      return state.map((current, index) => {
        if (index !== action.payload) {
          return current;
        }
        return counterReducer(current, { type: INCREMENT_SINGLE });
      });

    default:
      return state;
  }
}

