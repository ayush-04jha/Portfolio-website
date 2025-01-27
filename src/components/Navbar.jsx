import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className=" border bg-black border-gray-800 flex sticky  items-center justify-between h-20 place-items-end pl-3 z-10 ">
      <div className="text-4xl text-white font-bold">Programmer</div>

      <nav className=" flex gap-8 mx-5 text-lg ">
        <NavLink to="/about" className="text-[#ADB7BE] hidden md:block">
          About
        </NavLink>
        <NavLink to="/contact" className="text-[#ADB7BE] hidden md:block">
          Skills
        </NavLink>
        <NavLink to="/contact" className="text-[#ADB7BE] hidden md:block">
          Projects
        </NavLink>
        <NavLink to="/contact" className="text-[#ADB7BE] hidden md:block">
          Contact
        </NavLink>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className=" md:hidden"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </nav>
    </div>
  );
}

export default Navbar;
