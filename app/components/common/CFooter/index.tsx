'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
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
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const CFooter = () => {
  return (
    <motion.footer
      className="h-40 bg-linear-to-r from-[#6615F2] to-[#CC34FF] flex items-center justify-center text-white"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="container mx-auto px-10 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0 ">

        {/* Left Section */}
        <motion.div
          className="flex items-center flex-col lg:flex-row justify-center lg:gap-8 gap-4"
          variants={containerVariants}
        >
          {/* Logo */}
          <motion.div
            className="flex items-center justify-center gap-2 cursor-pointer"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              rotate: -1,
              transition: { type: 'spring', stiffness: 260, damping: 15 },
            }}
          >
            <motion.div
              whileHover={{ scale: 1.12, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <Image
                alt="logo"
                width={25}
                height={32}
                src="/gotchuWhiteLogo.png"
              />
            </motion.div>
            <h3 className="font-semibold text-[16px]">GotchuAI</h3>
          </motion.div>

          {/* Footer Nav */}
          <motion.ul
            className="flex items-center justify-center gap-8 text-[16px]"
            variants={containerVariants}
          >
            {['About', 'Features', 'Pricing'].map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -2,
                  scale: 1.06,
                  transition: {
                    type: 'spring',
                    stiffness: 280,
                    damping: 20,
                  },
                }}
                className="cursor-pointer"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right Section (Social Icons) */}
        <motion.div
          className="flex items-center justify-center gap-6"
          variants={containerVariants}
        >
          {[
            { src: '/socials/instagram.png', alt: 'instagram' },
            { src: '/socials/linkedin.png', alt: 'linkedin' },
            { src: '/socials/x.png', alt: 'x' },
          ].map((icon, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.12,
                y: -3,
                transition: { type: 'spring', stiffness: 260, damping: 18 },
              }}
            >
              <Link href="">
                <Image width={24} height={24} src={icon.src} alt={icon.alt} />
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.footer>
  );
};

export default CFooter;
