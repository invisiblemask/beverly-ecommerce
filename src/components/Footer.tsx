/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer>
      <div className="footer">
        <div className="footer-left">
          <img src="/images/benaya-banner-2.png" alt="" />
          <span className="footer-about">
            Our mission is to bring empowerment to every customer through
            <br />
            inspiring brand choices and premium yet effortless fashion.
          </span>
          <span className="footer-contact">hello@benayaofficial.com</span>
        </div>
        <div className="footer-right">
          <div className="links">
            <div className="footer-header">Links</div>
            <li>Home</li>
            <li>Store</li>
            <li>Account</li>
          </div>
          <div className="links">
            <div className="footer-header">Categories</div>
            <li>Alika</li>
            <li>Nekesa</li>
            <li>Imani</li>
          </div>
          <div className="links">
            <div className="footer-header">Support</div>
            <li>FAQs</li>
            <li>Cookie Policy</li>
            <li>Terms of Use</li>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        Copyright ©{date}{" "}
        <a
          href="https://github.com/invisiblemask"
          target="_blank"
          rel="noreferrer"
        >
          invisiblemask.
        </a>{" "}
        All Rights Reserved
      </div>
    </footer>
  );
}
