'use client'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import logo from '/public/logo.svg'

const Navigation = () => {
  return (
    <div className='fixed top-0 z-10 pt-[1vw] w-full px-[1vw]'>
      <nav className='flex items-center justify-between px-[1.6vw] font-medium bg-[#EEE9D799] rounded-full border border-[#2E2D2299] backdrop-blur-sm'>
        <ul className='flex gap-[3.33vw] flex-1 items-center mb-[0.75vw] mt-[0.9vw]'>
          <li><Link className='text-custom-paragraph-sm flex items-center' href='#'>Shop</Link> </li>
          <li><Link className='text-custom-paragraph-sm flex items-center' href='#'>Workshops</Link> </li>
          <li><Link className='text-custom-paragraph-sm flex items-center' href='#'>About</Link> </li>
        </ul>

        <div 
          className='w-[13vw]'
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }}
        >
          <Image src={logo} className="cursor-pointer w-full" alt="logo" />
        </div>

        <ul className='flex gap-[3.33vw] flex-1 justify-end items-center'>
          <li><Link className='text-custom-paragraph-sm flex items-center' href='#'>Info</Link> </li>
          <li><Link className='text-custom-paragraph-sm flex items-center' href='#'>Cart</Link> </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation