import {React,useState,useEffect} from "react"
import "./login.css"
import back from "../../assets/images/my-account.jpg"
import { Link } from "react-router-dom"
import { useDispatch, useSelector} from 'react-redux'
import { Formik} from 'formik';
import * as Yup from 'yup';
import toast from "react-hot-toast"
const schema = Yup.object().shape({
  name: Yup.string().required("name is required "),
  email: Yup.string() .required("email is required ") .email("Invalid email format"),
  password: Yup.string().required("password is  required ") .min(8, "password must be at least 8 characters"),
  confPassword: Yup.string().oneOf([Yup.ref("password")], "password not match with password"),

});

 const Register = () => {
const [loading, setLoading] = useState(false);
const dispatch = useDispatch();
const initialValues = {
  name:"",
  email: '',
  password: '',
  confPassword:""
};
const onSubmit =  (values) => {
  setLoading(true);
  try {
     console.log(values);
     localStorage.setItem("userRegister", JSON.stringify(values));
    setTimeout(() => {
      toast.success("Registered successfully ",{
        className:"custom-class-toast",
      })
    window.location.href = "/ecommerce-pharmacy4/#/login";
     }, 3000);
  } catch (error) {
    console.error("Login failed:", error);
  } 
};

  return (
    <>
      <section className='section__login' >
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {({values, errors,touched, handleChange,handleBlur, handleSubmit,}) => (
          <div className="register">
            <div className="form">
              <form noValidate onSubmit={handleSubmit}>
              <div className="name-box ">
                <div className="title-input">Name * </div>
                <input type="email"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder=""
                  className="form-control inp_text"
                  id="name"
                />
                <p className="error text-danger  ms-2">
                {errors.name && touched.name && errors.name}
                </p>
                </div>
                <div className="email-box ">
                <div className="title-input">Email * </div>
                <input type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder=""
                  className="form-control inp_text"
                  id="email"
                />
                <p className="error text-danger  ms-2">
                  {errors.email  }
                </p>
                </div>
                <div className="password-box">
                <div className="title-input">Password * </div>
                <input type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
                 <p className="error text-danger  ms-2">
                  {errors.password }
                </p>
                </div>
                <div className="confPassword-box mb-3">
                <div className="title-input">Confirm Password * </div>
                <input type="password"
                  name="confPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confPassword}
                  placeholder=""
                  className="form-control"
                />
                 <p className="error text-danger  ms-2">
                  {errors.confPassword }
                </p>
                </div>



                <button type="submit" className="button__login" >
                {loading ? <div className="loader"></div>: <div>Register</div>}

                </button>
                <Link to="/login">
            Login
           </Link>
              </form>
            </div>
          </div>
        )}
      </Formik>
   
      </section>
    </>
  )
}
export default Register



