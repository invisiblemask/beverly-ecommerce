/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { HiLink, HiOutlineShoppingCart } from "react-icons/hi";
import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const links1 = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "SHOP",
    href: "/shop",
  },
  {
    name: "ABOUT",
    href: "/about",
  },
];

const links2 = [
  {
    name: "ACCOUNT",
    href: "/Account",
  },
  {
    name: "CONTACT",
    href: "/Contact",
  },
];

export default function Navbar() {
  const router = useRouter();
  const path = router.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const sidebarAnimation = useSpring({
    transform: isOpen ? "translateX(0%)" : "translateX(-100%)",
  });

  return (
    <nav>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className="hamburger-one"></div>
        <div className="hamburger-two"></div>
        <div className="hamburger-three"></div>
      </div>
      <div className="middle-left">
        {links1.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.href}
              className={path === "/" ? "link-home" : "link-other"}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <Link href="/">
        <img
          src={
            path === "/"
              ? "/images/benaya-white-small.png"
              : "/images/benaya-banner.png"
          }
          alt=""
        />
      </Link>
      <div className="middle-right">
        <div className="right">
          {links2.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                className={path === "/" ? "link-home" : "link-other"}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="cart-container">
          <Link href="/cart">
            <HiOutlineShoppingCart
              className={path === "/" ? "cart-icon" : "cart-icon link-home"}
            />
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
