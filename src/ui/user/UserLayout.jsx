import React from "react";
import UserHeader from "./UserHeader";

export default function UserLayout({ children }) {
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
