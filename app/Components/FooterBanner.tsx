import footerImg from '../assets/head.webp'
import Link from "next/link";

const FooterBanner = ({
  footerBanner: {
    discount,
    buttonText,
    product,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
  },
}: any) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>FINE</h3>
          <h3>SMILE</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>Beats Solo Air</p>
          <h3>Summer Sale</h3>
          <p>company that's grown from 200 to 480 employes in last 12 months</p>
          <Link href={`/product/${product}`}>
            <button>{buttonText}</button>
          </Link>
        </div>

        <img src={footerImg.src} alt="" className="footer-banner-image" width={520} height={520}/>
      </div>
    </div>
  );
};

export default FooterBanner;
