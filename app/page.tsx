import './globals.css'
import { Product,Cart,Footer,FooterBanner,HeroBanner,Layout,Navbar } from './Components'
import { client } from '@/lib/client'

const page = async ()  => {

  const product = await client.fetch('*[_type == "product"]')
  const bannerData = await client.fetch('*[_type == "banner"]')

  return (
    <div>
   <HeroBanner bannerData={bannerData.length && bannerData[0]}/>

    <div className="products-heading">
      <h2>Best Selling Headphones</h2>
      <p>Speakers of many variations</p>
    </div>

    <div>
      {product?.map((item : any) => item)}
    </div>

    Footer
    </div>
  )
}


export default page
