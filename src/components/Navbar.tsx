/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { HiLink, HiOutlineShoppingCart } from "react-icons/hi";
import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const [active, setActive] = useState(false);
  // const [animate, setAnimate] = useState(true);

  const sidebarAnimation = useSpring({
    transform: isOpen ? "translateX(0%)" : "translateX(-100%)",
  });

  // const isActive = () => {
  //   window.scrollY > 0 ? setActive(true) : setActive(false);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", isActive);
  //   return () => {
  //     window.removeEventListener("scroll", isActive);
  //   };
  // }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setAnimate(false);
  //   }, 1000);
  // }, []);

  return (
    <nav>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className="hamburger-one"></div>
        <div className="hamburger-two"></div>
        <div className="hamburger-three"></div>
      </div>
      <div className="middle-left">
        <Link href="/">HOME</Link>
        <Link href="/shop">SHOP</Link>
        <Link href="/about">ABOUT</Link>
      </div>
      <Link href="/">
        <img src="/images/benaya-white-small.png" alt="" />
      </Link>
      <div className="middle-right">
        <div className="right">
          <Link href="/cart">CART</Link>
          <Link href="/account">ACCOUNT</Link>
          <Link href="/contact">CONTACT</Link>
        </div>
        <div className="cart-container">
          <Link href="/cart">
            <HiOutlineShoppingCart className="cart-icon" />
            <div>0</div>
          </Link>
        </div>
      </div>
      {isOpen && (
        <animated.div
          style={sidebarAnimation}
          className="sidebar"
          onClick={() => setIsOpen(false)}
        >
          <div>
            <img src="/images/benaya-banner.png" alt="" />
          </div>
          <Link href="/">HOME</Link>
          <Link href="/shop">SHOP</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/cart">CART</Link>
          <Link href="/account">ACCOUNT</Link>
          <Link href="/contact">CONTACT</Link>

          <div className="close" onClick={() => setIsOpen(false)}></div>
        </animated.div>
      )}
    </nav>
  );
}
