
export const INCREMENT_SINGLE_COUNTER = 'INCREMENT_SINGLE_COUNTER';
export const DECREMENT_SINGLE_COUNTER = 'DECREMENT_SINGLE_COUNTER';

export class IncrementSingleCounterAction {
  readonly type = INCREMENT_SINGLE_COUNTER;
}

export class DecrementSingleCounterAction {
  readonly type = DECREMENT_SINGLE_COUNTER;
}

export type Actions =
  | IncrementSingleCounterAction
  | DecrementSingleCounterAction;
