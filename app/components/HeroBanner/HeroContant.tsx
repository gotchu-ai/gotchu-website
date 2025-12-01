'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const HeroContant = () => {
  return (
    <div className='max-w-[1040px] relative text-center flex items-center justify-center flex-col'>
      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className='relative text-black text-[54px]  md:text-[64px] font-normal drop-shadow-xl leading-[70px]'
      >
        Deliver memorable customer experiences.
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
        className='relative text-[#636363] text-[16px] px-4 md:text-[18px] max-w-[628px] mt-7 mx-auto'
      >
        Deliver memorable customer experiences. Create, publish, and measure
        every interaction from one effortless dashboard
      </motion.p>

      {/* Button with aura */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
        className='relative w-[256px] h-[70px] mx-auto mt-10 mb-4 flex items-center justify-center'
      >
        {/* Gradient aura radiating outward */}
        <motion.div
          className='absolute inset-0 rounded-[10px]'
          style={{
            background:
              'radial-gradient(circle, rgba(199,172,255,0.6) 40%, rgba(199,172,255,0) 80%)',
          }}
          animate={{
            scale: [1, 1.8],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 2.5,
            ease: 'easeOut',
            repeat: Infinity,
            repeatType: 'loop',
          }}
        />

        <motion.div
          className='absolute inset-0 rounded-[10px]'
          style={{
            background:
              'radial-gradient(circle, rgba(199,172,255,0.4) 0%, rgba(199,172,255,0) 70%)',
          }}
          animate={{
            scale: [1, 1.5],
            opacity: [0.4, 0],
          }}
          transition={{
            duration: 3,
            ease: 'easeOut',
            repeat: Infinity,
            repeatType: 'loop',
          }}
        />

        <Link href='https://www.facebook.com/gotchucloud' target='_blank'>
          <motion.button
            className='relative z-10 w-[236px] h-[50px] bg-[#6615F2] rounded-[10px] text-[18px] text-white font-medium cursor-pointer'
            whileHover={{
              scale: 1.02,
              boxShadow: '0 0 20px rgba(199,172,255,0.7)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            Join Now!
          </motion.button>
        </Link>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
        className='z-20'
      >
        <Image
          alt='preview platform'
          width={1040}
          height={300}
          src={'/preview.png'}
        />
      </motion.div>
    </div>
  );
};

export default HeroContant;
