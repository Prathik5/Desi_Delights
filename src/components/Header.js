import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import useLogin from "../utils/useLogin";
import cartImg from "../Assets/Images/Cart.png";
import desiDelightlogo from "../Assets/Images/desiDelightlogo.jpeg";
import emptyCart from "../Assets/Images/emptyCart.png";
import { useAuth0 } from "@auth0/auth0-react";
// import store from "../utils/store";

// ! This is just the title and logo
const Title = () => {
  return (
    <div className="flex">
      <a href="/">
        <img
          data-testid="logo"
          className="h-28 p-2"
          src={desiDelightlogo}
          alt="Desi Delights Logo"
        />
      </a>
      <h1 className="m-auto">DESI DELIGHTS</h1>
    </div>
  );
};

// ! Here starts the header
const Header = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  // const islogedIn = useLogin();

  const isOnline = useOnline();

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems)
  return (
    <div className="flex justify-between shadow-lg">
      <Title />
      <h1>
        {" "}
        <a
          href="/"
          id="headd"
          className="font-bold justify-center align-middle"
        ></a>
      </h1>
      <div className="navItems hidden md:flex">
        <ul className="flex py-10">
          <li className="px-2 text-Resto-Name hover:text-Swiggy-orange">
            <Link to="/about">About Me</Link>
          </li>
          <li className="px-2 text-Resto-Name hover:text-Swiggy-orange">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2 text-Resto-Name hover:text-Swiggy-orange">
            <Link to="/cart">
              <div className="flex">
                <img src={cartImg} className="w-9 h-9 px-1" alt="Cart" />
              </div>
            </Link>
          </li>
          {cartItems.length == 0 ? (
            <></>
          ) : (
            <sup
              data-testid="cart-status"
              className="bg-Swiggy-orange text-white text-sm font-light w-4 h-4 px-1 pb-2 rounded-2xl"
            >
              {cartItems.length}
            </sup>
          )}
        </ul>
      </div>
      <div className="flex">
        {isAuthenticated ? (
          <>
            <div className="flex m-auto">
              <Link
                to="/userProfile"
                className="block h-1/3 w-1/3 overflow-hidden rounded-full border-gray-600 focus:outline-none focus:border-white"
              >
                <img
                  className="h-full w-full object-cover"
                  src={user.picture}
                  alt=""
                />
              </Link>
              <li className="m-auto list-none">
                <button
                  className="bg-red-600 text-white mx-auto"
                  onClick={(e) =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Logout
                </button>
              </li>
            </div>
          </>
        ) : (
          <li className="m-auto list-none">
            <button
              className="bg-green-600 text-white"
              onClick={(e) => loginWithRedirect()}
            >
              Login
            </button>
          </li>
        )}
      </div>
    </div>
  );
};

export default Header;
