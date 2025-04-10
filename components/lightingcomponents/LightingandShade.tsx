'use client';

import Image from 'next/image';
import lightingtop from "../assests/lighting-top.jpeg"
import lightingphone from "../assests/lightingphone.png"

const LightingAndShades = () => {
  return (
    <section className="w-full bg-black text-white mt-20">
      <div className="relative w-full h-[500px] md:h-[600px]">
        <div className="relative w-full h-[382.62px]">
          <Image
            src={lightingtop}
            alt="Lighting and Shades Background"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center px-4 mt-10">
          <h2 className="text-[36px] md:text-[64px] leading-[57.2px] md:leading-[96px] tracking-[-2px] md:tracking-[-3px] font-medium mb-4">Lighting & Shades</h2>
          <p className="w-[345px] md:w-[634.62px] text-[12px] md:text-[13.89px] font-[400] leading-[19.2px] md:leading-[26px] tracking-[0%] md:tracking-[-0.8px] mb-6 text-[#FFFFFFC2]">
            Enhance your smart home with intelligent lighting and shades that work in harmony to create a comfortable, energy-efficient, and stylish living space.
          </p>
          <button className="bg-white text-black px-6 py-2 rounded-full text-[15.88px] font-medium hover:bg-gray-200 transition">
            Explore
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 text-center mt-10">
        <div className="relative w-full max-w-3xl mx-auto h-auto aspect-[9/16] md:aspect-[16/9] mb-8">
          <Image
            src={lightingphone}
            alt="Smartphone RGB Controls"
            className="object-cover w-full h-full"
          />
        </div>
        <p className="text-[16px] md:text-[20px] text-[#757575] w-[327.36px] md:w-[771.55px] mx-auto leading-[22px] md:leading-[29px] font-[600]">
          Control your lights with ease, Whether through our mobile app, touch panels, or voice commands. Enjoy instant adjustments without leaving your seat. Why settle for ordinary lighting when you can
          <span className="text-[16px] md:text-[20px] text-[#FFFFFF] ml-1 leading-[22px] md:leading-[29px] font-[600]">transform your space with RGB Smart Lights</span>
          ? create stunning ambiances, enhance moods, and personalize your home like never before.
        </p>
      </div>
    </section>
  );
};

export default LightingAndShades;
