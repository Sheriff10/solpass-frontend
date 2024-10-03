import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineApi } from "react-icons/ai";

import { RiCloseLargeFill, RiMenu3Fill } from "react-icons/ri";
import { MdOutlineKey } from "react-icons/md";
import Support from "./Support";
import { GiLifeSupport } from "react-icons/gi";
import { FaBookOpen } from "react-icons/fa6";
import { getCookie, removeCookie } from "../utils/cookies";
import { FaSignOutAlt } from "react-icons/fa";

export default function DevLayout({ children }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  // check if login
  const devToken = getCookie("dev-token");
  useEffect(() => {
    if (!devToken) return navigate("/auth/developer/login");
  }, []);
  const link = [
    {
      name: "Dashboard",
      link: "/dev/dashboard",
      icon: <RxDashboard />,
    },
    {
      name: "Enpoints",
      link: "/dev/endpoints",
      icon: <AiOutlineApi />,
    },
    {
      name: "API Key",
      link: "/dev/api-key",
      icon: <MdOutlineKey />,
    },
  ];
  const link2 = [
    {
      name: "Support",
      link: "https://somewhere.com",
      icon: <GiLifeSupport />,
    },
    {
      name: "Documentation",
      link: "/admin/events",
      icon: <FaBookOpen />,
    },
  ];

  const logOutHandler = () => {
    removeCookie("dev-token");
    navigate("/");
  };
  return (
    <>
      <div className="fixed hidden lg:block top-0 bottom-0 right-0 left-0">
        {/* Top Menu */}
        <div className="wrap bg-secondary-light"></div>

        {/* Side Menu and content */}
        <div className="wrap flex">
          <div className="side-menu lg:w-[400px] flex flex-col gap-5 h-[100vh] bg-secondary-light">
            <div className="wrap flex gap-4 text-white text-2xl items-center border-b border-gray-800 px-8 ">
              <img src="/logo.png" alt="Planner" className="w-[40px] my-5" />
              <h1>SOLPASS</h1>
            </div>
            <div className="flex h-full flex-col justify-between">
              <div className="px-8 flex flex-col gap-5 mt-10">
                {link.map((i, index) => (
                  <NavLink
                    to={i.link}
                    key={index}
                    className="rounded-lg p-2 flex gap-2 items-center text-sm text-gray-400 hover:scale-[1.1] hover:bg-primary-green hover:bg-opacity-10 hover:text-gray-200 transition-all"
                  >
                    {i.icon} {i.name}
                  </NavLink>
                ))}
              </div>
              <div className="px-8 py-5 flex flex-col gap-5 border-t border-gray-800">
                {link2.map((i, index) => (
                  <NavLink
                    to={i.link}
                    key={index}
                    className="rounded-lg p-2 flex gap-2 items-center text-sm text-gray-400 hover:scale-[1.1] transition-all"
                  >
                    {i.icon} {i.name}
                  </NavLink>
                ))}

                <a
                  className="rounded-lg p-2 flex gap-2 items-center text-sm text-red-400 hover:scale-[1.1] transition-all"
                  onClick={logOutHandler}
                >
                  <FaSignOutAlt /> Logout
                </a>
              </div>
            </div>
          </div>
          <div className="content w-full h-[100vh] overflow-scroll relative overflow-x-hidden">
            <div className="wrap bg-secondary-light relative w-full py-11"></div>

            {children}

            <div className="wrap mt-16 p-5 text-white">
              <Support />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="wrap block lg:hidden">
        <div className="header flex justify-between items-center px-5 border-b border-white border-opacity-30">
          <div className="logo-con">
            <div className="wrap flex gap-4 text-white text-2xl items-center ">
              <img src="/logo.png" alt="Planner" className="w-[40px] my-5" />
              <h1>SOLPASS</h1>
            </div>
          </div>
          <span className="text-white text-3xl" onClick={() => setShow(!show)}>
            <RiMenu3Fill />
          </span>
        </div>
        {/* MENU SECTION */}
        <div
          className={`${
            show ? "fade-in" : "fade-out"
          } wrap fixed top-0 bottom-0 w-full z-10 bg-black bg-opacity-80 backdrop-blur-md px-5`}
        >
          <div className="header flex justify-between items-center border-b border-white border-opacity-30">
            <div className="logo-con">
              <div className="wrap flex gap-4 text-white text-2xl items-center ">
                <img src="/logo.png" alt="Planner" className="w-[40px] my-5" />
                <h1>SOLPASS</h1>
              </div>
            </div>
            <span
              className="text-white text-3xl"
              onClick={() => setShow(!show)}
            >
              <RiCloseLargeFill />
            </span>
          </div>
          <div className="flex h-[100%] flex-col justify-between">
            <div className="px-8 flex flex-col gap-5 mt-10">
              {link.map((i, index) => (
                <NavLink
                  to={i.link}
                  key={index}
                  className="rounded-lg p-2 flex gap-2 items-center text-sm text-gray-400 hover:scale-[1.1] hover:bg-primary-green hover:bg-opacity-10 hover:text-gray-200 transition-all"
                >
                  {i.icon} {i.name}
                </NavLink>
              ))}
            </div>
            <div className="absolute px-8 py-5 flex flex-col gap-5 w-full border-t border-gray-800 bottom-0">
              {link2.map((i, index) => (
                <NavLink
                  to={i.link}
                  key={index}
                  className="rounded-lg p-2 flex gap-2 items-center text-sm text-gray-400 hover:scale-[1.1] transition-all"
                >
                  {i.icon} {i.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        {/* COMPONENT DISPLAY */}
        <div className="wrap">
          {children}
          <div className="mt-16 text-white px-5">
            <Support />
          </div>
        </div>
      </div>
    </>
  );
}
