import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { greenBtnSmClass } from "./buttonStyle";
import { HiOutlineMenuAlt1 } from "react-icons/hi"; // Menu Icon
import { IoClose } from "react-icons/io5"; // Close Icon

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pages = [
    { page: "Home", path: "#" },
    { page: "Problem", path: "#problem" },
    { page: "Solution", path: "#solution" },
    { page: "Architecture", path: "#architecture" },
    { page: "Use case", path: "#usecase" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed z-[100] w-full flex items-center backdrop-blur-md bg-black bg-opacity-15 justify-between px-8 py-5 mb-4">
      <div>
        <img src={"/logo.png"} alt="name" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-10 px-10 bg-white bg-opacity-10 p-3 rounded-full text-sm text-white text-opacity-70">
        {pages.map((i, index) => (
          <a
            href={i.path}
            key={index}
            className="hover:text-white transition-colors duration-200"
          >
            {i.page}
          </a>
        ))}
      </div>

      {/* Documentation Button */}
      <div className="hidden lg:block">
        <button className={greenBtnSmClass}>Documentation</button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden">
        <HiOutlineMenuAlt1
          className="text-white text-3xl cursor-pointer"
          onClick={toggleMobileMenu}
        />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-black text-white z-50 transition-transform duration-300 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-700">
          <img src={"/logo.png"} alt="name" />
          <IoClose
            className="text-white text-3xl cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>

        <nav className="flex flex-col gap-6 mt-0 pt-8 px-5 text-lg bg-black">
          {pages.map((i, index) => (
            <a
              href={i.path}
              key={index}
              className="hover:text-gray-300 transition-colors duration-200"
              onClick={toggleMobileMenu} // Close menu on click
            >
              {i.page}
            </a>
          ))}
        </nav>

        <div className="mt-0 pt-8 px-5 bg-black">
          <button className={greenBtnSmClass} onClick={toggleMobileMenu}>
            Documentation
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
