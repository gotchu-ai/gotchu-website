'use client';
import React, { useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import HeroContant from './HeroContant';
import Image from 'next/image';

const HeroBanner = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  //@ts-ignore
  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30; // smaller multiplier for subtlety
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  return (
    <section
      className='relative min-h-[589px]   overflow-hidden flex items-start pt-[120px] justify-center mt-[40px] lg:mt-[100px]'
      onMouseMove={handleMouseMove}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className='absolute inset-0 w-full h-full object-cover '
      >
        <source src='/aura.mp4' type='video/mp4' />
      </video>

      {/* Overlay */}
      <div className='absolute inset-0 bg-[linear-gradient(to_bottom,white_0%,rgba(255,255,255,0.9)_30%,rgba(255,255,255,0.5)_60%,rgba(255,255,255,0.1)_100%)]'></div>

      {/* Foreground Title */}
      <HeroContant />

      {/* Social Icons */}
      {[
        {
          src: '/hero/x.png',
          alt: 'x',
          top: 'top-8',
          left: 'left-[15%]',
          factor: 1,
        },
        {
          src: '/hero/instagram.png',
          alt: 'instagram',
          top: 'top-8',
          right: 'right-[15%]',
          factor: -1,
        },
        {
          src: '/hero/youtube.png',
          alt: 'youtube',
          top: 'top-[370px]',
          left: 'left-[15%]',
          factor: 0.5,
        },
        {
          src: '/hero/facebook.png',
          alt: 'facebook',
          top: 'top-[370px]',
          right: 'right-[15%]',
          factor: -0.5,
        },
        {
          src: '/hero/threat.png',
          alt: 'threat',
          top: 'top-[220px]',
          left: 'left-[7%]',
          factor: 0.3,
        },
        {
          src: '/hero/tiktok.png',
          alt: 'tiktok',
          top: 'top-[220px]',
          right: 'right-[7%]',
          factor: -0.3,
        },
      ].map(({ src, alt, top, left, right, factor }, i) => {
        // Motion values for dynamic mouse movement
        const x = useMotionValue(0);
        const y = useMotionValue(0);

        // Update motion values whenever mouse moves
        React.useEffect(() => {
          x.set(mousePos.x * factor);
          y.set(mousePos.y * factor);
        }, [mousePos.x, mousePos.y, factor, x, y]);

        return (
          <motion.div
            key={i}
            className={`absolute hidden lg:block ${top} ${left ?? ''} ${right ?? ''}`}
            initial={{ opacity: 0, scale: 0.5 }} // initial load animation
            animate={{ opacity: 1, scale: 1 }} // load complete
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ x, y }} // separate dynamic cursor animation
          >
            <Image src={src} width={60} height={60} alt={alt} />
          </motion.div>
        );
      })}

      <Image
        alt='line'
        width={500}
        height={500}
        src={'/hero/line.png'}
        className='absolute hidden xl:block bottom-[60px] left-[2%] z-30'
      />
      <Image
        alt='line'
        width={500}
        height={500}
        src={'/hero/line.png'}
        className='absolute hidden xl:block bottom-[150px] left-[10%] z-30'
      />

      <Image
        alt='line'
        width={500}
        height={500}
        src={'/hero/lineright.png'}
        className='absolute hidden xl:block bottom-[60px] right-[2%] z-30'
      />
      <Image
        alt='line'
        width={500}
        height={500}
        src={'/hero/lineright.png'}
        className='absolute hidden xl:block bottom-[150px] right-[10%] z-30'
      />
    </section>
  );
};

export default HeroBanner;
