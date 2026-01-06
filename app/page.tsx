import React from 'react'
import './globals.css'
import { Product,Cart,Footer,FooterBanner,HeroBanner,Layout,Navbar } from './Components'

const page = () => {
  return (
    <div>
    HeroBanner

    <div className="products-heading">
      <h2>Best Selling Headphones</h2>
      <p>Speakers of many variations</p>
    </div>

    <div>
      {['product1', 'product2'].map((item) => item)}
    </div>

    Footer
    </div>
  )
}

export default page
