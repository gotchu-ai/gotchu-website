'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';

const Page = () => {
  // Base colors (soft pink and soft blue)
  const baseColor1 = { h: 330, s: 70, l: 85 };
  const baseColor2 = { h: 210, s: 70, l: 85 };

  const [gradient, setGradient] = useState(
    `linear-gradient(90deg, hsl(${baseColor1.h}, ${baseColor1.s}%, ${baseColor1.l}%), hsl(${baseColor2.h}, ${baseColor2.s}%, ${baseColor2.l}%))`
  );

  const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    const hue1 = baseColor1.h + x * 20 - 10;
    const hue2 = baseColor2.h + y * 20 - 10;

    const color1 = `hsl(${hue1}, ${baseColor1.s}%, ${baseColor1.l}%)`;
    const color2 = `hsl(${hue2}, ${baseColor2.s}%, ${baseColor2.l}%)`;

    setGradient(`linear-gradient(90deg, ${color1}, ${color2})`);
  };

  // Form state
  const [formData, setFormData] = useState({ phone: '' });
  const [countryCode, setCountryCode] = useState('+95');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const countryCodes = [
    { code: '+95', name: 'Myanmar' },
    { code: '+971', name: 'United Arab Emirates (Dubai)' },
    { code: '+66', name: 'Thailand' },
    { code: '+65', name: 'Singapore' },
    { code: '+886', name: 'Taiwan' },
    { code: '+62', name: 'Indonesia' },
    { code: '+63', name: 'Philippines' },
    { code: '+84', name: 'Vietnam' },
  ];

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Framer Motion variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, when: 'beforeChildren' },
    },
  };

  const item:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ background: gradient, transition: 'background 0.2s' }}
      className="flex flex-col items-start pt-20 justify-start min-h-screen"
    >
   <motion.div
  className="flex w-full container mx-auto justify-between"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  <button
    className="flex items-center gap-2 px-5 py-2.5 rounded-[30px]
      bg-white/10 backdrop-blur-md border border-white/30
      shadow-inner shadow-white/30 hover:shadow-lg hover:scale-105
      transition-all duration-300"
  >
    <Image src="/gotchu.png" alt="logo" width={25} height={32} />
    <p className="font-semibold text-[20px] text-white">GotchuAI</p>
  </button>

  <button
    className="flex items-center gap-2 px-5 py-2.5 rounded-[30px]
      bg-white/10 backdrop-blur-md border border-white/30
      shadow-inner shadow-white/30 hover:shadow-lg hover:scale-105
      transition-all duration-300"
  >
    <p className="font-semibold text-[20px] text-white">Contact Us</p>
  </button>
</motion.div>


      {/* Main Content */}
      <motion.div
        className="w-full container mx-auto mt-[50px] flex flex-row"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column */}
        <motion.div className="w-1/2" variants={item}>
          <motion.h3 className="text-[60px] font-bold text-white" variants={item}>
            Sent a message to contact us!
          </motion.h3>
          <motion.p className="text-[18px] text-white mt-[30px]" variants={item}>
            Have a project in mind or just want to say hello? We’d love to hear it from you
          </motion.p>

          <motion.div className="mt-[50px]" variants={item}>
            <div className="flex items-center gap-[10]">
              <Image src={'/phone.png'} alt="phone" width={50} height={50} />
              <h3 className="text-[18px] text-white">
                +95 9448831872, +66 661648029
              </h3>
            </div>
            <div className="flex items-center mt-5 gap-[10]">
              <Image src={'/location.png'} alt="location" width={50} height={50} />
              <h3 className="text-[18px] text-white">
                Shop Building-34, No 7-8, Kabar Aye Pagoda Road, The Central
                Boulevard, Yankin Township, Yangon, Myanmar
              </h3>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column / Form */}
        <motion.div className="w-1/2" variants={item}>
          <motion.div
            className="border-2 rounded-[50px] 
              bg-[#C080E033] backdrop-blur-md border-white/30
              shadow-inner shadow-white/20
              flex flex-col items-center justify-center p-8 h-[500px] max-w-[500px] mx-auto px-[50px] py-[67px] gap-2.5"
            variants={container}
          >
            <motion.div className="flex gap-2.5 w-full" variants={item}>
              <input
                placeholder="First name"
                className="border border-[#FFFFFF] h-[55px] rounded-3xl px-4 w-[49%] placeholder:text-black"
              />
              <input
                placeholder="Last name"
                className="border border-[#FFFFFF] h-[55px] rounded-3xl px-4 w-[49%] placeholder:text-black"
              />
            </motion.div>

            <motion.div className="flex relative w-full h-[55px] rounded-3xl border border-white " variants={item}>
              <div
                className="flex items-center justify-between px-3 cursor-pointer border-r border-white/30 min-w-[90px] rounded-l-3xl"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className="text-black font-medium">{countryCode}</span>
                <Image
                  src="/chevron.svg"
                  alt="dropdown"
                  width={16}
                  height={16}
                  className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </div>

              {dropdownOpen && (
                <div className="absolute top-[60px] left-0 bg-[#e4dce7e2] backdrop-blur-md border border-white/30 w-[90px] z-10 rounded-xl overflow-hidden shadow-lg">
                  {countryCodes.map((country) => (
                    <div
                      key={country.code}
                      className="px-3 py-1 cursor-pointer text-black text-sm"
                      onClick={() => {
                        setCountryCode(country.code);
                        setDropdownOpen(false);
                      }}
                    >
                      {country.code}
                    </div>
                  ))}
                </div>
              )}

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 px-4 h-full border-none placeholder:text-black text-black rounded-r-3xl focus:outline-none"
              />
            </motion.div>

            <motion.input
              placeholder="Reason"
              className="border border-[#FFFFFF] h-[55px] rounded-3xl px-4 w-full placeholder:text-black"
              variants={item}
            />
            <motion.textarea
              placeholder="Details"
              className="border border-[#FFFFFF] pt-3 rounded-3xl h-[120px] px-4 w-full placeholder:text-black"
              variants={item}
            />
            <motion.input
              placeholder="Send message"
              className="border border-[#FFFFFF] h-[42px] rounded-3xl px-4 w-full placeholder:text-black"
              variants={item}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page;
