'use client';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

const KeyFeatures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  const features = [
    { title: 'AI Suggestions', icon: '/polygon.png', text: 'Ideas and copy from trends.' },
    { title: 'Cross Platform', text: 'Publish everywhere easily.' },
    { title: 'Report & Analysis', text: 'Track performance smartly.' },
    { title: 'Multi-Branch Access', text: 'Manage multiple communities.' },
    { title: 'Smart Scheduling', text: 'Stay consistent automatically.' },
    { title: 'Community Rewards', text: 'Boost engagement with incentives.' },
  ];

  return (
    <div ref={ref} className='container mx-auto w-[100svw] overflow-hidden text-center py-12 px-8 relative'>
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        className='text-[35px] font-semibold text-black'
      >
        Key Features
      </motion.h3>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.35, duration: 0.6 }}
        className='text-[20px] mt-3 text-[#0000008C] mb-10'
      >
        Here’s what is our highlighted features
      </motion.p>

      {/* Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center'>
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.7 + i * 0.2,
              duration: 0.6,
              ease: 'easeOut',
            }}
            whileHover={{ scale: 1.03 }} // smooth hover without layout shift
            className={`rounded-2xl bg-white w-full drop-shadow-md z-20 p-5 flex flex-col items-start border-2
              ${
                i === 0
                  ? 'border-[#6615F2] bg-linear-to-r from-[#C0ACFFA1] to-white'
                  : 'border-white hover:border-[#6615F2]'
              }
            `}
          >
            <div className='flex items-center gap-1'>
              <h3 className='font-semibold'>{item.title}</h3>
              {item.icon && (
                <Image src={item.icon} width={18} height={18} alt='icon' />
              )}
            </div>

            <p className='text-[#6F6F6F] text-[14px] mt-1'>{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* BG Gradient */}
      <Image
        alt='gradient'
        src={'/Ellipse.png'}
        className='absolute top-0 z-[-1] w-full'
        width={500}
        height={300}
      />
    </div>
  );
};

export default KeyFeatures;
