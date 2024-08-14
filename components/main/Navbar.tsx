'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Socials } from '@/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2a0e61]/50 bg-[#03001411] backdrop-blur-md z-50 px-10'>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
        <a href='#hero' className='h-auto w-auto flex flex-row items-center'>
          <Image
            src='/NavLogo.png'
            alt='Logo'
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className='font-bold ml-[10px] hidden lg:block text-gray-300'>
            Shreyaskar
          </span>
        </a>

        {/* Hamburger Icon for Mobile View */}
        <div className='md:hidden cursor-pointer' onClick={toggleMenu}>
          <div className={`w-8 h-[2px] bg-white mb-[5px] ${isOpen ? 'rotate-45 translate-y-[6px] transform' : ''}`}></div>
          <div className={`w-8 h-[2px] bg-white mb-[5px] ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-8 h-[2px] bg-white ${isOpen ? '-rotate-45 -translate-y-[6px] transform' : ''}`}></div>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center justify-between w-[500px] h-auto border border-[#7042f861] bg-[#ffffff4d] mr-[15px] px-[20px] py-[10px] rounded-full text-black'>
          <a href='#hero' className='cursor-pointer '>About Me</a>
          <a href='#skills' className='cursor-pointer'>Skills</a>
          <a href='#project' className='cursor-pointer'>Project</a>
          <a href='#contact' className='cursor-pointer'>Contact Us</a>
        </div>

        {/* Social Media Icons */}
        <div className='flex !flex-row gap-5 hidden md:flex'>
          {Socials.map((social) => (
            <a
              href={social.url}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden absolute top-[65px] right-0 w-[240px] flex flex-col items-center justify-center bg-[#ffffff66] py-5 z-40 gap-3'>
          <a href='#hero' className='cursor-pointer mb-4 text-black'>About Me</a>
          <a href='#skills' className='cursor-pointer mb-4 text-black'>Skills</a>
          <a href='#project' className='cursor-pointer mb-4 text-black'>Project</a>
          <a href='#contact' className='cursor-pointer text-black mb-4'>Contact Us</a>
          {/* Social Media Icons */}
          <div className='flex flex-col gap-5 block md:hidden'>
            {Socials.map((social) => (
              <a
                href={social.url}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
