'use client';
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import imagephones from "../assests/moovingEntertain1.jpeg"

const HeroSection: React.FC = () => {
    const headingWords = "Entertainment".split(" ");
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    return (
        <section
            ref={sectionRef}
            className="flex flex-col w-full items-center justify-end min-h-screen bg-white text-black text-center px-6 py-12 pb-24"
        >
            <div className="flex flex-row justify-center overflow-x-auto">
                 <Image src={imagephones} alt="moving image" width={600} height={394}/>
                 <Image src={imagephones} alt="moving image" width={600} height={394}/>
                 <Image src={imagephones} alt="moving image" width={600} height={394}/>
            </div>
            <h1 className="text-[36px] md:text-[64px] font-medium leading-[] md:leading-[70px] tracking-[-2px] md:tracking-[-3px]">
                <motion.span
                    initial={{ opacity: 0, y: 10, color: '#FFFFFF' }}
                    animate={isInView ? { opacity: 1, y: 0, color: '#000000', WebkitBackgroundClip: 'text', backgroundClip: 'text', backgroundImage: '' } : { opacity: 0, y: 10, color: '#FFFFFF' }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                        delay: isInView ? 0.4 : 0,
                    }}
                    style={{ display: 'inline-block', width: '100%' }}
                    className="text-black"
                >
                    {headingWords.join(" ")}
                </motion.span>
            </h1>

            <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 1.4, ease: "easeOut", delay: isInView ? 0.1 : 0 }}
                className="text-[#000000] w-[345px] md:w-[525.37px] font-[400] md:font-medium mt-4 text-[12px] md:text-[13.89px] leading-[19.2px] md:leading-[19px] tracking-[0%]"
            >
                Designed for music lovers, our solutions let you enjoy high-quality audio throughout your home, perfectly synchronized or personalized for each space.
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
                    transition={{ duration: 1.6, ease: "easeOut", delay: isInView ? 0.4 : 0 }}
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
            </motion.div>
        </section>
    );
};

export default HeroSection;