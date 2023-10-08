import React from "react"
import image from "../../assets/images/input.png"
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
                <img src={image} alt='' className='image-preview' />
              </div>
            </div>
            <div className='right'>
              <label for="name">Username</label>
              <input type='text' id="name" required />
              <label for="email">Email</label>
              <input type='text' id="email" required />
              <label for="password">Password * </label>
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