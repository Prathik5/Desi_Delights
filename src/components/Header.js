import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const loggedInUser = () => {
  return true
}

const  Title = () =>{ 
    return(
      <a href="/">
        <img className="imagee" src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-app-by-town-brandcrowd.png" 
        alt="Food app hai " />
      </a>
  )}
  
const Header = () =>{

    const [isloggedIn, setIsLoggedIn] = useState(false)
    return (
      <div className="Header">
        <Title/>
        <h1> <a href="/" id="headd"> Foood Villa</a></h1>
        <div className="navItems">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact"> Contact Us</Link>
              </li>
            <li>Cart</li>
          </ul>
        </div>
        {
          isloggedIn? <button onClick={() =>{
            setIsLoggedIn(false)
          }
          }>Logout</button> : 
          <button onClick={() =>{
            setIsLoggedIn(true)
          }
        }>Login</button> 
      }          
      </div>
    );
  };

export default Header;