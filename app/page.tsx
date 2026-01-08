import { FooterBanner } from './Components'
import HerroBanner from './Components/HerroBanner'
import Product from './Components/Product'


import { client } from '@/lib/client'

const page = async ()  => {

  const product = await client.fetch('*[_type == "Product"]')
  const bannerData = await client.fetch('*[_type == "banner"]')


  return (
    <div>
   <HerroBanner bannerData={bannerData.length && bannerData[0]}/>

    <div className="products-heading">
      <h2>Best Selling Headphones</h2>
      <p>Speakers of many variations</p>
    </div>

    <div className='products-container'>
      {product.map((product : any) => <Product key={product._id} product={product}/>)}
    </div>

      <FooterBanner footerBanner={bannerData.length && bannerData[0]}/>
    </div>
  )
}


export default page
