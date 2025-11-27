'use client';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

const ContactUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  return (
    <div
      ref={ref}
      className='container mx-auto text-center py-8 lg:py-12 px-8 relative flex flex-col lg:flex-row items-center gap-8'
    >
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        className='flex flex-col lg:items-start lg:w-[60%] text-center'
      >
        <h3 className=' text-[28px] md:text-[45px]'>Contact Us</h3>
        <p className='text-[#0000008C] mt-6 lg:text-start text-[18px] lg:text-[24px] font-medium'>
          Need help or have questions? Our team is here to support your setup,
          guide your growth, and make sure your community runs smoothly. Reach
          out anytime.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 250, damping: 18 }}
          className='bg-[#6615F2] px-6 py-3 rounded-xl text-white mt-6'
        >
          Contact Us
        </motion.button>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
        className='lg:w-[40%] flex justify-center'
      >
        <Image alt='contact' src='/contact.png' width={400} height={400} />
      </motion.div>
    </div>
  );
};

export default ContactUs;
