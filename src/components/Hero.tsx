/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import hero1 from "/public/images/products/product-8.jpg.webp";
import hero2 from "/public/images/products/product-9.jpg.webp";
import hero3 from "/public/images/products/product-10.jpg.webp";

export default function HeroPage() {
  return (
    <div className="hero">
      <section className="hero-container">
        <div className="hero-wrapper">
          <div className="hero-text-wrapper">
            <div className="hero-text">
              <span>#NEW SUMMER COLLECTION 2023</span> ARRIVALS <br /> SALES
            </div>
            <button>SHOP NOW</button>
          </div>
          <div className="hero-lg-img">
            <img src="/images/products/model_3.png" alt="" />
          </div>
          <div className="hero-image">
            <img src="/images/benaya-white-small.png" alt="" />
          </div>
        </div>
      </section>
      <div className="image-container">
        <Link
          href="/"
          style={{
            backgroundImage: `
          linear-gradient(rgba(116, 116, 116, 0.2), rgba(116, 114, 114, 0.2)),
          url(${hero1.src})`,
          }}
          className="image-link"
        >
          <div>
            <span>The</span>
            RIO SET
          </div>
        </Link>
        <Link
          href="/"
          className="image-link"
          style={{
            backgroundImage: `
          linear-gradient(rgba(116, 116, 116, 0.2), rgba(116, 114, 114, 0.2)),
          url(${hero2.src})`,
          }}
        >
          <div>
            <span>The</span>
            SANTORINI DRESS
          </div>
        </Link>
        <Link
          href="/"
          className="image-link"
          style={{
            backgroundImage: `
          linear-gradient(rgba(116, 116, 116, 0.2), rgba(116, 114, 114, 0.2)),
          url(${hero3.src})`,
          }}
        >
          <div>
            <span>The</span>
            MONTEGO SET
          </div>
        </Link>
      </div>
    </div>
  );
}
