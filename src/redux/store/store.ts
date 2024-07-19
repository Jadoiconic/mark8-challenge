import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice'

export const store = () => {
  return configureStore({
    reducer: {
      counter: counterReducer
    },
  })
}

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']