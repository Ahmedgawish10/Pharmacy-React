import React, { useState } from "react"
import "./login.css"
import img from "../../assets/images/my-account.jpg"
import { Link } from "react-router-dom"

 const Regsiter = () => {
  const [inpval,setinpval]=useState({name:"",email:"",password:"",confirmpassword:""})
    const getdata=(e)=>{
      const valueOfName=e.target.name;
      const value=e.target.value;
    setinpval({ ...inpval,[valueOfName]:value})
    }
    //-----------send register data
    const submitdata=(e)=>{
      e.preventDefault()
    
      const {name,email,password,confirmpassword}=inpval;
      if(name===""){
        alert("name is empty !")
      }else if(email===""){
        alert("email is empty !")
      }
      else if(!email.includes("@")){
        alert("email is not valid !")
      }else if(password===""){
        alert("password is empty !")
      }
      else if(confirmpassword===""){
        alert("confirmpassword is empty!")
      }
      else if(password!==confirmpassword){
        alert("password and confirmpassword not identical !")
      }else{
        localStorage.setItem("userRegister",JSON.stringify(inpval))
      }
      
    
    }
  return (
    <>
      <section className='section__register'>
        <div className=''>
          <div className='backImg'>
            <img src={img} alt='' style={{width:"100%"}}/>
            <div className='text'>
              <h3>Register</h3>
              <h1>My ACcount</h1>
            </div>
          </div>
          <form>
            <span>Username * </span>
            <input type='text' name="name" onChange={getdata} required />
            <span>Email address *</span>
            <input type='text' name="email" onChange={getdata} required  />
            <span>Password * </span>
            <input type='text' name="password" onChange={getdata} required />
            <span>Confirm Password * </span>
            <input type='text'name="confirmpassword" onChange={getdata} required />
            <button className='button__register' onClick={submitdata}>Register</button>
           <Link to="/login">
            Sign in
           </Link>
          </form>
        </div>
      </section>
    </>
  )
}
export default Regsiter