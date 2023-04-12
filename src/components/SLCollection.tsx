/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import { BsEye } from "react-icons/bs";
import { products } from "./data";
import ProductModal from "./ProductModal";

export default function SLCollection() {
  const [showModal, setShowModal] = useState(false);

  const clickProduct: () => void = () => {
    setShowModal(true);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="collection">
      <div className="collection-header">Popular Products</div>
      <div className="img-collection">
        {products.map((product, index) => (
          <div className="img-collection-container" key={index}>
            <img src={product.image.src} alt="" />
            <div className="overlay">
              <BsEye className="animated-icon" onClick={clickProduct} />
            </div>
          </div>
        ))}
      </div>
      {showModal && <ProductModal toggleModal={toggleModal} />}
    </div>
  );
}
