import React from 'react';
import Image from 'next/image';

const RoleBased = () => {
  return (
    <div className='text-center   px-8 relative flex items-center gap-8 md:mt-[200px] mt-[70px]  h-[600px]'>
      {/* LEFT CONTENT */}
      <div className='relative container  z-10  mx-auto  flex flex-col items-end justify-center '>
        <div className='lg:w-1/2 text-start'>
          <h3 className='text-[28px] lg:text-[45px] font-semibold lg:font-bold'>
            Role‑based access and safe workflows
          </h3>
          <p className='text-[#0000008C] mt-6 text-[18px] lg:text-[24px] text-start font-medium'>
            Assign roles, moderate teams, and protect content. Fine‑grained
            permissions keep your brand safe while your team moves fast.
          </p>
          <div className='flex flex-col items-center lg:gap-4 lg:flex-row lg:mt-8'>
            <button className='w-full max-w-[297px] rounded-xl bg-[#6615F2] px-6 py-3 text-white mt-6 lg:mt-0'>
              View Features
            </button>
            <button className='w-full max-w-[297px] rounded-xl border-2 border-[#00000026] bg-white px-6 py-3 text-black mt-6 lg:mt-0'>
              Contact Us
            </button>
          </div>
        </div>

        <div className='relative lg:hidden  mt-[30px]'>
          <img src='/Deviceframe.png' alt='contact' />
          <img
            src='/circle_ellipse.png'
            alt='contact'
            className='absolute z-[-1] top-[-50px]'
          />
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className='absolute hidden md:block top-0 left-[-70px] w-1/2 h-[550px] '>
        <img
          src='/role_based.png'
          alt='contact'
          className='translate-y-[-100px]'
        />
        <img
          src='/circle_ellipse.png'
          alt='contact'
          className='absolute -top-6 right-[-140px] z-[-1]'
        />
      </div>
    </div>
  );
};

export default RoleBased;
