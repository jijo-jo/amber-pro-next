'use client';

import Image from 'next/image';
import PhoneImage from '../assests/musicflow.png';

const MusicFlow: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center px-4 md:px-10 py-20 bg-white w-full">
            <h1 className="text-[36px] md:text-[64px] font-medium leading-[43px] md:leading-[72px] tracking-[-2px] md:tracking-[-3px] text-black mb-4">
                Let Music Flow<br className="hidden md:block" />
                Through Your Home
            </h1>
            <p className="text-[#00000094] opacity-50 text-[12px] md:text-[13.89px] font-[400] md:font-medium leading-[19.2px] md:leading-[19px] w-[345px] md:w-[609.27px] mb-10">
            Play soft tunes in the bedroom, lively beats in the living room, and a podcast in the study—each room tailored to its occupants.
            </p>

            <div className="relative w-full max-w-[367.94px] md:max-w-[1148px]">
                <Image
                    src={PhoneImage}
                    alt="Music App Interface"
                    className="w-full"
                    priority
                />
            </div>
        </section>
    );
};

export default MusicFlow;