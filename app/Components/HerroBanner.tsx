import Link from "next/link";
import { urlFor } from "@/lib/client";

interface bannerData {
  smallText: string;
  midText: string;
  largeText1: string;
  image: unknown[];
  buttonText: string;
  desc: string;
  product: string;
}

interface BannerDataProps {
  bannerData: bannerData;
}

const HerroBanner = ({ bannerData }: BannerDataProps) => {
  const { smallText, midText, largeText1, image, product, buttonText, desc } =
    bannerData;
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{smallText}</p>
        <h3 className="font-semibold">{midText}</h3>
        <h1>{largeText1}</h1>
        <img
          src={urlFor(image).url()}
          alt="headphones"
          className="hero-banner-image"
        />

        <div>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>

          <div className="desc">
            <h5>Description</h5>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HerroBanner;
