'use client';
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import speakerImage from "../assests/speakerimage.jpeg"

const CustomListening: React.FC = () => {
  const headingWords = "Customized Listening".split(" ");
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
       Play soft tunes in the bedroom, lively beats in the living room, and a podcast in the study—each room tailored to its occupants.
      </motion.p>

      <div className="flex flex-left justify-end">
        <Image src={speakerImage} alt="speaker" width={1200} height={810}/>
      </div>

    </section>
  );
};

export default CustomListening;