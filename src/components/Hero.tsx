/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Navbar from "./Navbar";
import hero1 from "/public/images/hero-1.jpeg";
import hero2 from "/public/images/hero-2.jpeg";
import hero3 from "/public/images/hero-3.jpeg";

export default function HeroPage() {
  return (
    <div className="hero">
      <Navbar />
      <section className="hero-container">
        <div className="hero-wrapper">
          <div className="hero-text">
            <span>THE</span> SOFT LIFE COLLECTION
          </div>
          <button>BUY NOW</button>
        </div>
      </section>
      <div className="image-container">
        <Link
          href="/"
          style={{
            backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
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
          linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
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
          linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
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
