'use client';

import Image from 'next/image';
import securitytop from "../assests/securitytop1.jpeg"

const LightingAndShades = () => {
  return (
    <section className="w-full bg-black text-white mt-20 mb-20">
      <div className="relative w-full h-[500px] md:h-[600px]">
        <div className="relative w-full h-[382.62px]">
          <Image
            src={securitytop}
            alt="Lighting and Shades Background"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center px-4 mt-10">
          <h2 className="text-[36px] md:text-[64px] leading-[57.2px] md:leading-[96px] tracking-[-2px] md:tracking-[-3px] font-medium mb-4">Security</h2>
          <p className="w-[345px] md:w-[634.62px] text-[12px] md:text-[13.89px] font-[400] leading-[19.2px] md:leading-[26px] tracking-[0%] md:tracking-[-0.8px] mb-6 text-[#FFFFFFC2]">
          Protect your home and loved ones. Robust solutions tailored to your needs. Our systems ensure you’re always in control, whether at home or away.
          </p>
          <button className="bg-white text-black px-6 py-2 rounded-full text-[15.88px] font-medium hover:bg-gray-200 transition">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default LightingAndShades;