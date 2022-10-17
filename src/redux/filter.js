import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filters : [],
}

export const filterReducer = createSlice({
  name:'filter',
  filters : [],
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      state.filters.push(action.payload);
    },
    deleteFilter: (state, action) => {
      state.filters.filter(item => item !== action.payload);
    },
  },
})

export const { updateFilter,deleteFilter } = filterReducer.actions

export default filterReducer.reducer