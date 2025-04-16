'use client';

import Image from 'next/image';
import climatetop from "../assests/climatetop1.jpeg"
import climatephone from "../assests/climatetop2.png"

const InitialPage = () => {
  return (
    <section className="w-full bg-black text-white mt-20">
      <div className="relative w-full h-[500px] md:h-[600px]">
        <div className="relative w-full h-[382.62px]">
          <Image
            src={climatetop}
            alt="Lighting and Shades Background"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center px-4 mt-10">
          <h2 className="text-[36px] md:text-[64px] leading-[57.2px] md:leading-[96px] tracking-[-2px] md:tracking-[-3px] font-medium mb-4">Climate Control</h2>
          <p className="w-[345px] md:w-[634.62px] text-[12px] md:text-[13.89px] font-[400] leading-[19.2px] md:leading-[26px] tracking-[0%] md:tracking-[-0.8px] mb-6 text-[#FFFFFFC2]">
          Whether you&apos;re relaxing at home or away on vacation, our system ensures the perfect environment automatically adjusting to your preferences, saving energy, and enhancing comfort.
          </p>
          <button className="bg-white text-black px-6 py-2 rounded-full text-[15.88px] font-medium hover:bg-gray-200 transition">
            Explore
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 text-center mt-10">
        <div className="relative w-full max-w-3xl mx-auto h-auto  aspect-[1.5/1] md:aspect-[2/1] mb-16 mt-16 md:mt-8">
          <Image
            src={climatephone}
            alt="Smartphone RGB Controls"
            className="object-cover w-full h-full"
          />
        </div>
        <p className="text-[16px] md:text-[20px] text-[#757575] w-[327.36px] md:w-[771.55px] mx-auto leading-[22px] md:leading-[29px] font-[600] mb-16">
        Whether you&apos;re using a centralized HVAC system or standard split/room air conditioners, Curiousfly brings them all under one smart control giving you
          <span className="text-[16px] md:text-[20px] text-[#FFFFFF] ml-1 leading-[22px] md:leading-[29px] font-[600]">unmatched comfort, convenience, and energy savings through a unified platform.</span>
          With Curiousfly’s HVAC and AC integration, experience climate control that’s intelligent, efficient, and tailored to your lifestyle no matter what cooling system you use.
        </p>
      </div>
    </section>
  );
};

export default InitialPage;