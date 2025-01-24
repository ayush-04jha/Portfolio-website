import React from "react";
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
      <div className=" border bg-black border-gray-800 flex sticky top-0 items-center justify-between h-20 place-items-end pl-3 z-10 ">
        <div className="text-4xl text-white font-bold">
          Programmer
        </div>
        
        <nav className=" flex gap-8 mx-5 text-lg ">
      <NavLink 
        to="/about" 
        className="text-[#ADB7BE]" 
        
      >
        About
      </NavLink>
      <NavLink 
        to="/contact" 
        className="text-[#ADB7BE]" 
      >
        Skills
      </NavLink>
      <NavLink 
        to="/contact" 
        className="text-[#ADB7BE]" 
      >
        Projects
      </NavLink>
      <NavLink 
        to="/contact" 
        className="text-[#ADB7BE]" 
      >
        Contact
      </NavLink>
    </nav>
      </div>
        
          
      
      
    
  );
}

export default Navbar;
