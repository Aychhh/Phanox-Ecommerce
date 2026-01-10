"use client"
import { useContext } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import StoreContext from '../Context/AuthContext';
import Cart from './Cart';

const Navbar = () => {

  const {showCart, setShowCart, quantities} = useContext(StoreContext)

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">JSM Headphones</Link>
      </p>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{quantities}</span>
      </button>
 
      {showCart && <Cart/>}
    </div>
  )
}

export default Navbar


// git config --global alias.up "!git add . && git commit -m 'update' && git push"

