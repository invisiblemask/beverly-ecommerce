/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { products } from "./data";

export default function ShopList() {
  return (
    <div className="shoplist-container">
      {products.map((product, index) => {
        return (
          <Link
            href={`/product/${product.id}`}
            key={index}
            className="shoplist-wrapper"
          >
            <img src={product.image.src} alt="" />
            <span className="shoplist-name">{product.name}</span>
            <span className="shoplist-price">{product.price}</span>
          </Link>
        );
      })}
    </div>
  );
}
