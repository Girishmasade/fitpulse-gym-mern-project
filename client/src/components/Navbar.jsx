import React from "react";
import { Link } from "react-router-dom";
import electricSvg from "/electric.svg";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/50 border-b border-zinc-800 px-6 py-4 shadow-md flex justify-between items-center">
      
      {/* Logo */}
      <div className="flex items-center gap-2 text-white text-2xl font-bold">
        <Link to="/" className="flex items-center gap-1">
          <span>Fit</span>
          <img src={electricSvg} alt="logo" className="w-8" />
          <span>Pluse</span>
        </Link>
      </div>

      {/* Join Now Button */}
      <div>
        <Link
          to="/signup"
          className="bg-green-500 hover:bg-green-600 text-black font-semibold px-5 py-2 rounded-xl transition duration-300 shadow-md"
        >
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
