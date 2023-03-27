/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import { useState } from "react";

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

  const price = 80.6;

  return (
    <div>
      <Navbar />
      <div className="cart">
        <table>
          <tr>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
          </tr>
          <tr>
            <td>
              <img src="/images/products/product1.jpeg" alt="" />
              <div className="cart-name">The Print Monroe Dress</div>
            </td>
            <td>$80.60</td>
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
              <span>${(price * increment).toLocaleString()}</span>
            </td>
          </tr>
        </table>
        <div className="cart-right">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
          blanditiis, similique earum nulla voluptate dignissimos suscipit
          minima, repellendus nihil, assumenda odio! Alias, hic maxime minima
          eius illo tenetur deleniti architecto?
        </div>
      </div>
    </div>
  );
}
