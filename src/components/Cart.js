import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import { clearCart, addItem, removeItem } from "../utils/cartSlice";
import { IMG_CDN } from "../Config";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const [totalPrice, settotalPrice] = useState(0);

  const pricecalculator = (ordid) => {
    settotalPrice(totalPrice + ordid.price / 100);
  };
  return (
    <>
      <div className="flex justify-between">
        <div>
          {cart.map((order) => {
            return (
              <div>
                <div key={order.card.info.id}>
                  <div className="flex">
                    <div>
                      <img
                        key="Item-image"
                        src={`${IMG_CDN}${order?.card?.info?.imageId}`}
                        alt="Dish"
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
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <h1>Total price is:</h1>
          <div>{totalPrice}</div>
        </div>
      </div>

      <div>
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
