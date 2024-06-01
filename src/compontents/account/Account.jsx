import React from "react"
import image from "../../assets/images/input.png"
import imagev from "../../assets/images/admin.png"

import "./account.css"

const Account = () => {
  return (
    <>
      <section className='section__account'>
        <div className='container boxItems'>
          <h1>Account Information</h1>
          <div className='content'>
            <div className='left'>
              <div className='img flexCenter'>
                <input type='file' accept='image/*' src={image} alt='imgs' />
                <img src={imagev} alt='' className='image-preview' />
              </div>
            </div>
            <div className='right'>
              <label htmlFor="name">Username</label>
              <input type='text' id="name" required />
              <label htmlFor="email">Email</label>
              <input type='text' id="email" required />
              <label htmlFor="password">Password * </label>
              <input type='text' id="password" required /><br/>
              <button className='button__update'>Update</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Account