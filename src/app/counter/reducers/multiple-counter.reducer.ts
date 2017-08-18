import * as multipleCounter from '../actions/multiple-counter.actions';
import * as singleCounter from '../actions/single-counter.actions';
import * as fromSingleCounter from './single-counter.reducer';

export interface MultipleState extends Array<fromSingleCounter.SingleState> { }

const createNewCounter = () => ({ creationDate: new Date(), value: 0 });
const initialState: MultipleState = [
  fromSingleCounter.createInitialState()
];

export function multipleCounterReducer(state = initialState, action: multipleCounter.Actions) {
  switch (action.type) {
    case multipleCounter.ADD_COUNTER:
      return [
        ...state,
        createNewCounter()
      ];
    case multipleCounter.DELETE_COUNTER:
      return state.filter((value, index) => {
        return index !== action.index;
      });

    /**
     * Duplication between DECREMENT_MULTI and INCREMENT_MULTI can be removed! :)
     */
    case multipleCounter.DECREMENT_MULTIPLE_COUNTER:
      return state.map((current, index) => {
        if (index !== action.index) {
          return current;
        }
        const newAction = new singleCounter.DecrementSingleCounterAction();
        return fromSingleCounter.singleCounterReducer(current, newAction);
      });
    case multipleCounter.INCREMENT_MULTIPLE_COUNTER:
      return state.map((current, index) => {
        if (index !== action.index) {
          return current;
        }
        const newAction = new singleCounter.IncrementSingleCounterAction();
        return fromSingleCounter.singleCounterReducer(current, newAction);
      });

    default:
      return state;
  }
}
