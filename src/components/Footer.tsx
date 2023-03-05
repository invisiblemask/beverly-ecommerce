/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer>
      <div className="footer">
        <div className="footer-left">
          <img src="/images/benaya-color-blue.png" alt="" />
          <span className="footer-about">
            Be Naya is a labour of love for the classy and fearless woman, our
            mission is to bring empowerment to every customer through inspiring
            brand choices and premium yet effortless fashion. We want you to
            feel good all the time! We want you to Be Everything!
          </span>
          <span className="footer-contact">hello@benayaofficial.com</span>
        </div>
        <div className="footer-right">
          <div className="links">
            <div className="footer-header">Links</div>
            <li>Home</li>
            <li>Store</li>
            <li>Cart</li>
            <li>Account</li>
            <li>Return & Refunds</li>
          </div>
          <div className="links">
            <div className="footer-header">Categories</div>
            <li>Alika</li>
            <li>Nekesa</li>
            <li>Imani</li>
            <li>The Skin Collection</li>
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
