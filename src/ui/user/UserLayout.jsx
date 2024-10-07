import React from "react";
import UserHeader from "./UserHeader";
import { getCookie, removeCookie } from "../../utils/cookies";
import { useNavigate } from "react-router-dom";
import { useWallet } from "@solana/wallet-adapter-react";

export default function UserLayout({ children }) {
  const navigate = useNavigate();
  const loggedIn = getCookie("access-token");
  const address = getCookie("address");
  // alert(address);

  const { connected } = useWallet();
  if (!loggedIn || !address || !connected) {
    removeCookie("access-token");
    removeCookie("address");
    sessionStorage.removeItem("hasRedirected");
    navigate("/");
  }

  return (
    <div className="wrap">
      <img
        src="/asset/Line.png"
        className="absolute w-full z-[-1] top-0 left-0 right-0 lg:hidden"
        alt="line"
      />
      <UserHeader />
      {children}
    </div>
  );
}
