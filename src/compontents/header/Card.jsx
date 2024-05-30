import React, { useState } from 'react'
import "./card.css"
import CartItems from "./CartItems"
import { product } from '../../assets/data/data'
import {AiFillLock,AiOutlineClose} from "react-icons/ai"
import { useSelector } from 'react-redux'

function Card() {
    const products=useSelector((state)=>{
        return state.cart
    })
   //show and hide card
    const [CardOpen,setCardOpen]=useState(false);
    const closeCard=()=>{
        setCardOpen(false)
    }
    const totalprice=products.reduce((ac,currProduct)=>{
        ac+=currProduct.price*currProduct.quantity
        return ac
     },0)
  return (
    <>
    
    <div className="card" onClick={()=>{setCardOpen(!CardOpen)
         }}>
        <AiFillLock className="cardBagIcon"/>
        <span className='numberCard'>{products.length}</span>
    </div>
    <div className={CardOpen?"overlay":"none"}></div>
    <div className={CardOpen?"showcarditem":"hidecarditem"}>
        <div className="title d-flex justify-content-between">
            <h2>Shopping Cart</h2>
            <button onClick={()=> closeCard()}>
                <AiOutlineClose className='icon__close' />
                </button>
        </div>
        <div className='allproducts'>
        <CartItems CloseCard={closeCard} />
       </div>
        <div className="checkout">
            <button>
                <span>Priced To Checkout :</span>
                <label htmlFor=""><span style={{marginLeft:"40px",cursor:"pointer"}}>${totalprice.toFixed(2)}</span></label>
            </button>
        </div>



    </div>
    </>
  )
}

export default Card