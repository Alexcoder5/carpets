import Image from 'next/image'
import React from 'react'
import designer from '../../public/designer.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <section className='bg-my-beige px-[1.66vw] pt-[11.8vw] pb-[3.8vw] flex justify-between font-medium'>
        <div className='flex gap-[0.66vw]'>
            <Image draggable={false} src={designer} className='w-[12.1vw]' alt="sticker" />
            <div className='flex flex-col justify-between'>
                <p className='text-custom-paragraph font-normal'>
                Hey! I’m Hanna. I designed <br />
                this website. Do you need design? <br />
                Message me for cooperation.
                </p>
                <div>
                    <a className='text-custom-paragraph-sm rounded-full w-[20vw] block text-center pt-[0.9vw] pb-[0.75vw] bg-my-black text-my-beige mb-[0.5vw]' href="#">instagram</a>
                    <a className='text-custom-paragraph-sm rounded-full w-[20vw] block text-center pt-[0.9vw] pb-[0.75vw] bg-my-black text-my-beige' href="#">telegram</a>
                </div>
            </div>
        </div>
        <div className='flex gap-[6.91vw] tracking-[-0.01em]'>
            <div className='flex flex-col gap-[1vw] text-custom-paragraph-sm text-my-black'>
                <p>Order rug</p>
                <p>Catalog</p>
                <p>Workshops</p>
                <p>Gift certificate</p>
            </div>
            <div className='flex flex-col gap-[1vw] text-custom-paragraph-sm text-my-black'>
                <p>About us</p>
                <p>Info / faq</p>
                <p>Terms of service</p>
                <p>Privacy policy</p>
            </div>
            <div className='flex flex-col justify-between'>
                <a className='text-custom-paragraph-sm rounded-full w-[16vw] block text-center pt-[0.9vw] pb-[0.75vw] bg-my-yellow border border-my-black text-my-black' href="#">instagram</a>
                <p className='text-[1vw] leading-[1.2vw] text-right'>
                This project is not intended for <br />
                commercial use.
                </p>
            </div>

        </div>
    </section>
  )
}

export default Footer