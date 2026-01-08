import React from "react";
import { client } from "@/lib/client";
import ProductDetail from "@/app/Components/ProductDetail";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const ProductDetails = async ({ params }: PageProps) => {
  const { slug } = await params;

  const product = await client.fetch(
    `*[_type == "Product" && slug.current == '${slug}'][0]`
  );
  const products = await client.fetch('*[_type == "Product"]');

  return (
   
      <ProductDetail product={product} products={products} />
  
  );
};

export default ProductDetails;
