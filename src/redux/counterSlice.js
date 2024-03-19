import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem('counter') ? JSON.parse(localStorage.getItem('counter')):0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= state.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer