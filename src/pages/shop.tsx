import Layout from "@/components/layout";
import LoadingPage from "@/components/LoadingPage";
import ShopList from "@/components/ShopList";
import Sort from "@/components/Sort";
import Head from "next/head";
import { useEffect, useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

export default function Shop() {
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState([
    "Low To High",
    "$0 - $55",
    "$55 - $100",
  ]);

  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleSelect = () => {};

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Some async operation that sets isLoading to false
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <Layout title="Product | Offical E-commerce Fashion Store by Beverly Naya">
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="shop">
          <div className="search-input">
            <input type="text" autoFocus placeholder="Search here..." />
            <HiOutlineMagnifyingGlass className="search-icon" />
          </div>
          <div className="shop-container">
            <Sort />
            <div className="shop-wrapper">
              <div className="sort-range">
                <div className="range-number">Showing 1–12 of 126 results</div>
                <div className="range-price" onClick={handleToggle}>
                  Sort by Price:{" "}
                  <span className="sort-span" onClick={handleDropdown}>
                    <div>{select[2]}</div>
                    {dropdown ? (
                      <MdOutlineKeyboardArrowDown className="dropdown-icon" />
                    ) : (
                      <MdOutlineKeyboardArrowUp className="dropdown-icon" />
                    )}
                    {dropdown && (
                      <div className="price-list" onClick={handleSelect}>
                        {select.map((option, index) => {
                          return <div key={index}>{option}</div>;
                        })}
                      </div>
                    )}
                  </span>
                </div>
              </div>
              <ShopList />
              <button className="black">Load More</button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
