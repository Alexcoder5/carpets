import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import egg from '/public/showcase_images/anime.png'
import tirex from '/public/showcase_images/tirex.png'
import pinkRug from '/public/showcase_images/pink_rug.png'
import blackHuman from '/public/showcase_images/black_human.png'
import nike from '/public/showcase_images/nike.png'
import { useIntersectionObserver } from '../assets/useIntersectionObserver'


const Showcase = () => {
  const { isIntersecting, ref } = useIntersectionObserver({
    // threshold: 0.5,
  })
  
  return (
    <section className='bg-my-beige px-[1.6vw]' ref={ref}>
      <div className="h-[164vw] w-full relative">
        <div className='flex flex-col gap-[0.66vw] sticky top-[6vw] left-0 flex-1 z-10'>
          <h2 className='uppercase font-formom text-my-black text-heading-main tracking-[-0.04em]'>
            custom rugs we made
          </h2>
          <p className='font-formom font-thin text-my-black tracking-[-0.02em] text-[3.3vw] leading-[3.3vw]'>
            by you and your designs
          </p>
        </div>
        <div>
          <Image draggable={false} src={tirex} className='w-[24vw] absolute top-[22vw] left-[0]' alt="sticker" />
          <Image draggable={false} src={pinkRug} className='w-[16vw] absolute top-[34vw] left-[32vw]' alt="sticker" />
          <Image draggable={false} src={blackHuman} className='w-[42vw] absolute top-[14.6vw] right-[-1.6vw]' alt="sticker" />
          <Image draggable={false} src={nike} className='w-[16vw] absolute top-[63vw] left-[17.7vw] z-10' alt="sticker" />


          <Image draggable={false} src={egg} className='w-[42vw] absolute top-[77vw] left-[-1.6vw]' alt="sticker" />
        </div>
      </div>
    </section>
  )
}

export default Showcase