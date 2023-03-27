/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";

const images = [
  "/images/products/product1.jpeg",
  "/images/products/product2.jpeg",
  "/images/products/product3.jpeg",
  "/images/products/product4.jpeg",
  "/images/products/product5.jpeg",
  "/images/products/product6.jpeg",
  "/images/products/product7.jpeg",
  "/images/products/product8.jpeg",
];

export default function Product() {
  const [index, setIndex] = useState(0);
  const [increment, setIncrement] = useState(1);

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

  const price = 180;

  return (
    <div>
      <Head>
        <title>Offical E-commerce Fashion Store by Beverly Naya </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <section className="product">
        <div className="product-image">
          <div className="main-image">
            <img src={images && images[index]} alt="" />
          </div>
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
        </div>
        <div className="product-details">
          <div className="product-name">The Print Monroe Dress</div>
          <div className="product-price">$80.60</div>
          <div className="product-color">
            <span>Colour:</span> Chocolate Brown
          </div>
          <div className="product-summary">
            Lorem ipsum dolor, uga est iure doloremque deserunt nobis voluptatem
            vero ut inventore illum quam accusamus laborum, iusto reiciendis
            voluptates saepe. Saepe ipsam, odit maiores sit iure libero
            distinctio?
          </div>
          <div className="product-size">
            <label htmlFor="">Sizes</label>
            <select name="" id="">
              <option value="Choose">Choose an option</option>
              <option value="M">Medium (M): (UK) 12 | (US) 8</option>
              <option value="S">Small (S): (UK) 8-10 | (US) 4-6</option>
              <option value="L">Large (L): (UK) 14 | (US) 10</option>
            </select>
          </div>
          <div className="product-description"></div>
        </div>
        <div className="product-catalog">
          <div className="off">
            <div className="off-details">
              <span className="off-percent">25% OFF</span>
              <span className="off-range">If order more $120</span>
            </div>
            <div className="off-btn">Until Oct 12, 2023</div>
          </div>
          <div className="order">
            <div className="order-item">
              <img
                className="order-img"
                src="/images/products/product1.jpeg"
                alt=""
              />
              <div className="selected">
                <span>Selected Size</span>
                <span>Small(S): (UK)8-10 | (US)4-6</span>
              </div>
            </div>
            <div className="qty">
              <div className="qty-btn">
                <div onClick={handleDecrease} className="minus">
                  -
                </div>
                <div className="num">{increment}</div>
                <div onClick={handleIncrease} className="plus">
                  +
                </div>
              </div>
              <div className="stock">
                <span>Stock:</span>
                <span>435</span>
              </div>
            </div>
            <div className="total-price">
              Total Price:
              <span>${(price * increment).toLocaleString() + ".00"}</span>
            </div>
            <div className="order-btns">
              <button className="order-color">Buy Now</button>
              <button className="order-plane">
                <HiOutlineShoppingCart className="order-cart" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
