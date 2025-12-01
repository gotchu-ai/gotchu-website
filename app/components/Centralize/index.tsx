import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Centralize = () => {
  return (
    <div className='text-center  px-8 relative flex items-center gap-8 md:mt-[100px]  xl:h-[600px]'>
      {/* LEFT CONTENT */}
      <div className='relative container  z-10  mx-auto  flex flex-col items-start justify-center lg:px-8 '>
        <div className='xl:w-1/2 text-start'>
          <h3 className='text-[28px] lg:text-[45px] font-semibold lg:font-bold'>
            Centralize your social operations
          </h3>
          <p className='text-[#0000008C] mt-6 text-[18px] lg:text-[24px] text-start font-medium'>
            Connect, manage, and analyze Facebook, Instagram, YouTube, TikTok,
            and more — all from one place. Save hours each week and boost
            engagement with consistency.
          </p>
          <div className='flex flex-col items-center lg:gap-4 lg:flex-row lg:mt-8'>
          <button className='w-full max-w-[297px] md:w-[170px] rounded-xl bg-[#6615F2] px-6 py-3 text-white'>
                View Features
              </button>

              <Link href="https://www.facebook.com/gotchucloud" target="_blank">
              <button className='w-full max-w-[297px] md:w-[170px] cursor-pointer rounded-xl border-2 border-[#00000026] bg-white px-6 py-3 text-black'>
                Contact Us
              </button>
              </Link>
          </div>
        </div>

        <div className='relative xl:hidden  mt-[30px]'>
        <img
          src='/Imagecontainer.png'
          alt='contact'
        />
        <img
          src='/circle_ellipse.png'
          alt='contact'
          className='absolute z-[-1] top-[-50px]'
        />
        </div>
      </div>


      {/* RIGHT IMAGE */}
      <div className='absolute hidden xl:block top-0 right-0 w-1/2 h-[550px] '>
        <img
          src='/central.png'
          alt='contact'
          className='translate-y-[-100px]'
        />
        <img
          src='/circle_ellipse.png'
          alt='contact'
          className='absolute -top-5 left-[-100px] z-[-1]'
        />
      </div>
    </div>
  );
};

export default Centralize;
