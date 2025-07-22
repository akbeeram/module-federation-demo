import { createSlice, configureStore } from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name: 'count',
    initialState: { count: 0},
    reducers: {
        increment: (state) => {debugger;state.count = state.count + 1},
        decrement: (state) => {state.count = state.count - 1}
    }
});

export const {increment, decrement} = AppSlice.actions;

export const store = configureStore({
    reducer: {
        counter: AppSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;