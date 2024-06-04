import React, { useState } from "react";
import "./styles.css";
const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="Mobile-Menu py-2 font-nav-font text-xl font-bold">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-center px-5"
        style={{ width: "80%" }}
      >
        <span className="text-2xl text-center">Menu</span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          open ? " grid-rows-[1fr] opacity-100 " : " grid-rows-[0fr] opacity-0 "
        }`}
      >
        <div className="overflow-hidden text-xl flex flex-col px-5">
          <a href="">Home</a>
          <a href="">Pricing</a>
          <a href="">Featues</a>
          <a href="">About Us</a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
