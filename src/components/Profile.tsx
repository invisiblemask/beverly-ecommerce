/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <motion.div animate={{ x: 0 }}>
      <div className="profile">
        <h2>User Info</h2>
        <div className="info">
          <div className="info-container">
            <div className="profile-name">
              <img src="/images/profile.jpg" alt="" />
              <div className="name-container">
                <span>Kelechi Okeke</span>
                <span>+2347082896308</span>
              </div>
            </div>
            <div className="info-order">
              <span>10</span> Orders
            </div>
            <div className="info-order">
              <span>4</span> Awaiting Payment
            </div>
            <div className="info-order">
              <span>2</span> Awaiting Shipment
            </div>
            <div className="info-order">
              <span>1</span> Awaiting Delivery
            </div>
          </div>
          <div className="info-details">
            <div className="details">
              First Name <span>Kelechi</span>
            </div>
            <div className="details">
              Last Name <span>Okeke</span>
            </div>
            <div className="details">
              Email Address <span>okekekelechi96@gmail.com</span>
            </div>
            <div className="details">
              Phone Number <span>+2347082896308</span>
            </div>
            <div className="details">
              Birth Date <span>13th November, 1996</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
