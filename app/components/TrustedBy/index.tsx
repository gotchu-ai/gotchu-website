'use client'
import React from 'react'
import Image from 'next/image'
import Marquee from "react-fast-marquee";

const logos = [
  { src: '/logos/logo1.png', width: 75, height: 64 },
  { src: '/logos/logo2.png', width: 220, height: 64 },
  { src: '/logos/logo3.png', width: 75, height: 64 },
  { src: '/logos/logo4.png', width: 205, height: 64 },
  { src: '/logos/logo5.png', width: 146, height: 64 },
]

const TrustedBy = () => {
  return (
    <div className="container mx-auto py-12 mt-[60px] mb-[50px] px-8 text-center select-none">
      <p className="text-[#0000008C] mt-6 text-[24px] font-medium">GotchuAI is</p>
      <h3 className="text-[35px] font-semibold text-black mt-2.5">Trusted by</h3>

      <div className="relative w-full mt-10 overflow-hidden">
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          loop={0}
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center mr-10"
            >
              <Image
                src={logo.src}
                alt="trusted-logo"
                width={logo.width}
                height={logo.height}
                draggable="false"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default TrustedBy
