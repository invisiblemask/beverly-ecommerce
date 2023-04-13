/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import { BsEye } from "react-icons/bs";
import { products } from "./data";
import ProductModal from "./ProductModal";

export default function ShopList() {
  const [showModal, setShowModal] = useState(false);

  const clickProduct: () => void = () => {
    setShowModal(true);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="shoplist-container">
      <div className="shoplist">
        {products.map((product, index) => {
          return (
            <div
              key={index}
              className="shoplist-wrapper"
              onClick={clickProduct}
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
            </div>
          );
        })}
      </div>
      {showModal && <ProductModal toggleModal={toggleModal} />}
    </div>
  );
}
