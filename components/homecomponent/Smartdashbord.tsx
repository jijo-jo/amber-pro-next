'use client'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import Iphone1 from "../assests/image1.png";
import Iphone2 from "../assests/image2.png";
import Iphone3 from "../assests/image3.png";
import Iphone4 from "../assests/image4.png";

const images = [Iphone1, Iphone2, Iphone3, Iphone4];

const SmartDashboard: React.FC = () => {
  const imagesRef = useRef<HTMLDivElement[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (imagesRef.current.length === images.length) {
      const duration = 2; 
      const delayBetween = 1; 
      const depth = 300; 

      if (!timelineRef.current) {
        timelineRef.current = gsap.timeline({ repeat: -1 });
      } else {
        timelineRef.current.clear();
      }

      imagesRef.current.forEach((image) => {
        gsap.set(image, {
          z: -depth, 
          opacity: 0,
          scale: 0.6,
        });

        timelineRef.current?.to(image, {
          z: 0, 
          opacity: 1, 
          scale: 1.2, 
          duration: duration,
          ease: "power2.inOut",
        });

        timelineRef.current?.to(
          image,
          {
            z: depth, 
            opacity: 0, 
            scale: 0.6,
            duration: duration,
            ease: "power2.inOut",
          },
          `+=${delayBetween}` 
        );
      });
    }
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center px-2 py-12 w-full">
      <div className="w-full max-w-6xl text-left">
        <h2 className="font-inter font-medium text-[44px] md:text-[64px] leading-[57.2px] tracking-[-2px] align-middle pl-8 md:pl-0">
          Control your home, anytime, anywhere.
        </h2>
      </div>
      <div className="relative mt-10 w-full max-w-6xl flex items-center justify-center">
        <div className="relative w-[300px] h-[400px] flex items-center justify-center perspective-[800px]">
          {images.map((src, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) imagesRef.current[index] = el;
              }}
              className="absolute"
            >
              <Image
                src={src}
                alt={`Smart Home Dashboard ${index + 1}`}
                className="w-72 h-auto rounded-xl shadow-lg transition-all"
              />
            </div>
          ))}
        </div>
      </div>

      <DownloadSection />
    </div>
  );
};

const DownloadSection: React.FC = () => {
  return (
    <div className="text-center text-gray-400 px-6 mt-16 max-w-3xl">
      <p className="font-inter font-medium text-[21px] leading-[29px] text-center align-middle">
        The Curiousfly App is your ultimate smart home companion, providing seamless control over
        lighting, climate, security, entertainment, and energy management -{" "}
        <span className="text-white font-medium text-[21px] leading-[29px] text-center">
          all from your smartphone.
        </span>
        Designed for convenience and efficiency, the app allows you to automate routines, monitor
        real-time energy usage, and manage your home remotely with just a tap.
      </p>

      <div className="flex flex-col items-center md:flex-row md:justify-around gap-4 mt-6">
        <Link href="/" className="font-inter font-medium text-[16px] text-[#00B7E1] hover:underline">
          Download for iOS &gt;
        </Link>
        <Link href="/" className="font-inter font-medium text-[16px] text-[#00B7E1] hover:underline">
          Download for Android &gt;
        </Link>
      </div>
    </div>
  );
};

export default SmartDashboard;






