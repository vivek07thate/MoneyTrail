import React, { useState } from "react";
import { logo, menu, close } from "../assets";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  const handleLoginClick = () => {
    window.open("/login", "_blank");
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className="flex items-center">
        <img src={logo} alt="hoobank" className="w-[120px] h-[80px]" />
        <span className="font-poppins text-white ml-4 text-lg" style={{ fontSize: "1.5rem" }}>
          Kuber Netra
        </span>
      </div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li className="font-poppins font-normal cursor-pointer text-[16px] text-white mr-10">
          <Link to="/">Home</Link>
        </li>
        <li className="font-poppins font-normal cursor-pointer text-[16px] text-white mr-10">
          <Link to="/About">About</Link>
        </li>
        <li className="font-poppins font-normal cursor-pointer text-[16px] text-white mr-10">
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <span className="font-poppins font-normal cursor-pointer text-[16px] text-white" onClick={handleLoginClick}>Log In</span>
        </li>
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            <li className="font-poppins font-normal cursor-pointer text-[16px] text-white mb-4">
              <Link to="/">Home</Link>
            </li>
            <li className="font-poppins font-normal cursor-pointer text-[16px] text-white mb-4">
              <Link to="/About">About</Link>
            </li>
            <li className="font-poppins font-normal cursor-pointer text-[16px] text-white mb-4">
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <span className="font-poppins font-normal cursor-pointer text-[16px] text-white" onClick={handleLoginClick}>Log In</span>
            </li>
          </ul>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

