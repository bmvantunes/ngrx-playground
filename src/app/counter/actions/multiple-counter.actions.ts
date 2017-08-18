
export const ADD_COUNTER = 'ADD_COUNTER';
export const DELETE_COUNTER = 'DELETE_COUNTER';
export const INCREMENT_MULTIPLE_COUNTER = 'INCREMENT_MULTIPLE_COUNTER';
export const DECREMENT_MULTIPLE_COUNTER = 'DECREMENT_MULTIPLE_COUNTER';

export class AddCounterAction {
  readonly type = ADD_COUNTER;
}

export class DeleteCounterAction {
  readonly type = DELETE_COUNTER;

  constructor(public index: number) { }
}

export class IncrementMultipleCounterAction {
  readonly type = INCREMENT_MULTIPLE_COUNTER;

  constructor(public index: number) { }
}

export class DecrementMultipleCounterAction {
  readonly type = DECREMENT_MULTIPLE_COUNTER;

  constructor(public index: number) { }
}

export type Actions =
  | AddCounterAction
  | DeleteCounterAction
  | IncrementMultipleCounterAction
  | DecrementMultipleCounterAction;

