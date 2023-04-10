/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { products } from "./data";

export default function SLCollection() {
  return (
    <div className="collection">
      <div className="collection-header">Popular Products</div>
      <div className="img-collection">
        {products.map((product, index) => (
          <Link key={index} href={`/product/${product.id}`}>
            <img src={product.image.src} alt="" />
          </Link>
        ))}
      </div>
    </div>
  );
}
