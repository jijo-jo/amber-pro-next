'use client';

import Image from 'next/image';
import doorstep from "../assests/doorstep.jpeg"
import phoneImage from "../assests/image (5) (1).png"

const MoodScene = () => {
  return (
    <section className="w-full bg-black py-12 md:py-20 px-4 md:px-12 mt-10 ">
      <div className="flex flex-col justify-center max-w-7xl mx-auto text-center text-white mb-12">
        <h2 className="text-[36px] md:text-[64px] font-medium leading-[44px] md:leading-[96px] tracking-[-2px] md:tracking-[-3px] mb-4 text-[#FFFFFF]">
          Mood-Based Ambiance and scenes
        </h2> 
        <p className="text-sm md:text-[13.89px] font-[400] leading-[26px] tracking-[-0.8px] text-[#FFFFFFC2] w-[345px] md:w-[634.62px] mx-auto">
          Set the tone for every moment. From a relaxing evening to a vibrant celebration, create the perfect atmosphere with customizable lighting scenes.
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 my-8">
        <div className="relative w-[260px] sm:w-[280px] md:w-[300px] h-[600px]">
          <Image
            src={phoneImage}
            alt="Mobile UI for Mood Scene"
            className="object-contain w-full h-full"
          />
        </div>

        <div className="relative w-full md:w-[867px] h-[575px] rounded-xl overflow-hidden">
          <Image
            src={doorstep}
            alt="Room Ambiance"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

    </section>
  );
};

export default MoodScene;

