import React from 'react';
import Image from 'next/image';

const Centralize = () => {
  return (
    <div className='text-center  px-8 relative flex items-center gap-8 mt-[100px]  h-[600px]'>
      {/* LEFT CONTENT */}
      <div className='relative container  z-10  mx-auto  flex flex-col items-start justify-center px-8 '>
        <div className='w-1/2 text-start'>
          <h3 className='text-[45px] font-bold'>Centralize your social operations</h3>
          <p className='text-[#0000008C] mt-6 text-[24px] text-start font-medium'>
          Connect, manage, and analyze Facebook, Instagram, YouTube, TikTok, and more — all from one place. Save hours each week and boost engagement with consistency.
          </p>
          <button className='bg-[#6615F2] px-6 py-3 rounded-xl text-white mt-6'>
            Contact Us
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className='absolute top-0 right-0 w-1/2 h-[550px] '>
        <img src='/central.png' alt='contact'  className='translate-y-[-100px]' />
      </div>
    </div>
  );
};

export default Centralize;
