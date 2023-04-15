/* eslint-disable @next/next/no-img-element */
import Address from "@/components/Address";
import Orders from "@/components/Orders";
import Payment from "@/components/Payments";
import Profile from "@/components/Profile";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const tabLinks = [
  {
    name: "Profile Info",
    icon: "/icons/user.png",
    component: <Profile />,
  },
  {
    name: "Orders",
    icon: "/icons/trolley.png",
    component: <Orders />,
  },
  {
    name: "Address",
    icon: "/icons/pin.png",
    component: <Address />,
  },
  {
    name: "Payment Methods",
    icon: "/icons/wallet.png",
    component: <Payment />,
  },
];

export default function Account() {
  const date = new Date().getFullYear();
  const [isLoading, setIsLoading] = useState(true);
  const [tab, setTab] = useState(1);

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="account">
      <Link href="/" className="account-img">
        <img src="/images/benaya-banner-2.png" alt="" />
      </Link>
      <div className="account-container">
        <div className="account-dashboard">
          <div className="user-info">
            <div className="user-initials">KO</div>
            <div className="user-greeting">Welcome, Kelechi</div>
          </div>
          <div className="dashboard-items">
            {tabLinks.map((link, index) => {
              return (
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(index + 1);
                  }}
                  key={index}
                  className={"items " + (tab === index + 1 && "active")}
                >
                  <img src={link.icon} className="items-icon" alt="" />{" "}
                  {link.name}
                </div>
              );
            })}
            <div className="items-logout">
              <img src="/icons/logout.png" className="items-icon" alt="" />
              Logout
            </div>
          </div>
        </div>
        <div className="account-info">
          {tabLinks.map((link, index) => {
            return (
              <div
                key={index}
                className={`${index + 1 === tab ? "show" : "hidden"}`}
              >
                {link.component}
              </div>
            );
          })}
        </div>
      </div>
      <div className="footer-copyright account-footer">
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
    </div>
  );
}
