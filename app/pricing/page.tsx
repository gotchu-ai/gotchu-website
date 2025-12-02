'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { MonthlyPricingData, AnnualPricingData } from '../utils/mock';
import Link from 'next/link';

const Page = () => {
  const [active, setActive] = useState('Monthly');

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 110, damping: 15 },
    },
  };

  

  const pricingList =
    active === 'Monthly' ? MonthlyPricingData : AnnualPricingData;

  return (
    <div className=' min-h-screen relative'>
      <Image
        src={'/circle_ellipse.png'}
        width={1200}
        height={827}
        alt='gradient'
        className='absolute top-[-10%] md:top-[-50%] md:scale-100 scale-200 left-[8%]'
      />

      <div className='flex flex-col items-center justify-center mt-[20%] md:mt-[8%] pb-[100px]'>
        <h3 className='font-semibold text-[35px]'>Our Pricing Plan</h3>
        <p className='text-[#0000008C] text-[20px] font-medium my-4'>
          Here’s what is our highlighted features
        </p>

        {/* Toggle Switch */}
        <div className='w-[340px] bg-white h-12 z-20 rounded-[30px] p-[5px] flex relative shadow'>
          <motion.div
            className='absolute top-1 left-1 h-10 w-[50%] bg-[#6615F2] rounded-[30px]'
            animate={{
              x: active === 'Monthly' ? '0%' : '96%',
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          />
          <button
            className={`flex-1 z-10 text-[12px] font-medium transition-colors duration-300 cursor-pointer ${
              active === 'Monthly' ? 'text-white' : 'text-black'
            }`}
            onClick={() => setActive('Monthly')}
          >
            Monthly
          </button>
          <button
            className={`flex-1 z-10 text-[12px] font-medium transition-colors duration-300 cursor-pointer ${
              active === 'Annually' ? 'text-white' : 'text-black'
            }`}
            onClick={() => setActive('Annually')}
          >
            Annually
          </button>
        </div>

        {/* Pricing Cards */}
        <motion.div
         className='z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row justify-center gap-6 mt-8 px-4'
         variants={containerVariants}
         initial='hidden'
         animate='visible'
         key={active}
        >
          {pricingList.map((card, index) => (
            <AnimatePresence key={card.id}>
              <motion.div
                className='flex-1 md:max-w-[362px] rounded-2xl shadow-lg bg-white'
                variants={cardVariants}
                initial='hidden'
                animate='visible'
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.25 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  boxShadow: '0 15px 40px rgba(102,21,242,0.25)',
                }}
              >
                <div className='w-full h-full px-6 pt-8 pb-6 flex flex-col gap-8 rounded-xl'>
                  <div>
                    <h3 className='font-semibold text-[#6615F2] text-[20px]'>
                      {card.title}
                    </h3>
                    <h3 className='text-[#0000008C] text-[18px]'>
                      {card.subTitle}
                    </h3>
                  </div>

                  {/* 🔥 Animated Price Change */}
                  <div className='relative h-[70px]'>
                    <AnimatePresence mode='wait'>
                      <motion.h3
                        key={active + card.id}
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.9 }}
                        transition={{ duration: 0.25 }}
                        className='absolute font-bold text-[#6615F2] text-[56px]'
                      >
                        ${card.pricing}{' '}
                        <span className='text-[#0000008C] text-[18px] font-medium'>
                          {card.duration}
                        </span>
                      </motion.h3>
                    </AnimatePresence>
                  </div>

                  <ul className='gap-2 flex flex-col'>
                    {card.features.map((e: string, i: number) => (
                      <li
                        key={i}
                        className='flex items-center text-[18px] text-[#000000] font-medium'
                      >
                        <Image
                          src={'/Checkmark.png'}
                          width={24}
                          height={24}
                          alt='icon'
                        />
                        {e}
                      </li>
                    ))}
                  </ul>

                  <Link href='https://www.facebook.com/gotchucloud' target='_blank'>
                    <motion.button
                      className={`relative z-10 w-full h-12 rounded-xl text-[18px] font-medium cursor-pointer text-black border-2 border-[#00000026] ${
                        index === 1
                          ? 'bg-[#6615F2] border-[#6615F2] text-white'
                          : 'bg-white'
                      }`}
                      whileHover={{
                        scale: 1.05,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      Sign up
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
