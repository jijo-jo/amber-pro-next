'use client';
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "../globalcomponents/Button";
import Image from "next/image";
import backgroundImage from "../assests/lightingbg.jpeg";

const HeroSectionLight: React.FC = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { margin: "-50% 0px -50% 0px", once: true });

    return (
        <>
            <div className="absolute inset-0 w-full h-full opacity-50">
                <Image
                    src={backgroundImage}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full "
                    priority
                />
            </div>
            <section
                ref={sectionRef}
                className="relative flex flex-col items-center justify-center min-h-screen text-white text-center px-6 py-12 pb-24 mt-8 overflow-hidden"
            >

                <motion.h1
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    className="text-[36px] md:text-[44px] font-medium leading-[57.2px] tracking-[-2px] text-white relative z-10"
                >
                    Lighting isn’t just about brightness
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
                    className="text-[#FFFFFFAA] w-[345px] md:w-[638.24px] mt-4 text-[12px] md:text-[13.89px] leading-[18.2px] tracking-[0%] relative z-10"
                >
                    It’s about creating the perfect ambiance, enhancing comfort, and improving energy efficiency.
                </motion.p>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.4, ease: "easeOut", delay: 0.8 }}
                    className="mt-6 flex flex-col sm:flex-col space-y-4 sm:space-y-0 sm:space-x-4 max-w-xs sm:max-w-none ml-0 md:ml-8 relative z-10"
                >
                    <Button
                        title="Explore"
                        onClick={() => alert("Explore Clicked")}
                        className="bg-transparent text-[#FFFFFF] py-[9px] px-[18px] w-full md:w-[112.5px]
             text-[15.88px] leading-[100%] tracking-[0%] h-[42px]
             text-center align-middle font-inter font-medium ml-2 border border-white"
                    />
                </motion.div>
            </section>
        </>
    );
};

export default HeroSectionLight;

