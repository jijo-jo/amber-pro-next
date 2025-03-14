'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Iphone1 from '../assests/image1.png';
import Iphone2 from '../assests/image2.png';
import Iphone3 from '../assests/image3.png';
import Iphone4 from '../assests/image4.png';

const images = [Iphone1, Iphone2, Iphone3, Iphone4];

const SmartDashboard: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col px-2 py-12 w-full overflow-hidden">
      <div className="w-full text-left">
        <h2 className="font-inter font-medium text-[44px] md:text-[64px] leading-[57.2px] tracking-[-2px] align-middle pl-8 md:pl-[77px]">
          Control your home, anytime, anywhere.
        </h2>
      </div>

      {/* Image Gallery Section */}
      <div className="relative mt-10 w-full max-w-7xl flex items-center justify-center">
        <div
          className="flex md:grid md:grid-cols-4 gap-4 md:gap-2 overflow-x-auto md:overflow-hidden scroll-smooth no-scrollbar"
          style={{
            scrollSnapType: 'x mandatory',
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="w-[320px] h-[420px] md:w-[400px] md:h-[500px] flex-shrink-0"
              style={{ scrollSnapAlign: 'start' }}
            >
              <Image
                src={src}
                alt={`Smart Home Dashboard ${index + 1}`}
                className="w-full h-full rounded-xl shadow-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center'>
      <DownloadSection />
      </div> 
    </div>
  );
};

const DownloadSection: React.FC = () => {
  return (
    <div className="text-center text-[#757575] px-6 mt-16 max-w-3xl mx-auto">
      <p className="font-inter font-medium text-[21px] leading-[29px] tracking-[-2px] text-center align-middle">
        The Curiousfly App is your ultimate smart home companion, providing seamless control over
        lighting, climate, security, entertainment, and energy management -{' '}
        <span className="text-white font-medium text-[21px] leading-[29px] text-center">
          all from your smartphone.
        </span>
        Designed for convenience and efficiency, the app allows you to automate routines, monitor
        real-time energy usage, and manage your home remotely with just a tap.
      </p>
      <div className="flex flex-col items-center md:flex-row md:justify-around gap-4 mt-6">
        <Link href="/" className="font-inter font-medium text-[16px] text-[#00B7E1] hover:underline">
          Download for iOS &gt;
        </Link>
        <Link href="/" className="font-inter font-medium text-[16px] text-[#00B7E1] hover:underline">
          Download for Android &gt;
        </Link>
      </div>
    </div>
  );
};

export default SmartDashboard;







