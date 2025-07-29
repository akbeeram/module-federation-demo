import {configureStore, createSlice} from '@reduxjs/toolkit'

const AppSlice = createSlice({
    name: 'count',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
    }
})

export const {increment, decrement} = AppSlice.actions;

export const store =configureStore({
    reducer: {
        counter: AppSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;