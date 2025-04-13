'use client';

import Image from 'next/image';
import bgsettingimage from "../assests/musicbgimage1.jpeg"

const HeroEntertain = () => {
    return (
        <>
            <section className="relative h-[100vh] w-full overflow-hidden flex items-center justify-center">

                <Image
                    src={bgsettingimage}
                    alt="Entertain bg"
                    fill
                    priority
                    className="object-cover z-0 opacity-[62%]"
                />

                <div className="absolute inset-0 bg-black/40 z-10" />

                <div className="relative z-20 text-center px-4 md:px-0">
                    <p className="uppercase text-[16px] text-white font-medium leading-[19.2px] tracking-[1.92px] mb-2">MULTI ROOM VIDEO</p>
                    <h1 className="text-[36px] md:text-[64px] font-medium text-white leading-[44px] md:leading-[66px] tracking-[-2px] md:tracking-[-3px]">
                        Entertainment,<br className="hidden sm:block" />
                        Uninterrupted
                    </h1>
                </div>
            </section>

            <div className="mt-10 text-center text-gray-400 px-4 md:px-0 w-[327.36px] md:w-[742.54px]">
                <p className="text-[16px] md:text-[20px] font-[600] leading-[22px] md:leading-[29px] text-[#757575]">
                    With our Multi-Room Video Solution, you can <span className="text-[16px] md:text-[20px] font-[600] leading-[22px] md:leading-[29px] text-[#FFFFFF]">enjoy your favorite content movies, shows, sports, and more from any room in your home</span> , with complete control and zero clutter.
                </p>
            </div>
        </>
    );
};

export default HeroEntertain;