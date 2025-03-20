"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 }); // 👈 Triggers when 50% is in view

  return (
    <>
      <section ref={sectionRef} className="relative w-full h-screen flex items-start justify-start text-black bg-white">
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
          priority
        />
        <div className="absolute top-8 left-4 lg:top-auto lg:left-auto lg:bottom-32 lg:right-[162px] max-w-md p-4 sm:p-8 text-left ">
          <motion.h1 className="font-inter font-medium text-[36px] md:text-[44px] leading-[57.2px] tracking-[0%]"
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
               transition={{
                 duration: 0.8,
                 ease: "easeOut",
                 delay: isInView ? 0.4 : 0, 
               }}>
               {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 0.5, y: 0 } : { opacity: 0, y: 15 }}
            transition={{
              duration: 1.4,
              ease: "easeOut",
              delay: isInView ? 0.6 : 0,
            }}
            className="font-inter font-medium w-[315.48px] md:w-[450.19px] text-[12px] md:text-[13.89px] leading-[19px] tracking-[0%] text-[#000000] opacity-50 my-2"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{
              duration: 1.6,
              ease: "easeOut",
              delay: isInView ? 0.8 : 0,
            }}
            className="mt-4 flex justify-start"
          >
            <button className="bg-black w-auto text-white px-6 py-2 rounded-full text-center font-inter font-medium text-[15.88px] md:text-[15.88px] hover:bg-gray-800 transition">
              {buttonText}
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OfficeSession;











