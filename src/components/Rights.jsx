import React from "react";
import "./styles.css";

const Rights = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="bg-gray-300  mb-5 rounded-sm p-5 mx-0">
      <p className="text-center">© {year} uifry.com. All rights reserved.</p>
    </div>
  );
};

export default Rights;
