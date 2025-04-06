'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import scrollerchnage from '../assests/scrollerchnage.jpeg';

const SmartDashboard: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div
      ref={sectionRef}
      className="relative bg-black text-white min-h-screen flex flex-col px-2 py-12 w-full overflow-hidden"
    >
      {/* Background Image (Covering the entire section) */}
      <Image
        src={scrollerchnage}
        alt="scroller image"
        className="absolute top-20 left-0 w-full h-full object-cover z-0"
      />

      {/* Heading (Positioned above the image) */}
      <div className="relative w-full text-left md:mt-16 z-10">
        <motion.h2
          className="font-inter font-medium text-[44px] md:text-[64px] leading-[57.2px] tracking-[-2px] align-middle pl-7 md:pl-[77px]"
          initial={{ opacity: 0, y: 10, color: '#000000' }}
          animate={isInView ? { opacity: 1, y: 0, color: '#FFFFFF' } : { opacity: 0, y: 10, color: '#000000' }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: isInView ? 0.4 : 0,
          }}
        >
          Control your home, anytime, anywhere.
        </motion.h2>
      </div>

  
      <div className="flex justify-center mt-auto z-10">
        <DownloadSection />
      </div>
    </div>
  );
};

const DownloadSection: React.FC = () => {
  return (
    <div className="text-center text-[#757575] px-6 py-12 w-full max-w-4xl mx-auto mt-auto ">
      <p className="font-inter font-medium text-[18px] md:text-[21px] leading-[24px] md:leading-[29px] tracking-[-1px] md:tracking-[-2px] text-center align-middle">
        The Curiousfly App is your ultimate smart home companion, providing seamless control over
        lighting, climate, security, entertainment, and energy management -{' '}
        <span className="text-white font-medium text-[18px] md:text-[21px] leading-[24px] md:leading-[29px] text-center">
          all from your smartphone.
        </span>
        Designed for convenience and efficiency, the app allows you to automate routines, monitor
        real-time energy usage, and manage your home remotely with just a tap.
      </p>
      <div className="flex flex-col items-center md:flex-row md:justify-around gap-4 mt-6">
        <Link
          href="/"
          className="font-inter font-medium text-[16px] text-[#00B7E1] hover:underline"
        >
          Download for iOS &gt;
        </Link>
        <Link
          href="/"
          className="font-inter font-medium text-[16px] text-[#00B7E1] hover:underline"
        >
          Download for Android &gt;
        </Link>
      </div>
    </div>
  );
};

export default SmartDashboard;







