import { createSlice } from "@reduxjs/toolkit";

const cartlocaldata=localStorage.getItem("cartitems");
const arraycart=JSON.parse(cartlocaldata)

const cartSlice = createSlice({
  name: "cart",
  initialState: arraycart?arraycart:[],
  reducers: {
    addToCart(state, action) {
      const findProduct=state.find((product)=>{return product.id=== action.payload.id})
      if(findProduct){
        findProduct.quantity++

      }else{
        const cloneproduct= {...action.payload,quantity:1}
        state.push(cloneproduct);

      }
      localStorage.setItem("cartitems",JSON.stringify(state))
      // console.log(state.indexOf(action.payload))
    },
    removeFromCart(state, action) {
       const index=state.findIndex((product)=>{return product.id=== action.payload.id})
       state.splice(index,1)
 
      localStorage.setItem("cartitems",JSON.stringify(state))

    },
    decreasefromcart(state, action) {
      const findProduct=state.find((product)=>{return product.id=== action.payload.id})
      if(findProduct){
        findProduct.quantity--
        


      }
    },
  },
});

export const { addToCart, decreasefromcart,removeFromCart } = cartSlice.actions;
export default cartSlice.reducer