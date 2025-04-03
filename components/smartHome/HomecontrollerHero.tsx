'use client';

import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ProductShowcaseProps {
    productImage: StaticImageData;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ productImage }) => {
    return (
        <section className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 sm:px-12 my-20">
            <p className="text-center text-sm md:text-[32px] text-white leading-[96px] tracking-[-3px] mb-8 font-medium">Product image</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left w-full max-w-5xl">
                <p className="text-lg md:text-[31.75px] font-medium leading-[38.4px] tracking-[-0.64px]">
                    Coordinate lighting, music, and curtains for an immersive atmosphere
                </p>
                <p className="text-lg md:text-[31.75px] font-medium leading-[38.4px] tracking-[-0.64px]">
                    Control surveillance cameras, motion sensors, and alarms from a single point.
                </p>
            </div>
            <div className="flex flex-row gap-12 mt-36">
                <div className="relative w-full max-w-lg flex items-center justify-center mt-10">
                    <Image
                        src={productImage}
                        alt="Smart Home Device"
                        width={922.25}
                        height={773.69}
                        className="object-cover"
                    />
                </div>
                <div className="mt-10 text-center sm:text-left w-full max-w-lg space-y-6">
                    <div>
                        <h2 className="text-[31.75px] text-white font-medium leading-[38.4px] tracking-[-0.64px]">Centralized Management</h2>
                        <p className="text-[19.69px] text-[#FFFFFF66] font-[400] leading-[26px] tracking-[-0.8px]">
                            Acts as the core processor for all connected devices, ensuring smooth communication and operation.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-[31.75px] text-white font-medium leading-[38.4px] tracking-[-0.64px]">Universal Compatibility</h2>
                        <p className="text-[19.69px] text-[#FFFFFF66] font-[400] leading-[26px] tracking-[-0.8px]">
                            Works with popular voice assistants like Alexa, Google Assistant, and Siri for hands-free control.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-[31.75px] text-white font-medium leading-[38.4px] tracking-[-0.64px]">Secure and Reliable</h2>
                        <p className="text-[19.69px] text-[#FFFFFF66] font-[400] leading-[26px] tracking-[-0.8px]">
                            Built-in safeguards to protect against unauthorized access or cyber threats.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
