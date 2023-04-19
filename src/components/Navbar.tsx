/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import Modal from "./Modal";

type SidebarProps = {
  children: React.ReactNode;
};

const sidebarVariants = {
  open: { x: 0 },
  closed: { x: "-100%" },
};

const links = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "NEW",
    href: "/new",
  },
  {
    name: "BRANDS",
    href: "/brands",
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

export default function Navbar() {
  const router = useRouter();
  const path = router.pathname;
  const [showModal, setShowModal] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);
  const [user, setUser] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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

  const handleCartClick: () => void = () => {
    if (path === "/cart") {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };

  const redirect = () => {
    if (!user) {
      router.push("/login");
    } else {
      router.push("/account");
    }
  };

  return (
    <nav className={stickyNav ? "active" : ""}>
      <div className="sidebar-container">
        <img
          src="/icons/hamburger.png"
          alt=""
          onClick={toggleSidebar}
          className="sidebar-icon"
        />
        <div className="sidebar-top"></div>
        <motion.div
          className={"sidebar"}
          variants={sidebarVariants}
          animate={isSidebarOpen ? "open" : "closed"}
        >
          <img
            src="/icons/close.png"
            alt=""
            onClick={toggleSidebar}
            className="close"
          />
          <div className="sidebar-navbar" onClick={toggleSidebar}>
            <img
              src="/images/benaya-banner-2.png"
              className="sidebar-img"
              alt=""
            />
            <Link href="/">HOME</Link>
            <Link href="/shop">SHOP</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/cart">CART</Link>
            <Link href="/account">ACCOUNT</Link>

            <div className="sidebar-auth">
              <Link href="/login" className="login">
                Login
              </Link>
              <Link href="authentication" className="register">
                Register
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <Link href="/">
        <img src="/images/benaya-banner-2.png" alt="" />
      </Link>
      <div className="links">
        {links.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.href}
              className={`${path === link.href ? "active-link" : ""}`}
            >
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
          <img src="/icons/trolley.png" alt="" className="nav-icon" />
          <div>2</div>
        </div>
      </div>
      {showModal && <Modal toggleModal={toggleModal} />}
    </nav>
  );
}
