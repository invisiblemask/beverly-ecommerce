/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

type SidebarProps = {
  children: React.ReactNode;
};

const sidebarVariants = {
  open: { x: 0 },
  closed: { x: "-100%" },
};

export default function Sidebar({ children }: SidebarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-top" onClick={toggleSidebar}>
        <img src="/icons/left-arrow.png" alt="" />
        Menu
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
        <div className="items-container" onClick={toggleSidebar}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
