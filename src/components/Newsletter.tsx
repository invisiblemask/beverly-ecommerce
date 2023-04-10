import { CiMail } from "react-icons/ci";

export default function Newsletter() {
  return (
    <div className="newsletter">
      <div className="newsletter-lg">
        Subscribe to our newsletter to get updates <br /> to our latest
        collections
      </div>
      <div className="newsletter-sm">
        Get 20% off on your first order just by subscribing to our newsletter
      </div>
      <div className="newsletter-input-container">
        <div className="newsletter-input">
          <CiMail className="newsletter-icon" />
          <input type="email" placeholder="Enter your email" />
        </div>
        <button>Subscribe</button>
      </div>
    </div>
  );
}
