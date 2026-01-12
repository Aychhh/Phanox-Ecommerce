import { FooterBanner } from "./Components";
import HerroBanner from "./Components/HerroBanner";
import Product from "./Components/Product";
import { client } from "@/lib/client";

interface product {
  name: string;
  details: string;
  price: number;
  image: any[];
  _id: string;
  quantity: number;
  slug: any;
}

const page = async () => {

  // FETCH PRODUCT & BANNERDATA
  const product = await client.fetch('*[_type == "Product"]');
  const bannerData = await client.fetch('*[_type == "banner"]');

  return (
    <div>
      <HerroBanner bannerData={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2>Best Selling Headphones</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {product.map((product: product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={bannerData.length && bannerData[0]} />
    </div>
  );
};

export default page;
