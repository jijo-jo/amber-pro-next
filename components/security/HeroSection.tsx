'use client';
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import maseterBedroom from "../assests/Master Bedroom.png"


const HeroSection: React.FC = () => {
  const headingWords = "Security".split(" ");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section
      ref={sectionRef}
      className="flex flex-col min-h-screen bg-black text-white px-6 py-12 pb-24 mt-32 w-full"
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
       Protect your home and loved ones. Robust solutions tailored to your needs. Our systems ensure you’re always in control, whether at home or away.
      </motion.p>

        <div className={`flex flex-col md:flex-row items-center gap-32 py-32 ml-32`}>
            <div className="w-[250px] md:w-[300px] lg:w-[350px] flex-shrink-0">
              <Image src={maseterBedroom} alt='master bedroom' width={500} height={800} className="rounded-xl shadow-lg" />
            </div>
      
            <div className="max-w-[340px] text-center md:text-left">
              <div className="text-xl md:text-[32px] font-inter font-medium text-white leading-[38.4px] tracking-[-0.64px]">Smart intrusion detection
              and alerts</div>
              <p className="text-[#FFFFFF66] font-inter fornt-[400] text-sm md:text-[19.69px] leading-[26px] tracking-[-0.8px] mt-6 mb-20">Instant alerts on your phone for unauthorized access, we ensure you have peace of mind wherever you are.</p>
      
              <div className="text-xl md:text-[32px] font-inter font-medium text-white leading-[38.4px] tracking-[-0.64px]">Remote Access </div>
              <p className="text-[#FFFFFF66] font-inter fornt-[400] text-sm md:text-[19.69px] leading-[26px] tracking-[-0.8px] mt-6 mb-20">Lock and unlock doors or check live camera feeds via the Curiousfly mobile app. Detect unusual activity and trigger alarms or notifications.</p>

              <div className="text-xl md:text-[32px] font-inter font-medium text-white leading-[38.4px] tracking-[-0.64px]">Integration with Automation</div>
              <p className="text-[#FFFFFF66] font-inter fornt-[400] text-sm md:text-[19.69px] leading-[26px] tracking-[-0.8px] mt-6">Link your security system with lights and alarms to deter potential threats. </p>
            </div>
          </div>

    </section>
  );
};

export default HeroSection;