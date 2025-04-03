'use client';
import Image from 'next/image';

import React from 'react';

interface PlaylistCardProps {
  imageUrl: string;
  altText: string;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ imageUrl, altText }) => {
  return (
    <div className="w-24 md:w-40">
      <Image
        src={imageUrl}
        alt={altText}
        className="rounded-lg object-cover w-full"
        width={80}
        height={80}
      />
    </div>
  );
};

export default PlaylistCard;
