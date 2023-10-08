import React, { useState } from 'react'
import ImgUser from "../../assets/images/admin.png"
import {AiOutlineUser,AiOutlineHeart,AiOutlineUnlock,AiOutlineQuestion,AiOutlineLogin} from "react-icons/ai"
import { Link } from 'react-router-dom'
function User() {
    
    const [openprofile,setopenprofile]=useState(false)
    const [user,setuser]=useState(true)
    const closeprofile=()=>{
        setopenprofile(false)
    }
  return (
    
    <div className='user'>
            <div className="profile">
                {user?(
                    <>
                    <div className='img' onClick={()=>{ setopenprofile(!openprofile)}}>
                        <img src={ImgUser} alt=""  style={{width:"40px", cursor: "pointer"}}/> 
                    </div>
                    {openprofile &&
                    (
                       <div className='box__profile ' onClick={()=>{closeprofile()}}>
                        <Link to="/myaccount">
                            <div className='box-1 d-flex column-gap-3 mb-4'>
                            <img src={ImgUser} alt=""  style={{width:"40px", cursor: "pointer"}}/> 
                            <div className='who__user d-flex  flex-column'>
                            <div>ahmed</div>
                            <div>egypt</div>
                            </div>
                            </div>
                            </Link>
                            <div className='box-2'>
                                <div className='myaccount '>
                                <Link to="myaccount">
                                <AiOutlineUser className='myaccount__icon'/>
                                       <span className='myaccount__title ps-4'>My Account</span>
                                </Link>
                                </div>
                                <div className='myorder '>
                                    <a href="">
                                       <AiOutlineUnlock className='myaccount__icon'/>
                                       <span className='myaccount__title ps-4'>My Order</span>
                                    </a>
                                </div>
                                <div className='mywishlist '>
                                    <a href="">
                                       <AiOutlineHeart className='myaccount__icon'/>
                                       <span className='myaccount__title ps-4'>Wishlist</span>
                                    </a>
                                </div>
                                <div className='myhelp '>
                                    <a href="">
                                       <AiOutlineQuestion className='myaccount__icon'/>
                                       <span className='myaccount__title ps-4'>Help</span>
                                    </a>
                                </div>
                                <div className='mylogout ' onClick={()=>{
                                    setuser(false)
                                }}>
                                    <Link to="/login">
                                    <AiOutlineLogin className='myaccount__icon'/>
                                       <span className='myaccount__title ps-4'>Log Out</span>
                                    </Link>
                                </div>
                            </div>



                       </div>

                    )}
                 
                    </>
                ):""}
            </div>
    </div>
  )
}

export default User