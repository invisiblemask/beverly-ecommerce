/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BsEye } from "react-icons/bs";
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
            <div className="shoplist-img">
              <img src={product.image.src} alt="" />
              <div className="overlay">
                <BsEye className="animated-icon" />
              </div>
            </div>
            <span className="shoplist-name">{product.name}</span>
            <span className="shoplist-price">{product.price}</span>
            {product.isNew && <div className="new">New</div>}
            {product.slashedPrice !== null && (
              <div className="discount">Discount</div>
            )}
          </Link>
        );
      })}
    </div>
  );
}
