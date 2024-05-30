import { configureStore } from '@reduxjs/toolkit'
import cartslice from "./CartSlice"
import d from "./AuthSlice"
 const store = configureStore({
  reducer: {
    auth:d,
    cart:cartslice

  },
})
export default  store

