import { useState } from "react";
import SortAccordion from "./SortAccordion";

export default function Sort() {
  const [sizes, setSizes] = useState([
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "3XL",
    "4XL",
  ]);
  return (
    <div className="sort">
      <SortAccordion className="category" title="CATEGORIES">
        <div className="categories">
          <div>Bags (20)</div>
          <div>Clothing (20)</div>
          <div>Shoes (20)</div>
          <div>Accessories (20)</div>
          <div>Kids (20)</div>
        </div>
      </SortAccordion>
      <SortAccordion className="category" title="BRANDING">
        <div className="categories">
          <div>Louis Vuitton</div>
          <div>Chanel</div>
          <div>Hermes</div>
          <div>Gucci</div>
        </div>
      </SortAccordion>
      <SortAccordion className="category" title="FILTER PRICE">
        <div className="categories">
          <div>£0.00 - £50.00</div>
          <div>£50.00 - £100.00</div>
          <div>£100.00 - £150.00</div>
          <div>£150.00 - £200.00</div>
          <div>£200.00 - £250.00</div>
          <div>£250.00 +</div>
        </div>
      </SortAccordion>
      <SortAccordion className="category" title="SIZE">
        <div className="sizes-container">
          {sizes.map((size, index) => (
            <div key={index}>{size}</div>
          ))}
        </div>
      </SortAccordion>
      <SortAccordion className="category" title="COLORS">
        <div className="color-container">
          <div className="color-wrapper">
            <div className="red"></div>
          </div>
          <div className="color-wrapper">
            <div className="brown"></div>
          </div>
          <div className="color-wrapper">
            <div className="blue"></div>
          </div>
          <div className="color-wrapper">
            <div className="orange"></div>
          </div>
          <div className="color-wrapper">
            <div className="green"></div>
          </div>
          <div className="color-wrapper">
            <div className="black"></div>
          </div>
          <div className="color-wrapper">
            <div className="pink"></div>
          </div>
          <div className="color-wrapper">
            <div className="carton"></div>
          </div>
          <div className="color-wrapper">
            <div className="white"></div>
          </div>
        </div>
      </SortAccordion>
      <SortAccordion className="category" title="TAGS">
        <div className="tags">
          <div>Product</div>
          <div>Bags</div>
          <div>Shoes</div>
          <div>Fashion</div>
          <div>Clothing</div>
          <div>Hats</div>
          <div>Accessories</div>
        </div>
      </SortAccordion>
    </div>
  );
}
