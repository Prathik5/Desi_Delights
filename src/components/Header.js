import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";

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

    const [isloggedIn, setIsLoggedIn] = useState(false);

    const isOnline = useOnline();

    const {user} = useContext(userContext);

    return (
      <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-400 md:bg-yellow-600">
        <Title/>
        <h1> <a href="/" id="headd"> Foood Villa</a></h1>
        <div className="navItems">
          <ul className="flex py-10">
            <li className="px-2">
              <Link to="/">Home</Link>
            </li>
            <li className="px-2">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-2">
              <Link to="/contact"> Contact Us</Link>
            </li>
            <li className="px-2">
              <Link to = "/instamart">Instamart</Link>
            </li>
            <li className="px-2">Cart</li>
          </ul>
        </div>
        <h1>{isOnline? "✅" : "🔴"} </h1>
        <h1 className="p-2 font-bold text-white ">{user.name}</h1>
        {
          isloggedIn ? <button onClick={() =>{
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