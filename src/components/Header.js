import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import useLogin from "../utils/useLogin";
import cartImg from "../Assets/Images/Cart.png";
// import store from "../utils/store";

const loggedInUser = () => {
  return true
}

const  Title = () =>{ 
    return(
      <a href="/">
        <img className="h-28 p-2" src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-app-by-town-brandcrowd.png" 
        alt="Food app hai " />
      </a>
  )}
  
const Header = () =>{

    const islogedIn = useLogin();

    const isOnline = useOnline();

    const {user} = useContext(userContext);

    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems)

    return (
      <div className="flex justify-between shadow-lg">
        <Title/>
        <h1> <a href="/" id="headd"> Foood Villa</a></h1>
        <div className="navItems">
          <ul className="flex py-10">
            <li className="px-2 text-Resto-Name hover:text-Swiggy-orange">
              <Link to="/">Home</Link>
            </li>
            <li className="px-2 text-Resto-Name hover:text-Swiggy-orange">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-2 text-Resto-Name hover:text-Swiggy-orange">
              <Link to="/contact"> Contact Us</Link>
            </li>
            <li className="px-2 text-Resto-Name hover:text-Swiggy-orange">
              <Link to = "/instamart">Instamart</Link>
            </li>
            <li className="px-2 text-Resto-Name hover:text-Swiggy-orange">
             <Link to = "/cart"><img src={cartImg} alt="Cart" className="w-8 h-8" /></Link>
            </li>
            <sup className="bg-Swiggy-orange text-white text-sm font-light w-4 h-4 px-1 pb-2 rounded-2xl">{cartItems.length}</sup>
            
          </ul>
        </div>
        <button>{islogedIn ? "Login" : "Logout" }</button>          
      </div>
    );
  };

export default Header;