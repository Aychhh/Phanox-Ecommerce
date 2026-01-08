import Link from 'next/link'
import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className="logo">
       <Link href="/">Phanox Headphones</Link> 
      </p>

      <button className='cart-icon'>
        <AiOutlineShopping/>
        <span className='absolute -right-2 text-[12px] text-[#eee] rounded-[50%] w-4.5 h-4.5 text-center bg-[#f02d34]'>1</span>
      </button>
    </div>
  )
}

export default Navbar


// git config --global alias.up "!git add . && git commit -m 'update' && git push"

