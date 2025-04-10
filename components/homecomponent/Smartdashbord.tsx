'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import scrollerchnage from '../assests/scrollerchnage.jpeg';

const SmartDashboard: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div className="w-full">
      <span className="block w-full bg-black h-12"></span>
      <div
        ref={sectionRef}
        className="relative bg-black text-white min-h-[120vh] flex-col w-full mt-0 md:mt-14"
      >
        <Image
          src={scrollerchnage}
          alt="scroller image"
          className="absolute left-0 right-0 w-full h-full object-cover z-0 pt-32 md:pt-0"
        />
        <div className='flex flex-col gap-8 items-center'>
          <div className="relative w-full text-left md:text-center z-10">
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
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{
                duration: 1.6,
                ease: "easeOut",
                delay: isInView ? 1.4 : 0,
              }}
              className="mt-8 ml-8 md:ml-0"
            >
              <button
                className="bg-transparent text-white border-[1px] border-white px-6 py-3 rounded-full 
                          text-[15.88px] leading-[100%] tracking-[0%] 
                          text-center align-middle font-inter font-medium 
                          transition"
              >
                Learn More
              </button>
            </motion.div>
          </div>
        </div>


        <div className="flex justify-center z-10 absolute -bottom-12 md:-bottom-20 inset-x-0">
          <DownloadSection />
        </div>
      </div>
    </div>
  );
};

const DownloadSection: React.FC = () => {

  return (
    <div className="text-center text-[#757575] px-6 w-full max-w-4xl mx-auto">
    <p className="font-inter font-medium text-[18px] md:text-[21px] leading-[24px] md:leading-[29px] text-center align-middle">
      The Curiousfly App is your ultimate smart home companion, providing seamless control over
      lighting, climate, security, entertainment, and energy management -{' '}
      <span className="text-white font-medium text-[18px] md:text-[21px] leading-[24px] md:leading-[29px] text-center">
        all from your smartphone.
      </span>
      <span className="hidden md:inline">
        {' '}
        Designed for convenience and efficiency, the app allows you to automate routines, monitor
        real-time energy usage, and manage your home remotely with just a tap.
      </span>
    </p>
  </div>
  );
};

export default SmartDashboard;







