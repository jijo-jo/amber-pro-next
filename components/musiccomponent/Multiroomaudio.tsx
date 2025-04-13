'use client';

import Image from 'next/image';
import planimage from "../assests/Group 49.png"

const MultiRoomAudio: React.FC = () => {

  return (
    <section className="bg-black text-white py-20 px-4 md:px-12 text-center flex flex-col items-center">
      <p className="uppercase text-[16px] font-medium leading-[19.2px] tracking-[1.92px] text-[#FFFFFF] mb-2">Multi Room Audio</p>

      <h2 className="text-[36px] md:text-[64px] font-medium leading-[43px] md:leading-[70px] tracking-[-2px] md:tracking-[-3px] mb-10 text-center bg-gradient-to-r from-[#FFFFFF] to-[#999999] text-transparent bg-clip-text">
        Music for every room,<br className="hidden md:block" />
        <span className="">every occasion.</span>
      </h2>

      <div className="relative w-full max-w-[985px] aspect-square mb-10">
        <Image
          src={planimage}
          alt="Floor Plan"
          fill
          className="object-contain"
        />
      </div>

      <p className="text-[16px] md:text-[20px] font-[600] text-[#757575] max-w-[327.359px] md:max-w-[742.537px] leading-[22px] md:leading-[29px]">
        Transform your home into a seamless soundscape with our Multi-Room Audio System.
        Whether you&apos;re entertaining guests, relaxing in the bedroom, or cooking in the kitchen,&nbsp;
        <span className="text-white">enjoy high-quality sound everywhere</span>,
        all at once or in individual zones.
      </p>
    </section>
  );
};

export default MultiRoomAudio;
