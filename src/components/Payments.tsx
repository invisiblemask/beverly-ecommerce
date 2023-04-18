/* eslint-disable @next/next/no-img-element */
export default function Payment() {
  return (
    <div className="payment">
      <h2>Payment Method</h2>
      <div className="payment-list">
        <div className="card-logo">
          <img src="/icons/visa.png" alt="" />
        </div>
        <div className="card-bearer">Kelechi Okeke</div>
        <div className="card-number">1234 **** **** ****</div>
        <div className="card-date">07/25</div>
        <div className="card-icons">
          <div className="payment-icon">
            <img src="/icons/pencil.png" alt="" />
          </div>
          <div className="payment-icon">
            <img src="/icons/recycle-bin.png" alt="" />
          </div>
        </div>
      </div>
      <div className="payment-list">
        <div className="card-logo">
          <img src="/icons/paypal.png" alt="" />
        </div>
        <div className="card-bearer">Kelechi Okeke</div>
        <div className="card-number">okekekelechi96@gmail.com</div>
        <div className="card-date">N/A</div>
        <div className="card-icons">
          <div className="payment-icon">
            <img src="/icons/pencil.png" alt="" />
          </div>
          <div className="payment-icon">
            <img src="/icons/recycle-bin.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
