'use client';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { FiMapPin, FiPhone } from 'react-icons/fi';

const ContactUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  return (
    <div
      ref={ref}
      className="container mx-auto text-center py-8 lg:py-12 px-8 relative flex flex-col lg:flex-row items-center gap-8"
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col lg:items-start lg:w-[60%] text-center"
      >
        <h3 className=" text-[28px] md:text-[45px]">Contact Us</h3>
        <p className="text-[#0000008C] mt-6 lg:text-start text-[18px] lg:text-[24px] font-medium">
          Need help or have questions? Our team is here to support your setup,
          guide your growth, and make sure your community runs smoothly. Reach
          out anytime.
        </p>
        <div className="mt-8 lg:text-start text-[16px] lg:text-[18px] text-[#000000CC] space-y-3">
          <div className="flex items-start justify-center lg:justify-start gap-3">
            <FiMapPin className="mt-1 text-[#6615F2]" />
            <p>Blk 653C Jurong West St 61, Singapore 643653</p>
          </div>
          <div className="flex items-start justify-center lg:justify-start gap-3">
            <FiPhone className="mt-1 text-[#6615F2]" />
            <p>
              <a href="tel:+6581917200" className="underline">
                +65 8191 7200
              </a>{' '}
              /{' '}
              <a href="tel:+66661648029" className="underline">
                +66 66 164 8029
              </a>
            </p>
          </div>
        </div>
        <Link href="https://www.facebook.com/gotchucloud" target="_blank">
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 250, damping: 18 }}
            className="bg-[#6615F2] px-6 py-3 cursor-pointer rounded-xl text-white mt-6"
          >
            Contact Us
          </motion.button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
        className="lg:w-[40%] flex justify-center"
      >
        <Image alt="contact" src="/contact.png" width={400} height={400} />
      </motion.div>
    </div>
  );
};

export default ContactUs;