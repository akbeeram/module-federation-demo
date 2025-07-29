import { createReducer, on } from '@ngrx/store';
import { decrement, increment } from './counter.actions';

const initialState = 0;

export const countReducer = createReducer(
    initialState,
    on(increment, (state: number) => state + 1),
    on(decrement, (state: number) => state - 1)
)