import "./header.css";
import Medicine from "../../assets/images/Medicine.svg";
import { AiOutlineSearch } from "react-icons/ai";
import Card from "./Card";
import User from "./User";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Header() {
  window.addEventListener("scroll", () => {
    let isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated=="") {
      const header = document.getElementsByClassName("header")[0];
      header.classList.toggle("active", window.scrollY > 200);
    }

    //{console.log(document.body.scrollHeight)}
  });
  // window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
     
        <div className="header">
          <div className="containerr ">
            <div className="header__content">
              <div className="logo">
                <Link to="/">
                  <img src={Medicine} alt={Medicine} />
                </Link>
              </div>
              <div className="search  d-flex align-items-center">
                <label htmlFor="focus" className="searchIcon">
                  <AiOutlineSearch />
                </label>
                <input type="text" id="focus" placeholder="Search..." />
              </div>
              <div className="account d-flex align-items-center">
                {isLoggedIn ?<div className="d-flex gap-2" ><Card /><User /></div>: 
                <div>
                  <a href="/ecommerce-pharmacy4/#/login" type="button" className="btn btn-dark me-3 text-white head-login">Login</a>
                  <a href="/ecommerce-pharmacy4/#/register" type="button" className="btn btn-dark me-3 text-white">Register</a>
                  </div> 
}
             
              </div>
            </div>
          </div>
        </div>

    </>
  );
}

export default Header;
