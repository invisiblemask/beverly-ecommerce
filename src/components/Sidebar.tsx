/* eslint-disable @next/next/no-img-element */
import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Layout.module.scss";
import Link from "next/link";

type SidebarProps = {
  children: React.ReactNode;
  toggle: string;
};

const sidebarVariants = {
  open: { x: 0 },
  closed: { x: "-100%" },
};

export default function Sidebar({ children, toggle }: SidebarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="sidebar-container" onClick={() => setIsSidebarOpen(false)}>
      <div className="sidebar-top">
        <img src="/icons/hamburger.png" onClick={toggleSidebar} alt="" />
        <Link href="/" className="sidebar-logo">
          <img src="/icons/home.png" alt="" />
        </Link>
      </div>
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
        <div className="items-container">{children}</div>
      </motion.div>
    </div>
  );
}
