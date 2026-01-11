"use client";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import { useStateContext } from "../Context/AuthContext";
import Cart from "./Cart";

const Navbar = () => {
  const { showCart, setShowCart, quantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Phanox Headphones</Link>
      </p>

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{quantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;

// git config --global alias.up "!git add . && git commit -m 'update' && git push"
