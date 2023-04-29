import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import store from '../utils/store';
import {clearCart, addItem, removeItem} from '../utils/cartSlice';
import { IMG_CDN } from '../Config';

const Cart = () => {

    const cart = useSelector(store => store.cart.items);

    const dispatch = useDispatch();

    const handleClear = () =>{
        dispatch(clearCart());
    }
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }
    const handleRemoveItem = (item) => {
        dispatch(removeItem(item))
    }


  return (
    <div>
      <button onClick={handleClear} className='p-2 m-2 bg-black text-white hover:bg-Swiggy-orange hover:text-black '>
        Clear Cart
        </button>
        {cart.map((order) => {
            return (
              <div key={order.card.info.id} className='flex'>
                <div>
                  <div className='font-light text-sm text-Item-description p-2 m-2'>
                    {order?.card?.info?.name}
                  </div>
                  <div className='font-light text-sm text-Item-description p-2 m-2'>
                    &#8377;{(order?.card?.info?.price)/100}
                  </div>
                  <div className='font-light text-sm text-Item-description p-2 m-2'>
                    {order?.card?.info?.description}
                  </div>
                </div>
                <div>
                <img src ={`${IMG_CDN}${order?.card?.info?.imageId}`}  alt="Dish" className='w-20 h-20' />
                </div>
                <button onClick={handleAddItem(order)}>+</button>
                <button onClick={handleRemoveItem(order)}>-</button>
              <hr />
              </div>
            )
        })}
    </div>
  )
}

export default Cart;