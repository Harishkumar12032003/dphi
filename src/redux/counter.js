import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name:'',
}

export const userReducer = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload
    },
  },
})

export const { updateName } = userReducer.actions

export default userReducer.reducer