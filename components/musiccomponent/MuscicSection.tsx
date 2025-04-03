import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  logos: { src: string; alt: string }[];
}

const MusicSection: React.FC<HeroSectionProps> = ({ title, subtitle, logos }) => {
  return (
    <div className="bg-black text-white py-20 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 text-lg sm:text-xl leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-10 flex justify-center space-x-8">
          {logos.map((logo) => (
            <div key={logo.alt} className="w-20 h-20 relative">
              <Image src={logo.src} alt={logo.alt} layout="fill" objectFit="contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicSection;