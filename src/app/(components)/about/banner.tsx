import React from 'react';
import aboutBanner from '../../../../public/assets/about-banner.png';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[650px]">
      <Image
        src={aboutBanner}
        alt="Banner"
        fill
        priority
        sizes="100vw"
        className="object-fill"
      />
    </div>
  );
};

export default Banner;