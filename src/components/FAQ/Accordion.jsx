import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="FAQ-I py-2 font-nav-font text-xl font-bold">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between w-full"
      >
        <span className="text-2xl">{title}</span>
        {open ? (
          <span className="text-3xl">-</span>
        ) : (
          <span className="text-3xl">+</span>
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          open ? " grid-rows-[1fr] opacity-100 " : " grid-rows-[0fr] opacity-0 "
        }`}
      >
        <div className="FAQ-A overflow-hidden text-xl"> {answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
