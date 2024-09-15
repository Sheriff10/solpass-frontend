import React from "react";
import { NavLink } from "react-router-dom";

export default function UserHeader() {
  const category = [
    {
      name: "Blockchain",
      link: "/home",
    },
    {
      name: "Government ID",
      link: "/home",
    },
    {
      name: "Social Platform",
      link: "/home",
    },
    {
      name: "Biometric",
      link: "/home",
    },
  ];
  return (
    <>
      <div className="header px-8 py-8 flex justify-between items-center md:border-b border-white border-opacity-15">
        <div className="wrap flex gap-10 items-center">
          <img src="/logo.png" alt="Solpass" />
          <div className="wrap md:flex gap-3 hidden">
            {category.map((i, index) => (
              <NavLink
                to={i.link}
                className={
                  "text-xs bg-neutral-900 rounded-3xl p-2 px-3 text-gray-300 text-nowrap"
                }
                key={index}
              >
                {i.name}
              </NavLink>
            ))}
          </div>
        </div>

        <button className="text-xs bg-primary-green rounded-3xl p-2 px-3 text-black flex gap-2 items-center font-bold">
          <img src="/asset/circle.png" alt="circle" />
          <span>Gk8E....2kLM</span>
        </button>
      </div>

      <div className="overflow-x-scroll py-2 md:hidden block">
        <div className="wrap flex justify-center gap-3 px-4">
          {category.map((i, index) => (
            <NavLink
              to={i.link}
              className={
                "text-xs bg-neutral-900 rounded-3xl p-2 px-3 text-gray-300 text-nowrap"
              }
              key={index}
            >
              {i.name}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}
