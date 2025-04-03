import React from 'react';
import Image from 'next/image';
import leftgridImage from "../assests/securitygrid1.png"
import rightgridImage from "../assests/securitygrid2.png"


const SecurityFeatures: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center bg-black text-white">
            <div className="w-full md:w-[650px] h-auto rounded-[24px]">
                <div className="bg-[radial-gradient(114.96%_93.08%_at_72.06%_58.95%,_#000000_0%,_#3C001A_100%)] rounded-2xl p-8 md:p-12">
                    <h2 className="text-[31.75px] font-medium leading-[35.2px] tracking-[-1.28px] mb-3">
                        Secure Your Home with a Single Tap
                    </h2>
                    <p className="text-[15.75px] font-[400] text-white mb-6 leading-[22.4px] tracking-[-0.64px] opacity-70">
                        Activates all sensors and cameras for full protection when no one is home. Receive instant notifications on your phone once the system is armed or if an entry point is breached. Keep your home secure and your mind at ease.
                    </p>
                    <Image src={leftgridImage} alt="left grid" width={407} height={381}/>

                </div>
            </div>

            <div className="w-full md:w-[650px] p-8 md:p-12 rounded-[24px]">
                <div className="bg-[radial-gradient(86.82%_80.51%_at_48.84%_61.96%,_#000000_0%,_#035231_100%)] rounded-2xl p-8">
                    <h2 className="text-[32px] font-medium leading-[35.2px] tracking-[-1.28px] mb-4">
                        Disarm Your Security System Effortlessly
                    </h2>
                    <p className="text-[15.75px] font-[400] text-white mb-3 leading-[22.4px] tracking-[-0.64px] opacity-70">
                        {`Open the Curiously app to disarm remotely, perfect for letting in trusted visitors while you're away. Receive alerts when the system is disarmed, letting you know exactly who accessed your home and when.`}
                    </p>
                    <Image src={rightgridImage} alt="right grid" width={455.43} height={400} className='items-center h-[400px]'/>
                </div>
            </div>
        </div>
    );
};

export default SecurityFeatures;