import { configureStore } from '@reduxjs/toolkit'
import userReducer from './counter';
import filterReducer from './filter'
export const store = configureStore({
  reducer: {
    counter:userReducer,
    filter:filterReducer
  },
})