"use Client";
import React, { useContext } from "react";
import StoreContext from "../Context/AuthContext";
import {
  AiOutlineLeft,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
} from "react-icons/ai";
import Link from "next/link";
import { urlFor } from "@/lib/client";
import { TiDeleteOutline } from "react-icons/ti";

const Cart = () => {
  const {
    totalPrice,
    quantities,
    setShowCart,
    cartItems,
    incQty,
    decQty,
    qty,
  } = useContext(StoreContext);
  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({quantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart flex flex-col items-center ">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                className="btn"
                onClick={() => setShowCart(false)}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item: any, index: number) => (
              <div className="product" key={index}>
                <img
                  src={urlFor(item.image[0]).url()}
                  alt=""
                  className="cart-product-image"
                />
                <div className="item-desc">

                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>${item.price}</h4>
                  </div>

                  <div className="flex bottom">

                    <div >
                      <p className="quantity-desc">
                        <span className="minus">
                          <AiOutlineMinus  />
                        </span>
                        <span className="num">0</span>
                        <span className="plus">
                          <AiOutlinePlus  />
                        </span>
                      </p>
                    </div>

                    <button type="button" className="remove-item">
                      <TiDeleteOutline/>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn">Pay with stripe</button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Cart;
