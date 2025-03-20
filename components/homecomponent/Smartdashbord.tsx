'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Iphone1 from '../assests/Home Page.png';
import Iphone2 from '../assests/Scenes list.png';
import Iphone3 from '../assests/Master Bedroom.png';
import Iphone4 from '../assests/RGB Lights.png';

const images = [Iphone1, Iphone2, Iphone3, Iphone4];

const SmartDashboard: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div ref={sectionRef} className="bg-black text-white min-h-screen flex flex-col px-2 py-12 w-full overflow-hidden">
      <div className="w-full text-left md:mt-16">
        <motion.h2 className="font-inter font-medium text-[44px] md:text-[64px] leading-[57.2px] tracking-[-2px] align-middle pl-7 md:pl-[77px]"
          initial={{ opacity: 0, y: 10, color: '#000000' }}
          animate={isInView ? { opacity: 1, y: 0, color: '#FFFFFF' } : { opacity: 0, y: 10, color: '#000000' }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: isInView ? 0.4 : 0,
          }}
        >
          Control your home, anytime, anywhere.
        </motion.h2>
      </div>

      <div className="relative mt-14 md:mt-24 flex pl-7 md:pl-[77px]">
        <div
          className="flex flex-row gap-4 md:gap-10 md:justify-between overflow-x-auto scroll-smooth no-scrollbar"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none", 
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ scrollSnapAlign: 'start' }}
            >
              <Image
                src={src}
                alt={`Smart Home Dashboard ${index + 1}`}
                className="w-[175px] md:w-[350px] rounded-xl shadow-lg object-cover"
                width={350}
                height={950}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center md:mt-20">
        <DownloadSection />
      </div>
    </div>
  );
};

const DownloadSection: React.FC = () => {
  return (
    <div
      className="text-center text-[#757575] px-6 mt-16 w-[777px] max-w-4xl mx-auto"
    >
      <p className="font-inter font-medium text-[21px] leading-[29px] tracking-[-2px] text-center align-middle">
        The Curiousfly App is your ultimate smart home companion, providing seamless control over
        lighting, climate, security, entertainment, and energy management -{' '}
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







