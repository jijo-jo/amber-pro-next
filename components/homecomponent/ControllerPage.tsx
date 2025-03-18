'use client'
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProductImage from "../globalcomponents/ProductImage";

const ControllerPage: React.FC = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col items-center w-full px-4">
      <HeroSection />
      <ProductImage />
    </div>
  );
};

const HeroSection: React.FC = () => {
  const headingWordsLine1 = "Introducing".split(" ");
  const headingWordsLine2 = "Home Controller".split(" ");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div ref={sectionRef} className="text-center px-6 py-6 md:py-10 mt-8 md:mt-16 flex flex-col items-center">
      <p
        className="font-inter font-medium text-[12px] md:text-[16px] leading-[19.2px] 
             tracking-[1.92px] text-center align-middle 
             text-gray-700 uppercase mt-4 md:mt-8"
      >
        Curiousfly
      </p>

      <h1 className="font-inter font-medium text-[44px] md:text-[64px] leading-[55px] md:leading-[70px] tracking-[-3px] text-center align-middle">
        {headingWordsLine1.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: isInView ? index * 0.2 : 0,
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
        <br className="leading-relaxed" />
        {headingWordsLine2.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              delay: isInView ? (headingWordsLine1.length + index) * 0.8 : 0,
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 0.5, y: 0 } : { opacity: 0, y: 15 }}
        transition={{
          duration: 1.4,
          ease: "easeOut",
          delay: isInView ? headingWordsLine1.length * 0.2 + headingWordsLine2.length * 0.2 + 0.1 : 0,
        }}
        className="font-inter font-medium text-[12px] md:text-[13.89px] leading-[19px] 
             tracking-[0%] text-center align-middle text-[#000000] opacity-50
             w-[345px] md:w-[481.29px] mx-auto mt-4"
      >
        The central intelligence of your smart home, seamlessly integrating and managing all connected devices for a smooth automation experience.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{
          duration: 1.6,
          ease: "easeOut",
          delay: isInView ? headingWordsLine1.length * 0.2 + headingWordsLine2.length * 0.2 + 0.2 : 0,
        }}
        className="mt-6"
      >
        <button
          className="bg-black text-white px-6 py-3 rounded-full 
               text-[15.88px] leading-[100%] tracking-[0%] 
               text-center align-middle font-inter font-medium 
               transition"
        >
          Explore
        </button>
      </motion.div>
    </div>
  );
};

export default ControllerPage;
