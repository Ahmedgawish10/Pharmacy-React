import React from 'react'
import { addToCart,decreasefromcart,removeFromCart } from '../../redux-store/CartSlice';
import { useDispatch,useSelector } from 'react-redux';
function CartItems() {

  const dispatch=useDispatch();
    const cart= useSelector((state)=>{return state.cart})
    
 const getlocalstorage=()=>{
const data=localStorage.getItem("product")
const parsedata=JSON.parse(data)
return parsedata
console.log(parsedata);
// 

 }

  return (
    <>
     <div className="cartlist  " onClick={getlocalstorage}>
{cart.length==0?"shoping cart is empty !":

cart.map((product)=>{
  return(
    
    <div className='cartlist__item d-flex align-items-center gap-3 mb-3' key={product.id}> 
       <div className="img">
    <img src={product.img} alt="" style={{width:"106px"}} />
  </div>
    <div className='details'>
       <div className="title">
        <div className="price">Unit Price ${ product.price}</div>
       </div>
    <div className='add__minus d-flex' >
      <div className="increase" >
        <button onClick={()=>dispatch(addToCart(product))}>+</button>
      </div>
      <div className="quntity">
        <button>{product.quantity}</button>
      </div>
      <div className="decrease">
        <button onClick={()=>{
              if(product.quantity>1){
                dispatch(decreasefromcart(product))
              }else{
                dispatch(removeFromCart(product))
              }
        }}>-</button>
      </div>
 
      <div className="totalprice ms-2">${(product.price*product.quantity).toFixed(2)}</div>
      </div>
      
    </div>
    </div>
  )
})}
      
    
     </div>
    </>
  )
}

export default CartItems