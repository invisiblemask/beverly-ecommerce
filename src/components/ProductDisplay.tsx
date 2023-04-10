/* eslint-disable @next/next/no-img-element */
export default function ProductDisplay() {
  return (
    <div className="product-display">
      <div className="display-top">
        <img
          className="display-img-lg"
          src="/images/products/lg-image.2jpg.avif"
          alt=""
        />
        <div className="display-wrapper">
          <div className="display-header">
            <span>THE</span>
            IMANI SET & CABO SET
          </div>
          <div className="side-display">
            <div className="side-display-card">
              <img src="/images/products/product-8.jpg.webp" alt="" />
              <span className="display-card-name">The Print Monroe Dress</span>
              <span className="display-card-price">₦37,500</span>
            </div>
            <div className="side-display-card">
              <img src="/images/products/product-6.jpg.webp" alt="" />
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
              <img src="/images/products/product-10.jpg.webp" alt="" />
              <span className="display-card-name">The Imani set</span>
              <span className="display-card-price">₦44,950</span>
            </div>
            <div className="side-display-card">
              <img src="/images/products/product-12.jpg.webp" alt="" />
              <span className="display-card-name">The cabo set</span>
              <span className="display-card-price">₦41,050</span>
            </div>
          </div>
        </div>
        <img
          className="display-img-lg"
          src="/images/products/lg-image.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
