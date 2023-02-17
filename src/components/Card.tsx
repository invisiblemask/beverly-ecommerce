/* eslint-disable @next/next/no-img-element */
import { products } from "./data";

export default function Card() {
  return (
    <div className="card-container">
      {products.map((product, index) => {
        return (
          <div key={index} className="card-wrapper">
            <img src={product.image.src} alt="" />
            <span className="card-name">{product.name}</span>
            <span className="card-price">{product.price}</span>
          </div>
        );
      })}
    </div>
  );
}
