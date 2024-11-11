import React from 'react'
import "./slider.css"
import { slide } from '../../assets/data/data';
function slider() {
  return (
    <div className="slider">
        <div className="slider__container ">
         {slide.map((item,index)=>{
          return(
             <div className="slider__box" key={index+1}>
                <div className="box__img">
                    <img src={item.image} alt="" />
                </div>            
             </div>) 
         })}
        </div>
    </div>
  )
}

export default slider
