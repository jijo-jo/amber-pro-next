'use client';

import React from 'react';

interface SmartHomeSectionProps {
    videoSrc?: string;
    alttext: string;
    heading?: string;
    subHeading?: string;
}

const SmartHomeSection: React.FC<SmartHomeSectionProps> = ({ videoSrc, alttext, heading, subHeading }) => {
    return (
        <section className={`relative w-full h-screen md:h-[842.95px] flex items-center justify-center ${videoSrc ? '' : 'bg-[#D9D9D9]'} overflow-hidden px-4 sm:px-6`}>
            {videoSrc ? (
                <>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black bg-opacity-10" />
                </>
            ) : null}

            <div className="relative z-10 text-center max-w-[90%] sm:max-w-[80%] md:max-w-[60%]">
                <p className="text-black opacity-25 font-medium text-[24px] sm:text-[28px] md:text-[32px] leading-[32px] sm:leading-[48px] md:leading-[96px] tracking-[-1.5px] sm:tracking-[-2px] md:tracking-[-3px]">
                    {alttext}
                </p>

                <div>
                  {heading && (  <h1 className="text-[36px] sm:text-[56px] md:text-[78.91px] font-medium text-black leading-[48px] sm:leading-[72px] md:leading-[96px] tracking-[-1.5px] sm:tracking-[-2px] md:tracking-[-3px] max-w-full sm:max-w-[500px] md:max-w-[625.72px] mx-auto">
                        {heading}
                    </h1>)}
                    {subHeading && (
                        <p className="text-[16px] sm:text-[18px] md:text-[19.69px] font-[400] leading-[22px] sm:leading-[24px] md:leading-[26px] tracking-[-0.6px] sm:tracking-[-0.7px] md:tracking-[-0.8px] text-[#3030304D] mt-2 sm:mt-4">
                            {subHeading}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SmartHomeSection;
