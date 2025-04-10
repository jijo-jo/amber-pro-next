'use client';
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "../globalcomponents/Button";

const HeroSection: React.FC = () => {
  const headingWords = "The Amber Pro".split(" ");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-end min-h-screen bg-black text-white text-center px-6 py-12 pb-24 mt-8"
    >
      <h1 className="text-[36px] md:text-[44px] font-medium leading-[57.2px] tracking-[-2px]">
        <motion.span
          initial={{ opacity: 0, y: 10, color: '#000000' }}
          animate={isInView ? { opacity: 1, y: 0, color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text', backgroundImage: 'linear-gradient(to right, #4D4D4D, #FFFFFF)' } : { opacity: 0, y: 10, color: '#000000' }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: isInView ? 0.4 : 0, // Delay for the whole heading
          }}
          style={{ display: 'inline-block', width: '100%' }} // Span takes full width
          className="bg-gradient-to-r from-[#4D4D4D] to-[#FFFFFF] text-transparent bg-clip-text"
        >
          {headingWords.join(" ")}
        </motion.span>
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: isInView ? 0.1 : 0 }}
        className="text-[#FFFFFFAA] w-[345px] md:w-[453.41px] mt-4 text-[12px] md:text-[13.89px] leading-[18.2px] tracking-[0%]"
      >
        Experience the perfect blend of elegance and technology with AMBER PRO touch panels. Control lighting, climate, security, and more, all at your fingertips.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 1.6, ease: "easeOut", delay: isInView ? 0.2 : 0 }}
        className="mt-6 flex flex-col sm:flex-col space-y-4 sm:space-y-0 sm:space-x-4 max-w-xs sm:max-w-none ml-0 md:ml-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: isInView ? 0.3 : 0 }}
        >
          <Button
            title="Learn More"
            onClick={() => alert("Buy Now Clicked")}
            className="bg-white text-[#000000] py-[9px] px-[18px] hover:bg-transparent hover:text-white hover:border-white hover:border-[1px] w-full md:w-full
               text-[15.88px] leading-[100%] tracking-[0%] h-[42px]
               text-center align-middle font-inter font-medium ml-2"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: isInView ? 0.4 : 0 }}
        >
          <Button
            title="Talk to an expert >"
            onClick={() => alert("Talk to an expert Clicked")}
            className="text-white w-full sm:w-auto text-[14px] md:text-[16px] mt-2 md:mt-4"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;




