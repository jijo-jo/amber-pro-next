import Image from 'next/image';
import React from 'react';
import doorstepImage from "../assests/doorstepImage.png"


const DoorViewComponent: React.FC = () => {
  return (
    <div className="bg-black text-white py-16 flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl md:text-[78.91px] font-medium mb-4 w-full md:max-w-[830.55px] leading-[96px] tracking-[-3px]">
          {`See Who's at Your Door From Anywhere!`}
        </h1>
        <p className="text-sm md:text-[19.69px] font-[400] leading-[26px] tracking-[-0.8px] text-[#FFFFFFB5] w-full md:max-w-[603.49px] text-center mx-auto">
          {`Whether you're home or away, you can monitor and communicate with visitors at your doorstep seamlessly.`}
        </p>
      </div>

      <div className="relative mt-10 flex justify-center items-center">
          <Image src={doorstepImage} alt="Phone 1" width={1080} height={1080} />
      </div>
    </div>
  );
};

export default DoorViewComponent;