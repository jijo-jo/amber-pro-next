import React from 'react';
import Image from 'next/image';

interface LogoProps {
  src: string;
  alt: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt }) => {
  return (
    <div className="w-20 h-20 relative">
      <Image src={src} alt={alt} layout="fill" objectFit="contain" />
    </div>
  );
};

export default Logo;