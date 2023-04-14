/* eslint-disable @next/next/no-img-element */
import { animated, useSpring } from "@react-spring/web";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import Modal from "./Modal";

const links = [
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
  {
    name: "CONTACT",
    href: "/contact",
  },
];

export default function Navbar() {
  const router = useRouter();
  const path = router.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setStickyNav(true);
      } else {
        setStickyNav(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const sidebarAnimation = useSpring({
    transform: isOpen ? "translateX(0%)" : "translateX(-100%)",
  });

  const handleCartClick: () => void = () => {
    if (path === "/cart") {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };

  const redirect = () => {
    if (!user) {
      router.push("/authentication");
    } else {
      router.push("/account");
    }
  };

  return (
    <nav className={stickyNav ? "active" : ""}>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className="hamburger-one" />
        <div className="hamburger-two" />
        <div className="hamburger-three" />
      </div>
      <Link href="/">
        <img src="/images/benaya-banner-2.png" alt="" />
      </Link>
      <div className="links">
        {links.map((link, index) => {
          return (
            <Link key={index} href={link.href}>
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="nav-icons">
        <div onClick={redirect} className="cart-container">
          <CiUser className="nav-icon" />
        </div>
        <div className="cart-container" onClick={handleCartClick}>
          <CiShoppingCart className="nav-icon" />
          <div>2</div>
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
      {showModal && <Modal toggleModal={toggleModal} />}
    </nav>
  );
}
