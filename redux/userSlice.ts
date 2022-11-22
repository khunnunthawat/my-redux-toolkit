import { createSlice } from '@reduxjs/toolkit'

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
    remove: (state: any) =>
      (state = {
        name: '',
        email: '',
      }),
    // addHello after update function
    hello: (state: any, action: any) => {
      state.name = 'Hi' + action.payload.name
    },
  },
})

export const { update, remove, hello } = userSlice.actions

export default userSlice.reducer
