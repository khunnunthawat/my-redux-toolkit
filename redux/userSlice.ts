import { createSlice } from '@reduxjs/toolkit'
import store from './store'

export const userSlice: any = createSlice({
  name: 'user',
  initialState: {
    name: 'EIFFEL',
    email: 'eiffel@gmail.com',
  },
  reducers: {
    update: (state: any, action: any) => {
      state.name = action.payload.name
      state.email = action.payload.email
    },
  },
})

export const { update } = userSlice.actions

export default userSlice.reducer
