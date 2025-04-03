'use client';
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Iphone1 from '../assests/Home Page.png';
import Iphone2 from '../assests/Scenes list.png';
import Iphone3 from '../assests/Master Bedroom.png';
import Iphone4 from '../assests/RGB Lights.png';

const images = [Iphone1, Iphone2, Iphone3, Iphone4];

const HeroSection: React.FC = () => {
  const headingWords = "Music".split(" ");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section
      ref={sectionRef}
      className="flex flex-col min-h-screen bg-black text-white px-6 py-12 pb-24 mt-32"
    >
      <h1 className="text-[36px] md:text-[44px] font-medium leading-[57.2px] tracking-[-2px] ml-32">
        <motion.span
          initial={{ opacity: 0, y: 10, color: '#000000' }}
          animate={isInView ? { opacity: 1, y: 0, color: '#FFFFFF', WebkitBackgroundClip: 'text', backgroundClip: 'text', backgroundImage: 'linear-gradient(to right, #4D4D4D, #FFFFFF)' } : { opacity: 0, y: 10, color: '#000000' }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: isInView ? 0.4 : 0, // Delay for the whole heading
          }}
          style={{ display: 'inline-block', width: '100%' }} // Span takes full width
          className=" text-white"
        >
          {headingWords.join(" ")}
        </motion.span>
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: isInView ? 0.1 : 0 }}
        className="text-[#FFFFFFAA] w-[345px] md:w-[453.41px] mt-4 text-[12px] md:text-[13.89px] leading-[18.2px] tracking-[0%] ml-32"
      >
       Designed for music lovers, our solutions let you enjoy high-quality audio throughout your home, perfectly synchronized or personalized for each space.
      </motion.p>

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

    </section>
  );
};

export default HeroSection;