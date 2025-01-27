import React from "react";

function Footer() {
  return (
    <div className="border h-[8rem] flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-[10rem] border-gray-800 px-5">
  {/* Left Content */}
  <div className="text-4xl text-white font-bold text-center sm:text-left">
    Programmer
  </div>
  {/* Right Content */}
  <p className="text-slate-600 text-center sm:text-right mt-2 sm:mt-0">
    All rights reserved.
  </p>
</div>

  );
}

export default Footer;
