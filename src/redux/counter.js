import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name:'',
  delete:'',
}

export const userReducer = createSlice({
  name: 'search',
  delete:'title',
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload
    },
    updateDelete: (state, action) => {
      state.delete = action.payload
    },
  },
})

export const { updateName,updateDelete } = userReducer.actions

export default userReducer.reducer