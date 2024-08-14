import React from 'react'
import Image from "next/image"
import { Socials } from '@/constants'

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2a0e61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
        <a href='#hero' className='h-auto w-auto flex flex-row items-center'>
          <Image
            src='/NavLogo.png'
            alt='Logo'
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className='font-bold ml-[10px] hidden md:block text-gray-300'>
            Shreyaskar
          </span>
        </a>

        <div className='w-[500px] flex flex-row items-center justify-between md:mr-20'>
          <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
            <a href='#hero' className='cursor-pointer'>About Me</a>
            <a href='#skills' className='cursor-pointer'>Skills</a>
            <a href='#project' className='cursor-pointer'>Project</a>
            <a href='#contact' className='cursor-pointer'>Contact Us</a>
          </div>
        </div>

        <div className='flex flex-row gap-5'>
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
    </div>
  )
}

export default Navbar