import { React, useState, useEffect } from "react";
import "./login.css";
import back from "../../assets/images/my-account.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { login } from "../../redux-store/AuthSlice";
import toast from "react-hot-toast";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("email is required ")
    .email("Invalid email format"),
  password: Yup.string()
    .required("password is  required ")
    .min(8, "Password must be at least 8 characters"),
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    var Credintails;
    setLoading(true);
    let userRegister = JSON.parse(localStorage.getItem("userRegister"));
    try {
      toast.dismiss(Credintails);
      if (
        userRegister != null &&
        userRegister.email == values.email &&
        userRegister.password == values.password
      ) {
        localStorage.setItem("userlogin", JSON.stringify(values));
        setTimeout(() => {
          toast.success("Login successfully", {
            className: "custom-class-toast",
          });
          window.location.href = "/ecommerce-pharmacy4/";
          dispatch(login());
        }, 3000);
      } else {
        if (userRegister == null) {
          setLoading(false);

           Credintails = toast.error("You must register first", {
            className: "custom-class-toast",
            duration: 4000,
          });
        } else {
          setLoading(true);
           console.log(loading);
          setTimeout(() => {
            setLoading(false);
             Credintails = toast.error("Invalid Credintails", {
              className: "custom-class-toast",
              duration: 4000,
            });
          }, 3000);

        
        }
      }
    } catch (error) {
      setLoading(false);
      console.error("Login failed:", error);
      setTimeout(() => {
        setLoading(false);
      toast.error("Invalid d", {
          className: "custom-class-toast",
          duration: 4000,
        });
      }, 3000);
    }
  };

  return (
    <>
      <section className="section__login">
        <Formik
          validationSchema={schema}
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
            <div className="login">
              <div className="form">
                <form noValidate onSubmit={handleSubmit}>
                  <div className="email-box ">
                    <div className="title-input">Email * </div>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder=""
                      className="form-control inp_text"
                      id="email"
                    />
                    <p className="error text-danger  ms-2">{errors.email}</p>
                  </div>
                  <div className="password-box mb-3">
                    <div className="title-input">Password * </div>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder="Enter password"
                      className="form-control"
                    />
                    <p className="error text-danger  ms-2">{errors.password}</p>
                  </div>
                  <button type="submit" className="button__login">
                    {loading ? (
                      <div className="loader"></div>
                    ) : (
                      <div>Login</div>
                    )}
                  </button>
                  <Link to="/register">Register</Link>
                </form>
              </div>
            </div>
          )}
        </Formik>
      </section>
    </>
  );
};
export default Login;
