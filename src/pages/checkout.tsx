import Accordion from "@/components/Accordion";
import Layout from "@/components/layout";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Checkout() {
  return (
    <Layout title="Checkout Page | Offical E-commerce Fashion Store by Beverly Naya">
      <div className="header">Checkout Page</div>
      <div className="checkout">
        <div className="checkout-container">
          <div className="billing">Billing Address</div>
          <form action="">
            <div className="info">
              <label className="input-container" htmlFor="First Name">
                FIRST NAME <span>*</span>
                <input type="text" className="info-input" />
              </label>
              <label className="input-container" htmlFor="Last Name">
                LAST NAME <span>*</span>
                <input type="text" className="info-input" />
              </label>
            </div>
            <label className="input-container" htmlFor="Country">
              Country <span>*</span>
              <input type="text" />
            </label>
            <label className="input-container" htmlFor="Address">
              Address <span>*</span>
              <input type="text" />
            </label>
            <label className="input-container" htmlFor="Postcode">
              Postcode <span>*</span>
              <input type="text" />
            </label>
            <label className="input-container" htmlFor="Town/city">
              Town/city <span>*</span>
              <input type="text" />
            </label>
            <label className="input-container" htmlFor="Phone No">
              Phone No <span>*</span>
              <input type="text" />
            </label>
            <label className="input-container" htmlFor="Email Address">
              Email Address <span>*</span>
              <input type="text" />
            </label>
          </form>
        </div>
        <div className="order-info">
          <div className="your-order">Your Order</div>
          <div className="order-container">
            <div className="sub-total">
              Sub-total: <span>$234.56</span>
            </div>
            <div className="delivery">
              Delivery: <span>Free</span>
            </div>
            <div className="discount">
              Discount: <span>-15%</span>
            </div>
            <div className="total">
              Total: <span>$199.376</span>
            </div>
          </div>
          <div className="payment-method">
            <div className="payment-header">Payment Method</div>
            <Accordion />
          </div>
          <div className="checkout-btn">Place Order</div>
        </div>
      </div>
    </Layout>
  );
}
