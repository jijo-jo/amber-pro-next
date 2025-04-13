import React from 'react';
import Image from 'next/image';
import leftgridImage from '../assests/securitygrid1.png';
import rightgridImage from '../assests/securitygrid2.png';

const SecurityFeatures: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch bg-black text-white gap-6 px-4 py-8">
      {/* Left Card */}
      <div className="flex-1 rounded-[24px] bg-[radial-gradient(114.96%_93.08%_at_72.06%_58.95%,_#000000_0%,_#3C001A_100%)] p-6 md:p-10 flex flex-col justify-between max-w-[650px]">
        <div>
          <h2 className="text-[28px] md:text-[31.75px] font-medium leading-[35.2px] tracking-[-1.28px] mb-3">
            Secure Your Home with a Single Tap
          </h2>
          <p className="text-[15.75px] text-white opacity-70 leading-[22.4px] tracking-[-0.64px] mb-6">
            Activates all sensors and cameras for full protection when no one is home. Receive instant notifications on your phone once the system is armed or if an entry point is breached. Keep your home secure and your mind at ease.
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <Image
            src={leftgridImage}
            alt="Secure Home Graphic"
            className="w-full max-w-[407px] h-auto"
          />
        </div>
      </div>

      {/* Right Card */}
      <div className="flex-1 rounded-[24px] bg-[radial-gradient(86.82%_80.51%_at_48.84%_61.96%,_#000000_0%,_#035231_100%)] p-6 md:p-10 flex flex-col justify-between max-w-[650px]">
        <div>
          <h2 className="text-[28px] md:text-[32px] font-medium leading-[35.2px] tracking-[-1.28px] mb-4">
            Disarm Your Security System Effortlessly
          </h2>
          <p className="text-[15.75px] text-white opacity-70 leading-[22.4px] tracking-[-0.64px] mb-6">
            Open the Curiously app to disarm remotely, perfect for letting in trusted visitors while you&apos;re away. Receive alerts when the system is disarmed, letting you know exactly who accessed your home and when.
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <Image
            src={rightgridImage}
            alt="Disarm System Graphic"
            className="w-full max-w-[455px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default SecurityFeatures;