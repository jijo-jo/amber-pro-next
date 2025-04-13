'use client';
import React from 'react';
import Image from 'next/image';
import album1 from '../assests/album1.jpeg'; 
import album2 from '../assests/album2.jpeg'; 
import album3 from '../assests/album3.jpeg'; 
import album4 from '../assests/album4.jpeg'; 
import audioPlayer from '../assests/playlist.png'; 

const PlaylistsSection: React.FC = () => {
  return (
    <section className="bg-black py-16 md:py-24 text-white text-center px-4">
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 justify-items-center">
        {[album1, album2, album3, album4].map((album, index) => (
          <div
            key={index}
            className="rounded-md shadow-md w-[160px] md:w-[241.639px] lg:w-[333.41px] aspect-square overflow-hidden group group-hover:scale-150"
          >
            <Image
              src={album}
              alt={`Album ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      <h2 className="text-[28px] md:text-[64px] font-medium leading-snug tracking-tight mb-6">
        Playlists to match your vibe
      </h2>

      <p className="mx-auto text-[12px] md:text-[19.69px] font-normal text-[#FFFFFFB5] leading-[19.2px] md:leading-[26px] tracking-tight mb-8 max-w-[320px] md:max-w-[640px]">
        Whether it’s an upbeat playlist to energize your day or calming melodies to ease into your routine, the choice is yours.
      </p>

      <div className="w-full max-w-[726px] mx-auto shadow-lg rounded-lg overflow-hidden">
        <Image
          src={audioPlayer}
          alt="Audio Player"
          className="w-full h-auto"
          priority 
        />
      </div>
    </section>
  );
};

export default PlaylistsSection;
