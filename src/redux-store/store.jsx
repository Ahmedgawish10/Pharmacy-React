import { configureStore } from '@reduxjs/toolkit'
import Cart from "./CartSlice"
import Auth from "./AuthSlice"
 const store = configureStore({
  reducer: {
    auth:Auth,
    cart:Cart

  },
})
export default  store

