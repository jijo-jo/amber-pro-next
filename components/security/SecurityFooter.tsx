'use client';

import Image from 'next/image';
import iphoneframe from "../assests/securityiphoneframe.png"
import backgroundsec from "../assests/securitybackground.png"
import lockwhite from "../assests/lockwhite.svg"

const SurveillancePreview = () => {
    return (
        <section className="flex flex-col gap-24 items-center justify-center text-white bg-black py-10 px-4">
            <p className="max-w-[327.36px] md:max-w-[771.556px] text-center text-[16px] md:text-[20px] leading-[22px] md:leading-[29px] font-[600] text-[#757575] mt-16">
                With Curiousfly’s smart home ecosystem, your smart door lock seamlessly integrates with the Curiousfly App, allowing you to <span className="text-white">unlock and manage access from anywhere in the world</span>
                —all with a single tap. Experience unmatched security, convenience, and total remote control—wherever you are in the world.
            </p>

            <div className="relative bg-[#E8E8E8] flex items-center px-1 py-1 rounded-full w-full md:w-[688.64px] cursor-pointer mb-8 h-[60px] md:h-[110px]">
                <div className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-[#4CAF50] rounded-full w-[46px] md:w-[102px] h-[46px] md:h-[102px] flex items-center justify-center">
                    <Image src={lockwhite} alt="lock icon" className="w-6 h-6 md:w-10 md:h-10 object-contain" />
                </div>

                <div className="flex-1 text-center">
                    <span className="text-gray-700 font-[400] text-[12px] md:text-[24px] leading-[96px]">Slide to unlock</span>
                </div>
            </div>


            <div className="relative w-[350px] h-[200px] md:w-[600px] md:h-[340px]">
                <Image
                    src={backgroundsec}
                    alt="Room background"
                    fill
                    className="object-cover rounded-lg"
                />
                <Image
                    src={iphoneframe}
                    alt="iPhone frame"
                    fill
                    className="object-contain pointer-events-none"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-2xl md:text-4xl font-bold">Surveillance</h2>
                </div>
                <div className="absolute bottom-4 right-4 text-sm text-white">
                    01-01-2025 &nbsp; Fri &nbsp; 11:31:25
                </div>
            </div>

            <p className="max-w-[327.36px] md:max-w-[809.99px] text-center text-[16px] md:text-[20px] leading-[22px] md:leading-[29px] font-[600] text-[#757575] mt-16">
                Enhance your home security with Curiousfly’s seamless <span className="text-white">CCTV camera integration</span>,
                smart alerts, and remote access all controlled effortlessly through the Curiousfly App.Enjoy peace of mind with 24/7 smart surveillance, ensuring your home is always secure, no matter where you are.
            </p>
        </section>
    );
};

export default SurveillancePreview;
