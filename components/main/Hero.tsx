import React from 'react';
import HeroContent from '../sub/HeroContent';

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full mt-[-55rem] md:mt-0'id='hero'>
      <video
        autoPlay
        muted
        loop
        className='rotate-180 absolute top-[-390px] left-0 z-[1] w-full h-full object-cover md:top-[-340px]'
      >
        <source src='/blackhole.webm' type='video/webm' />
      </video>
      <HeroContent />
    </div>
  );
}

export default Hero;