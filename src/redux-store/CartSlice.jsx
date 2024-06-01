import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-hot-toast';

const cartlocaldata=localStorage.getItem("cartitems");
const arraycart=JSON.parse(cartlocaldata)

const cartSlice = createSlice({
  name: "cart",
  initialState: arraycart?arraycart:[],
  reducers: {
    addToCart(state, action) {
        let  isAuthenticated=localStorage.getItem("isAuthenticated")
         const findProduct=state.find((product)=>{return product.id=== action.payload.id})
      if (isAuthenticated=="true" && findProduct) {
          console.log(isAuthenticated);
          if(findProduct){
            findProduct.quantity++
            const cartElement = document.querySelector('.showcarditem');
                    if (!cartElement) {
              const toastId=toast.loading('Product already in cart!',{
                className:"custom-class-toast",
                duration: 2000, 
              });
              setTimeout(() => {
                toast.dismiss(toastId);
              }, 2000);
            }
         }
  
      }else{
        if (isAuthenticated=="true") {
          toast.success('Product added in cart!',{
            className:"custom-class-toast",
            duration: 2000, 
          });
          const cloneproduct= {...action.payload,quantity:1}
          state.push(cloneproduct);
          localStorage.setItem("cartitems",JSON.stringify(state))
        }else{
          toast.error('You must register first !',{
            className:"custom-class-toast",
            duration: 2000, 
          });
        }  
      }
      // console.log(state.indexOf(action.payload))
    },
    removeFromCart(state, action) {
       const index=state.findIndex((product)=>{return product.id=== action.payload.id})
       state.splice(index,1)
      localStorage.setItem("cartitems",JSON.stringify(state))
      const myCart= localStorage.getItem("cartitems");
             if (JSON.parse(myCart).length===0) {
              toast.error('Your  cart is empty now !',{
                className:"custom-class-toast",
                duration: 1000, 
              });             }
    
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