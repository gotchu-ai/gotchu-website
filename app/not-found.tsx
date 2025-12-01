'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Notfound = () => {
  return (
    <motion.div
      className='bg-white flex flex-col min-h-screen items-center justify-center gap-[20px]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Image
          alt='preview platform'
          width={474}
          height={343}
          src={'/notfound.png'}
        />
      </motion.div>

      <motion.p
        className='w-[410px] text-center text-[#636363] text-[18px]'
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Page is not found! Check your internet connection or reload your search.
      </motion.p>

      <Link href="/">
        <motion.button
          className='relative z-10 w-[236px] h-[50px] bg-[#6615F2] rounded-[10px] text-[18px] text-white font-medium cursor-pointer'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.6,
            type: 'spring',
            stiffness: 200,
            damping: 15,
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 20px rgba(199,172,255,0.7)',
          }}
          whileTap={{ scale: 0.95 }}
        >
          Back to Home
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Notfound;
