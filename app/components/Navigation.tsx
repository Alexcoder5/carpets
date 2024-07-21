'use client'
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image'
import React, { useEffect } from 'react'
import logo from '/public/logo.svg'
import Link from 'next/link';

const Navigation = () => {
  return (
    <div className='fixed top-0 z-50 pt-[1vw] w-full px-[1vw]'>
      <nav className='flex items-center justify-between px-[1.6vw] font-medium bg-[#EEE9D799] rounded-full border border-[#2E2D2299] backdrop-blur-sm'>
        <ul className='flex gap-[3.33vw] flex-1 items-center mb-[0.75vw] mt-[0.9vw]'>
          <li>
            <ScrollLink
              className='text-custom-paragraph-sm flex items-center cursor-pointer'
              to='shop'
              smooth={true}
              duration={500}
              offset={70}
            >
              Shop
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className='text-custom-paragraph-sm flex items-center cursor-pointer'
              to='workshop'
              smooth={true}
              duration={500}
              offset={70}
            >
              Workshops
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className='text-custom-paragraph-sm flex items-center cursor-pointer'
              to='about'
              smooth={true}
              duration={500}
              offset={-110}
            >
              About
            </ScrollLink>
          </li>
        </ul>

        <div
          className='w-[13vw]'
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }}
        >
          <Image src={logo} className="cursor-pointer w-full" alt="logo" />
        </div>

        <ul className='flex gap-[3.33vw] flex-1 justify-end items-center mb-[0.75vw] mt-[0.9vw]'>
          <li>
            <ScrollLink
              className='text-custom-paragraph-sm flex items-center cursor-pointer'
              to='info'
              smooth={true}
              duration={500}
              offset={70}
            >
              Info
            </ScrollLink>
          </li>
          <li><Link className='text-custom-paragraph-sm flex items-center' href='#'>Cart</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation