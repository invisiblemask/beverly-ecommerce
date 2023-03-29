import React, { useState } from "react";

export default function Accordion() {
  const [isCard, setIsCard] = useState(false);
  const [isPayPal, setIsPayPal] = useState(false);

  const toggleCard = () => {
    if (isPayPal) {
      setIsPayPal(false);
    }
    setIsCard(!isCard);
  };

  const togglePayPal = () => {
    if (isCard) {
      setIsCard(false);
    }
    setIsPayPal(!isPayPal);
  };

  return (
    <div className="accordion">
      <div className="accordion-container">
        <div
          className={isCard ? "accordion-header underline" : "accordion-header"}
          onClick={toggleCard}
        >
          Credit/Debit Card
        </div>
        {isCard && (
          <div className="accordion-body">
            <form className="card-form">
              <label className="input-form" htmlFor="Card Name">
                <div className="name-contai">
                  Name on Card <span>*</span>
                </div>
                <input type="text" />
              </label>
              <label className="input-form" htmlFor="Card Number">
                <div className="name-container">
                  Card Number <span>*</span>
                </div>
                <input type="text" />
              </label>
              <div className="info-card">
                <label className="input-form" htmlFor="First Name">
                  <div className="name-container">
                    Expiry Date <span>*</span>
                  </div>
                  <input type="text" className="info-input" />
                </label>
                <label className="input-form" htmlFor="Last Name">
                  <div className="name-container">
                    CVC/CVV <span>*</span>
                  </div>
                  <input type="text" className="info-input" />
                </label>
              </div>
            </form>
          </div>
        )}
      </div>
      <div className="accordion-container">
        <div
          className={isPayPal ? "accordion-header outline" : "accordion-header"}
          onClick={togglePayPal}
        >
          <div>PayPal</div>
        </div>
      </div>
    </div>
  );
}
