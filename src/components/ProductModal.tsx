/* eslint-disable @next/next/no-img-element */
import { IoCloseOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";

import { useState } from "react";
import Link from "next/link";

const images = [
  "/images/products/product-detail-01.jpg.webp",
  "/images/products/product-detail-02.jpg.webp",
  "/images/products/product-detail-03.jpg.webp",
];

type ModalProps = {
  toggleModal: () => void;
};

export default function ProductModal({ toggleModal }: ModalProps) {
  const [index, setIndex] = useState(0);
  const [ind, setInd] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [sizes, setSizes] = useState(["XS", "S", "M", "L", "XL", "XXL", "3XL"]);
  const [selectedSize, setSelectedSize] = useState("");

  const handleIncrease = () => {
    setIncrement(increment + 1);
  };

  const handleDecrease = () => {
    if (increment <= 1) {
      setIncrement(increment);
    } else {
      setIncrement(increment - 1);
    }
  };

  const price = 69.0;

  return (
    <div className="product-modal-container">
      <div className="product-modal-content">
        <div className="product-image">
          <div className="small-image-container">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt=""
                className={
                  index === index ? "small-img selected-img" : "small-img"
                }
                onClick={() => setIndex(index)}
              />
            ))}
          </div>
          <div className="main-image">
            <img src={images && images[index]} alt="" />
          </div>
        </div>
        <div className="products-detail">
          <div className="products-detail-name">Lightweight Jacket</div>
          <div className="products-detail-price">£69.00</div>
          <div className="products-detail-color">Blue</div>
          <div className="products-detail-desc">
            Lorem ipsum dolor, uga est iure doloremque deserunt nobis voluptatem
            vero ut inventore illum quam accusamus laborum, iusto reiciendis
            voluptates saepe. Saepe ipsam, odit maiores sit iure libero
            distinctio?
          </div>
          <div className="stock">
            <span>In Stock:</span>
            <span>5</span>
          </div>
          <div className="product-size">
            <div className="size-label">Sizes</div>
            <div className="sizes-container">
              {sizes.map((size, index) => (
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setInd(index + 1);
                    setSelectedSize(size);
                    console.log(selectedSize);
                  }}
                  className={`${ind === index + 1 ? "selected" : ""}`}
                  key={index}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div className="order">
            <div className="qty">
              <div className="qty-label">QTY</div>
              <div className="qty-btn">
                <div onClick={handleDecrease} className="minus">
                  -
                </div>
                <div className="num">{increment}</div>
                <div onClick={handleIncrease} className="plus">
                  +
                </div>
              </div>
            </div>
            <div className="total-price">
              Total Price:
              <span>£{(price * increment).toLocaleString()}</span>
            </div>
            <div className="order-btns">
              <Link href="/checkout">
                <button className="order-color">Buy Now</button>
              </Link>
              <button className="order-plane">
                <CiShoppingCart className="order-cart" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="product-modal-close" onClick={toggleModal}>
          <IoCloseOutline className="product-modal-icon" />
        </div>
      </div>
    </div>
  );
}
