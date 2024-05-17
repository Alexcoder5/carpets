'use client'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo.svg'

const Navigation = () => {
  return (
    <div className='fixed top-0 z-10 pt-[1vw] w-full'>
      <nav className='flex justify-between px-5 py-[0.5vw] font-medium bg-[#EEE9D71A]'>
        <ul className='flex gap-8 flex-1 items-center'>
          <li><Link className='text-sm' href='#'>Shop</Link> </li>
          <li><Link className='text-sm' href='#'>Workshops</Link> </li>
          <li><Link className='text-sm' href='#'>About</Link> </li>
        </ul>

        <div onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }}>
          <Image src={logo} className="cursor-pointer" alt="logo" />
        </div>

        <ul className='flex gap-8 flex-1 justify-end items-center'>
          <li><Link className='text-sm font-helveticaBold' href='#'>Info</Link> </li>
          <li><Link className='text-sm font-helveticaBold' href='#'>Cart</Link> </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation