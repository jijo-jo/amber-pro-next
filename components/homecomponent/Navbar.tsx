'use client'
import React, { useState } from "react";
import Image from "next/image";
import NavLink from "../globalcomponents/NavLink";
import Logo from '../assests/logoasset.png';
import Button from "../globalcomponents/Button";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center mx-auto md:mx-4">
        <div className="text-lg font-bold">
          <Image src={Logo} alt="Logo" className="h-[26px] w-[25px]" />
        </div>

        <div className="hidden md:flex flex-1 justify-center space-x-6">
          <NavLink label="Amber Pro" href="#" />
          <NavLink label="Curiousfly Home" href="#" />
          <NavLink label="Home Controller" href="#" />
          <NavLink label="Curiousfly App" href="#" />
        </div>

        <div className="hidden md:block">
          <Button
            title="Buy now"
            onClick={() => alert("Buy Now Clicked")}
            className="bg-[#00B7E1] text-white hover:bg-blue-600
             font-inter font-medium text-[15.88px] leading-[100%] 
             tracking-[0%] text-center align-middle"
          />
        </div>

        {/* Hamburger Menu Icon */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu as in the image */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute top-4 right-4">
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 max-w-md">
          <div className="flex flex-col text-left">
            <NavLink label="Amber Pro" href="#" className="text-[24px] text-white"/>
            <NavLink label="Curiousfly Home" href="#" className="text-[24px] text-white"/>
            <NavLink label="Home Controller" href="#" className="text-[24px] text-white" />
            <NavLink label="Curiousfly App" href="#" className="text-[24px] text-white"/>
            <NavLink label="Lighting" href="#" className="text-[24px] text-white" />
            <NavLink label="Music" href="#" className="text-[24px] text-white" />
            <NavLink label="Security" href="#" className="text-[24px] text-white" />
            <NavLink label="Climate" href="#" className="text-[24px] text-white" />
            <NavLink label="Blog" href="#" className="text-[24px]" />
            <NavLink label="Contact" href="#" className="text-[24px]" />
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <p>support@curiousfly.com</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


