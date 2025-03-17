'use client'
import React, { useState } from "react";
import Image from "next/image";
import NavLink from "../globalcomponents/NavLink";
import Logo from '../assests/logoasset.png';
import Button from "../globalcomponents/Button";
import hamburgimage from '../assests/Group 4.png'
import closeimage from '../assests/Group 6.png'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Overlay for popup background effect */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav className="bg-black text-white p-4 fixed top-0 left-0 w-full z-50">
        <div className="flex justify-between items-center mx-2 md:mx-4 lg:mx-10">
          <div className="text-lg font-bold">
            <Image src={Logo} alt="Logo" className="h-[26px] w-[25px]" />
          </div>

          <div className="hidden md:flex flex-1 justify-center space-x-4 gap-12 ml-20 ">
            <NavLink label="Amber Pro" href="#" />
            <NavLink label="Curiousfly Home" href="#" />
            <NavLink label="Home Controller" href="#" />
            <NavLink label="Curiousfly App" href="#" />
          </div>

          <div className="hidden md:block">
            <Button
              title="Buy now"
              onClick={() => alert("Buy Now Clicked")}
              className="bg-[#00B7E1] text-white 
                h-[35px] w-[97px]
               font-inter font-medium text-[15.88px] leading-[100%] 
               tracking-[0%] text-center align-middle"
            />
          </div>

          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <Image src={closeimage} alt="closeicon" className="w-[23.78px] h-[24.71px]" />
            ) : (
              <Image src={hamburgimage} alt="hamburg" className="w-[26.35px] h-[12.65px]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Popup Menu */}
      <div
        className={`fixed top-[87.63px] left-[6%] w-[345px] h-[552.25px]  max-w-[90%] bg-[#191919] z-50 
        transition-transform duration-300 ${isOpen ? "translate-x-0" : "hidden"}`}
      >
        <div className="absolute top-4 right-4">
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <Image src={closeimage} alt="closeicon" className="w-[23.78px] h-[24.71px]" />
          </button>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 max-w-md">
          <div className="flex flex-col text-left gap-y-2">
            <NavLink label="Amber Pro" href="#" className="font-inter text-[24px] text-white font-medium leading-[32px] tracking-[-2px]" />
            <NavLink label="Curiousfly Home" href="#" className="font-inter text-[24px] text-white font-medium leading-[32px] tracking-[-2px]" />
            <NavLink label="Home Controller" href="#" className="font-inter text-[24px] text-white font-medium leading-[32px] tracking-[-2px]" />
            <NavLink label="Curiousfly App" href="#" className="font-inter text-[24px] text-white font-medium leading-[32px] tracking-[-2px]" />
            <NavLink label="Lighting" href="#" className="font-inter text-[24px] text-white font-medium leading-[32px] tracking-[-2px]" />
            <NavLink label="Music" href="#" className="font-inter text-[24px] text-white font-medium leading-[32px] tracking-[-2px]" />
            <NavLink label="Security" href="#" className="font-inter text-[24px] text-white font-medium leading-[32px] tracking-[-2px]" />
            <NavLink label="Climate" href="#" className="font-inter text-[24px] text-white font-medium leading-[32px] tracking-[-2px]" />
            <NavLink label="Blog" href="#" className="text-[#FFFFFF] opacity-60 text-[20px] font-[200] leading-[28px] tracking-[-2px]" />
            <NavLink label="Contact" href="#" className="text-[#FFFFFF] opacity-60 text-[20px] font-[200] leading-[28px] tracking-[-2px]" />
          </div>
          <div className="text-[#FFFFFF] opacity-60 text-[16px] leading-[28px] tracking-[-2px] mt-4">
            <p>support@curiousfly.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;


