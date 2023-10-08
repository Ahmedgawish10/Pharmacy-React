import { configureStore } from '@reduxjs/toolkit'
import cartslice from "./CartSlice"
 const store = configureStore({
  reducer: {
cart:cartslice

  },
})
export default  store

