import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';

const Navbar = () => {

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">JSM Headphones</Link>
      </p>

      <button type="button" className="cart-icon" >
        <AiOutlineShopping />
        <span className="cart-item-qty">1</span>
      </button>
{/* 
      {showCart && <Cart />} */}
    </div>
  )
}

export default Navbar


// git config --global alias.up "!git add . && git commit -m 'update' && git push"

