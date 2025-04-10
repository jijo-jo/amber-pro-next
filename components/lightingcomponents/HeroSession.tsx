'use client';

import Image from 'next/image';
import bgsettingimage from "../assests/bgsettingimage.png"

const Hero = () => {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden flex items-center justify-center">
  
      <Image
        src={bgsettingimage} 
        alt="Elegant Blinds"
        fill
        priority
        className="object-cover z-0"
      />

      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 text-center px-4 md:px-0">
        <p className="uppercase text-[16px] text-white font-medium leading-[19.2px] tracking-[1.92px] mb-2">BLINDS AND SHADES</p>
        <h1 className="text-[36px] md:text-[64px] font-medium text-white leading-[44px] md:leading-[66px] tracking-[-2px] md:tracking-[-3px]">
          Effortless elegance, <br className="hidden sm:block" />
          one glide at a time
        </h1>
      </div>
    </section>
  );
};

export default Hero;


