/* eslint-disable @next/next/no-img-element */
export default function SLCollection() {
  return (
    <div className="collection">
      <div className="collection-container">
        <div className="card-wrapper">
          <img src="/images/img1.jpeg" alt="" />
          <span className="card-name">The Zanzibar Dress</span>
          <span className="card-price">₦27,350</span>
        </div>
        <div className="card-wrapper">
          <img src="/images/img2.jpeg" alt="" />
          <span className="card-name">The mandisa bustier</span>
          <span className="card-price">₦29,950</span>
        </div>
        <div className="card-wrapper">
          <img src="/images/img3.jpeg" alt="" />
          <span className="card-name">The Rio Set</span>
          <span className="card-price">₦35,150</span>
        </div>
        <div className="card-wrapper">
          <img src="/images/img4.jpeg" alt="" />
          <span className="card-name">The Santorini Dress</span>
          <span className="card-price">₦35,850</span>
        </div>
      </div>
      <div className="collection-wrapper">
        <div className="collection-header">
          <span>THE</span>
          SOFT LIFE COLLECTION
        </div>
        <div className="img-collection">
          <img src="/images/col1.jpg" alt="" />
          <img src="/images/col2.jpg" alt="" />
          <img src="/images/col3.jpg" alt="" />
          <img src="/images/col4.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
