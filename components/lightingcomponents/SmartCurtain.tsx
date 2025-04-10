'use client';

import React from 'react';
import { motion } from 'framer-motion';

import Image from 'next/image';
import openIcon from '../assests/blueopen.svg';
import stopIcon from '../assests/stop.svg';
import closeIcon from '../assests/closegrey.svg';


const CurtainControl = () => {
  const progress = 60; 
  const progressBarInnerStyle = {
    width: `${progress}%`,
  };

  return (
    <motion.div
      className="bg-[#1A1A1A] rounded-2xl p-6 md:p-8 w-full max-w-md mx-auto shadow-xl border border-gray-800 mt-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-white text-xl md:text-2xl font-semibold mb-6 text-center">
        Curtain Control
      </h2>

      <div className="flex justify-between items-center gap-6 mb-8">
        <div className="flex-1 flex flex-col items-center space-y-2">
          <div className="bg-[#002B50] p-6 rounded-full transition opacity-[58%]">
            <Image src={openIcon} alt="Open Curtains" width={45.47} height={45.47} />
          </div>
          <span className="text-sm text-white">Open</span>
        </div>

        <div className="flex-1 flex flex-col items-center space-y-2">
          <div className="bg-[#383838] p-4 rounded-full transition">
            <Image src={stopIcon} alt="Stop Curtains" width={11.47} height={11.47} />
          </div>
          <span className="text-sm text-white">Stop</span>
        </div>

        <div className="flex-1 flex flex-col items-center space-y-2">
          <div className="bg-[#383838] p-6 rounded-full transition opacity-[58%]">
            <Image src={closeIcon} alt="Close Curtains" width={45.47} height={45.47} />
          </div>
          <span className="text-sm text-white">Close</span>
        </div>
      </div>

      <div className="w-full bg-[#464646] h-[25.78px] rounded-full overflow-hidden relative mt-8">
        <motion.div
          className="h-full bg-[#0064BC] rounded-full absolute top-0 left-0"
          style={progressBarInnerStyle}
          layout
        />
      </div>
    </motion.div>
  );
};

const CurtainControlDescription: React.FC = () => (
  <div className="mt-20 text-center text-gray-400 px-4 md:px-0 w-[327.36px] md:w-[742.54px]">
    <p className="text-[16px] md:text-[20px] font-[600] leading-[22px] md:leading-[29px] text-[#757575]">
      Blinds and curtains do more than just add style and privacy. By <span className="text-[16px] md:text-[20px] font-[600] leading-[22px] md:leading-[29px] text-[#FFFFFF]">controlling the amount, direction, and quality of natural light</span> entering a space, smart window treatments help you set the perfect mood from soft ambient glow to complete blackout.
    </p>
  </div>
);

const SmartCurtainControlPage: React.FC = () => (
  <div className="flex flex-col items-center justify-center p-4">
    <CurtainControl />
    <CurtainControlDescription />
  </div>
);

export default SmartCurtainControlPage;