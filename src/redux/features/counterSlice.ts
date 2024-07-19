import { createSlice } from "@reduxjs/toolkit"

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 1
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            if (state.value <= 1) return
            state.value -= 1
        },
    },
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer