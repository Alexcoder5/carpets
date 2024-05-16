'use client'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import longLogo from '../../../public/longlogo.svg'

const Navigation = () => {
  return (
    <nav className='flex justify-between px-5 py-3 fixed top-0 z-10 w-full font-medium uppercase'>
        <ul className='flex gap-8 flex-1 items-center'>
            <li><Link className='text-sm' href='#'>Shop</Link> </li>
            <li><Link className='text-sm' href='#'>Workshops</Link> </li>
            <li><Link className='text-sm' href='#'>About</Link> </li>
        </ul>
        
        <div onClick={()=> {
           window.scrollTo({top: 0, left: 0, behavior: "smooth"})
        }}>
          <Image src={longLogo} className="cursor-pointer" alt="logo" />
        </div>

        <ul className='flex gap-8 flex-1 justify-end items-center'>
            <li><Link className='text-sm font-helveticaBold' href='#'>Info</Link> </li>
            <li><Link className='text-sm font-helveticaBold' href='#'>Cart</Link> </li>
        </ul>
    </nav>
  )
}

export default Navigation