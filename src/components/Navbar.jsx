import React from "react";
import logo from "../assets/logo.png";
import brand from "../assets/brand.png";
import star from "../assets/Star.png";
import "./styles.css";

const Navbar = () => {
  return (
    <header className="flex justify-center p-5">
      <nav
        className="flex gap-1 items-center justify-between"
        style={{ maxWidth: "1090px", minWidth: "1090px" }}
      >
        <div className="flex gap-20 items-center">
          <div className="flex items-center">
            <img src={logo} alt="logo" />
            <img src={brand} alt="brand" />
            {/* TM Pending */}
          </div>
          <div className="flex gap-8 font-nav-font font-bold text-3xl">
            <a href="#" className=" text-primary">
              Home
            </a>
            <a href="#">About Us</a>
            <a href="#">Pricing</a>
            <a href="#">Features</a>
          </div>
        </div>
        <div>
          <button
            className="Button bg-black p-6 pl-12 pr-12 text-xl text-white font-nav-font w-auto"
            style={{ borderRadius: "4px" }}
          >
            Download
          </button>
        </div>
      </nav>
      <img
        src={star}
        alt="star"
        className="w-30 h-30 absolute right-12 top-20"
      />
      <img
        src={star}
        alt="star"
        className="w-10 h-10 transform rotate-45 absolute left-8 top-20"
      />
    </header>
  );
};

export default Navbar;
