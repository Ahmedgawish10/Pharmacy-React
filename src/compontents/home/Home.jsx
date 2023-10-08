import React from 'react'
import CartItems from '../header/CartItems'
import Slider from '../heroslide/slider'
import Order from '../heroslide/Order'
import Category from '../category/Category'
import ProductCart from '../product/ProductCart'
const Home=()=> {
  let st=true;
  return (
   
    <div className='container pt-5'>
     <Slider/>
     <Order/>
     <Category />
     
     <ProductCart/>
    </div>
   

  

  )
}

export default Home