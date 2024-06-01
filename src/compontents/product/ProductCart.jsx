import React from 'react'
import { Link } from 'react-router-dom'
import {BiPlusCircle} from "react-icons/bi"
import { useDispatch, useSelector} from 'react-redux'

import { addToCart } from "../../redux-store/CartSlice"
import { login } from "../../redux-store/AuthSlice"

import { product } from '../../assets/data/data'
import "./product.css"

function ProductCart() {
  const dispatch=useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className='section__products ' >
      {
        product.map((item)=>{
          return (
            <div key={item.id} className="box__product d-flex" onClick={()=>{dispatch(addToCart(item))}}>
            <div className="img " >
            <img src={item.img} alt="" style={{width:"90px",marginRight:"10px"}}/>
        </div>
        <div className="details w-100">
        <h3 className='fs-5 text-black'> ${item.price}</h3>
        <p className='text-black-50'>{item.name}</p>
        <button className='float-end border-0 bg-white fs-4'onClick={()=>{
          dispatch(addToCart(item))
        }}> <BiPlusCircle/></button>
        </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default ProductCart