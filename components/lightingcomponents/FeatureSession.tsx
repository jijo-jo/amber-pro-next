'use client';

import Image from 'next/image';
import userimage from "../assests/userimage.jpeg"

const CircadianLighting = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-[36px] md:text-[64px] font-medium leading-[44px] md:leading-[79px] tracking-[-2px] md:tracking-[-3px] text-black mb-2">
          Circadian Lighting
        </h2>
        <p className="text-[36px] md:text-[64px] leading-[44px] md:leading-[79px] tracking-[-2px] md:tracking-[-3px] font-medium mb-6">
          <span className="text-[#0B84F8] mr-1">Wellness </span>
          <span className="text-[#EB8112] mr-1">Through</span>
          <span className="text-[#0B84F8] ml-1">Light</span>
        </p>

        <div className="w-full relative aspect-[4/5] md:aspect-[1.25/1] rounded-xl overflow-hidden mb-6">
          <Image
            src={userimage}
            alt="Woman with Circadian Lighting"
            className="w-full h-full object-cover"
          />
        </div>


        <p className="text-[16px] md:text-[20px] text-[#757575] leading-[22px] md:leading-[29px] max-w-3xl font-[600] mx-auto w-[323px] md:w-[779.50px]">
          Your body follows a natural circadian rhythm, responding to light and darkness to regulate sleep, energy, and overall well-being. With<span className='text-[16px] md:text-[20px] text-[#000000] leading-[22px] md:leading-[29px] max-w-3xl font-[600] mx-auto ml-2'>Curiousfly’s Circadian Lighting</span>
          , your home adapts to this rhythm—helping you wake up refreshed, stay productive during the day, and unwind naturally at night.
        </p>
      </div>
    </section>
  );
};

export default CircadianLighting;

