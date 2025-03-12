"use client"; // Ensure it's a Client Component

import React from "react";
import Image, { StaticImageData } from "next/image";

type HeroProps = {
  title: string;
  description: string;
  buttonText: string;
  backgroundImage: StaticImageData;
};

const OfficeSession: React.FC<HeroProps> = ({
  title,
  description,
  buttonText,
  backgroundImage,
}) => {
  return (
    <>
    <section className="relative w-full h-screen flex items-start justify-start text-black bg-white">
    <Image
        src={backgroundImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
        priority
      />
      <div className="absolute top-8 left-4 lg:top-auto lg:left-auto lg:bottom-32 lg:right-8 max-w-md p-4 sm:p-8 text-left ">
        <h1 className="font-inter font-medium text-[28px] md:text-[44px] leading-[32px] md:leading-[57.2px] text-[#000000]">
          {title}
        </h1>
        <p className="font-inter font-medium text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] text-[#000000] my-4 md:my-6 w-[90%]">
          {description}
        </p>
        <div className="mt-4 flex justify-start">
          <button className="bg-black w-auto text-white px-6 py-2 rounded-full text-center font-inter font-medium text-[15px] md:text-[16px] hover:bg-gray-800 transition">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default OfficeSession;










