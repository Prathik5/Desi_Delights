import { useState } from "react";

const loggedInUser = () => {
  return true
}

const  Title = () =>{ 
    return(
      <a href="/">
        <img className="imagee" src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-app-by-town-brandcrowd.png" 
        alt="Food app hai badwe" />
      </a>
  )}
  
const Header = () =>{

    const [isloggedIn, setIsLoggedIn] = useState(false)
    return (
      <div className="Header">
        <Title/>
        <h1> <a href="/" id="headd"> Fatty AmericA</a></h1>
        <div className="navItems">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
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