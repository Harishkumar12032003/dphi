import { configureStore } from '@reduxjs/toolkit'
import userReducer from './counter';

export const store = configureStore({
  reducer: {
    counter:userReducer,
  },
})