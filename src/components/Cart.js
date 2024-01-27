import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import { clearCart, addItem, removeItem } from "../utils/cartSlice";
import { IMG_CDN } from "../Config";
import { useAuth0 } from "@auth0/auth0-react";
import emptyCart from "../Assets/Images/emptyCart.png";
import HoverIcon from "../Assets/Images/HoverIcon.png";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  let ItemTotal = 0;
  let shippingCost = Math.floor(Math.random() * 10) + 50;

  const handleClear = () => {
    dispatch(clearCart());
  };

  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (!isAuthenticated)
    return (
      <div className="h-screen flex flex-col items-center justify-center align-middle">
        <h1>Please be logged In to add Items in cart</h1>
        <button
          className="bg-green-400 text-white m-2 p-2"
          onClick={() => loginWithRedirect()}
        >
          Log In
        </button>
      </div>
    );

  if (!cart.length) {
    return (
      <div className="h-screen flex items-center justify-center align-middle">
        <img
          className="max-h-m m-auto max-w-m "
          src={emptyCart}
          alt="Empty Cart"
        />
        <div className="m-auto">
          <h1 className="text-lg "> Your cart is empty</h1>
          <h2 className="text-Swiggy-orange font-Everything">
            {" "}
            Try adding items into your cart, they'll be displayed here
          </h2>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex m-auto items-center justify-between">
        {/* THIS IS FOR THE ITEM AND THE PRICE TO DISPLAY */}
        <div className="flex flex-col">
          {cart.map((order) => {
            ItemTotal =
              parseInt(ItemTotal) + parseInt(order?.card?.info?.price / 100);
            taxMoney = 0.12 * ItemTotal;
            console.log(order);
            return (
              <div className="flex m-auto p-2 items-center justify-center">
                <div className="p-2 m-2">
                  <div key={order.card.info.id}>
                    <div className="flex">
                      <div>
                        <img
                          key="Item-image"
                          src={`${IMG_CDN}${order?.card?.info?.imageId}`}
                          alt={order?.card?.info?.name}
                          className="w-24 h-24"
                        />
                      </div>
                      <div className="container">
                        <div
                          key="Item-name"
                          className="font-bold text-lg text-Item-description px-2 mx-2"
                        >
                          {order?.card?.info?.name}
                        </div>
                        <div
                          key="Item-price"
                          className="font-light text-base text-Item-description px-2 mx-2"
                        >
                          &#8377;{order?.card?.info?.price / 100}
                        </div>
                        <div className="m-auto">
                          <button
                            className="m-5 px-3 bg-red-500 text-white"
                            onClick={() => handleAddItem(order)}
                          >
                            +
                          </button>
                          <button
                            className="m-5 px-3 bg-green-500 text-white"
                            onClick={() => handleRemoveItem(order)}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* This is for the total section */}
        <div className="border-black border m-auto p-2 flex flex-col w-2/5">
          <div>
            <div>Total Amount</div>
            <div>
              <div className="m- auto p-2 flex justify-between">
                <div> Item cost</div>
                <div>&#8377;{parseInt(ItemTotal)}</div>
              </div>
              <div className="m- auto p-2 flex justify-between">
                {" "}
                <div>
                  Shipping Cost
                  <span className="inline">
                    <img
                      className="w-2 h-2 m-2 inline-block"
                      src={HoverIcon}
                      alt="Hover Icon"
                    />
                  </span>
                </div>
                <div> &#8377; {shippingCost}</div>
              </div>
              <div className="m- auto p-2 flex justify-between">
                <div>Estimated Tax</div>
                <div> &#8377; {taxMoney.toFixed(2)}</div>
              </div>
              <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
              <div className="m- auto p-2 flex justify-between">
                {" "}
                <div>Total Amount</div>
                <div> &#8377; {ItemTotal + shippingCost + taxMoney}</div>
              </div>
            </div>
          </div>
          <button className=" bg-black text-white w-1/2 m-auto ">
            Checkout
          </button>
        </div>
      </div>
      {/* JUST A SECTION TO CLEAR THE ENTIRE CART */}
      <div className="p-2 m-2">
        <button
          className="bg-green-300 text-Swiggy-orange"
          onClick={handleClear}
        >
          Clear Cart
        </button>
      </div>
    </>
  );
};

export default Cart;
