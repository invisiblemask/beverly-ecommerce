/* eslint-disable @next/next/no-img-element */
export default function ProductDisplay() {
  return (
    <div className="product-display">
      <div className="display-top">
        <img className="display-img-lg" src="/images/displaylg1.jpg" alt="" />
        <div className="display-wrapper">
          <div className="display-header">
            <span>THE</span>
            IMANI SET & CABO SET
          </div>
          <div className="side-display">
            <div className="side-display-card">
              <img src="/images/product1.jpeg" alt="" />
              <span className="display-card-name">The Print Monroe Dress</span>
              <span className="display-card-price">₦37,500</span>
            </div>
            <div className="side-display-card">
              <img src="/images/product2.jpeg" alt="" />
              <span className="display-card-name">The Bali Shirt Dress</span>
              <span className="display-card-price">₦39,850</span>
            </div>
          </div>
        </div>
      </div>
      <div className="display-bottom">
        <div className="display-wrapper">
          <div className="display-header">
            <span>THE</span>
            MONTEGO SET
          </div>
          <div className="side-display">
            <div className="side-display-card">
              <img src="/images/product3.jpeg" alt="" />
              <span className="display-card-name">The Imani set</span>
              <span className="display-card-price">₦44,950</span>
            </div>
            <div className="side-display-card">
              <img src="/images/product4.jpeg" alt="" />
              <span className="display-card-name">The cabo set</span>
              <span className="display-card-price">₦41,050</span>
            </div>
          </div>
        </div>
        <img className="display-img-lg" src="/images/displaylg2.jpg" alt="" />
      </div>
    </div>
  );
}
