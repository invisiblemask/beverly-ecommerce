/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layout";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Cart() {
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

  const price = 69.0;

  return (
    <Layout title="Cart | Offical E-commerce Fashion Store by Beverly Naya">
      <div className="cart">
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="cart-img">
                    <img src="/images/products/product-1.jpg.webp" alt="" />
                    <div className="overlay">
                      <RiDeleteBinLine className="animated-icon" />
                    </div>
                  </div>
                  <div className="cart-name">KIKO LINEN SLIP DRESS, BROWN</div>
                </td>
                <td>£69.0</td>
                <td>
                  <div className="cart-btn">
                    <div onClick={handleDecrease} className="minus">
                      -
                    </div>
                    <div className="num">{increment}</div>
                    <div onClick={handleIncrease} className="plus">
                      +
                    </div>
                  </div>
                </td>
                <td>
                  <span>£{(price * increment).toLocaleString()}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="cart-right-container">
          <div className="cart-right">
            <div className="cart-total">Cart Total</div>
            <div className="sub-total">
              Sub-total: <span>£234.56</span>
            </div>
            <div className="delivery">
              Delivery: <span>Free</span>
            </div>
            <div className="discount">
              Discount: <span>-15%</span>
            </div>
            <div className="total">
              Total: <span>£199.376</span>
            </div>
            <Link href="/checkout">
              <div className="checkout-btn">Checkout</div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
