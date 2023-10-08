import React from "react"
import "./login.css"
import back from "../../assets/images/my-account.jpg"
import { Link } from "react-router-dom"
import { useState } from "react"
// import { useDispatch } from "react-redux"
// import { authActions } from "../../store/authSlice"
 const Login = () => {
//   const dispatch = useDispatch()
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     dispatch(authActions.login())
//   }
const [inpval,setinpval]=useState({email:"",password:""})
const getdata=(e)=>{
  const valueOfName=e.target.name;
  const value=e.target.value;
setinpval({ ...inpval,[valueOfName]:value})
}
const submitdata=(e)=>{
  e.preventDefault()
  const {name,email,password,confirmpassword}=inpval;
  if(email==""){
    alert("email is empty !")
  }
  else if(!email.includes("@")){
    alert("email is not valid !")
  }else if(password==""){
    alert("password is empty !")
  }else{
  var x=  localStorage.getItem("userRegister")
    console.log(JSON.parse(x));
  }
  

}
  return (
    <>
      <section className='section__login'>
        <div className=''>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Login</h3>
              <h1>My ACcount</h1>
            </div>
          </div>
          {/* onSubmit={handleSubmit} */}
          <form >
            <span> Email address *</span>
            <input type='text' name="email" onChange={getdata} required />
            <span>Password * </span>
            <input type='password'name="password" onChange={getdata} required />
            <button className='button__login' onClick={submitdata}>Log in </button>
            <Link to="/register">
            Sign up
           </Link>
          </form>
        </div>
      </section>
    </>
  )
}
export default Login