"use client"
import React, { useContext, useState } from 'react'
import { urlFor } from '@/lib/client';
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai';
import Product from './Product';
import StoreContext from '../Context/AuthContext';

const ProductDetail = ({product, products} : any) => {
    const [index, setIndex] = useState(0);
      const {image, name, details, price} = product

      const {incQty, decQty, qty, onAdd} = useContext(StoreContext)

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index]).url()} className="product-detail-image" />
          </div>
          <div className="small-images-container">
            {image?.map((item : any, i :any) => (
              <img 
                key={i}
                src={urlFor(item).url()}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1 className='text-bold text-3xl '>{name}</h1>
          <div className="reviews">
            <div className="flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus"><AiOutlineMinus onClick={() => decQty()}/></span>
              <span className="num">{qty}</span>
              <span className="plus"><AiOutlinePlus onClick={() => incQty()}/></span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>
            <button type="button" className="buy-now" >Buy Now</button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item : any) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div>
      </div>

  )
}

export default ProductDetail
