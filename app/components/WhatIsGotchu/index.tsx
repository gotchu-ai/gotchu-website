'use client';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

const WhatIsGotchu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  const content = [
    {
      img: '/whatIsGotchu/one.png',
      title: 'Set up your community space',
      text:
        'Create your Gotchu workspace, add your members, and customize branding, roles, and permissions in a few clicks.',
    },
    {
      img: '/whatIsGotchu/two.png',
      title: 'Launch challenges & rewards',
      text:
        'Create challenges, assign XP and coins, set up badges and store rewards, and connect chat rooms to keep everyone engaged.',
    },
    {
      img: '/whatIsGotchu/three.png',
      title: 'Track engagement & grow',
      text:
        'See who’s active, how squads perform, and what drives engagement — then optimize your community with confidence.',
    },
  ];

  return (
    <div ref={ref} className='container mx-auto text-center py-12 px-8'>
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
        className='text-[35px] font-semibold'
      >
        What is Gotchu?
      </motion.h3>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 35 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 1.1, ease: 'easeOut' }}
        className='mt-6 text-[24px] text-[#0000008C]'
      >
        Connect, manage, and analyze Facebook, Instagram, YouTube, TikTok, and
        more — all from one place. Save hours each week and boost engagement
        with consistency.
      </motion.p>

      {/* Cards */}
      <motion.div
        className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-8'
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.35,
              delayChildren: 1.2,
            },
          },
        }}
      >
        {content.map((item, i) => (
          <motion.div
            key={i}
            className='flex items-center justify-center flex-col gap-2.5'
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <Image src={item.img} width={153} height={15} alt={item.title} />
            <h3 className='mt-3 font-semibold text-[16px]'>{item.title}</h3>
            <p className='text-[15px] text-[#6F6F6F]'>{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WhatIsGotchu;
