import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"
import "./footer.css"
export const Footer = () => {
  return (
    <>
      <footer className='footer__section    boxItems  mt-5 pt-4 pb-4 bg-white b-1'>
        <div className='footer__container d-flex align-items-center justify-content-between flex-wrap'>
          <p className="mb-0">Cartsy Medicine - All right reserved - Design & Developed by : Gawish</p>
          <div className='social '>
            <div className="social__container d-flex justify-content-center column-gap-2">
            <a href=""> <BsFacebook className='icon' /></a>
           <a href=""><RiInstagramFill className='icon' /></a>
           <a href=""><AiFillTwitterCircle className='icon' /></a>
           <a href=""><AiFillLinkedin className='icon' /></a>
            </div>
            
          </div>
        </div>
      </footer>
    </>
  )
}