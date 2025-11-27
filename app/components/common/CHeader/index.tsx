'use client';
import Image from 'next/image';
import React from 'react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      when: 'beforeChildren',
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const CHeader = () => {
  return (
    <motion.header
      className='flex justify-center items-center  px-16 h-[122px] xl:h-[83px] fixed left-0 right-0 top-0 z-[999] mb backdrop-blur-md bg-transparent '
      variants={containerVariants}
      initial='hidden'
      animate='show'
    >
      <div className='container mx-auto items-center flex gap-4 xl:gap-0 flex-col lg:flex-row justify-between'>
        {/* Logo */}
        <motion.div
          className='flex items-center justify-center gap-2 cursor-pointer'
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            rotate: -1,
            transition: { type: 'spring', stiffness: 300, damping: 15 },
          }}
        >
          <motion.div
            whileHover={{ scale: 1.15, rotate: 3 }}
            transition={{ type: 'spring', stiffness: 250 }}
          >
            <Image src='/gotchu.png' width={25} height={32} alt='logo' />
          </motion.div>
          <h3 className='font-semibold text-[24px]'>GotchuAI</h3>
        </motion.div>

        {/* Navigation */}
        <motion.ul
          className='flex items-center gap-6'
          variants={containerVariants}
        >
          {['Features', 'Pricing', 'Contact Us'].map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -2,
                scale: 1.04,
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                },
              }}
              className='cursor-pointer font-medium'
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.header>
  );
};

export default CHeader;
