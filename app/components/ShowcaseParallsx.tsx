import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import anime from '/public/showcase_images/anime.png'
import tirex from '/public/showcase_images/tirex.png'
import pinkRug from '/public/showcase_images/pink_rug.png'
import blackHuman from '/public/showcase_images/black_human.png'
import nike from '/public/showcase_images/nike.png'
import egg from '/public/showcase_images/egg.png'
import whiteBears from '/public/showcase_images/white_bears.png'
import rainbowWaves from '/public/showcase_images/rainbow_waves.png'
import tiger from '/public/showcase_images/tiger.png'
import chessboard from '/public/showcase_images/chessboard.png'
import { Parallax } from 'react-scroll-parallax'


const ShowcaseParallax = () => {
  const [showStickyHeader, setShowStickyHeader] = useState(true)



  return (
    <section className='bg-my-beige px-[1.6vw]' >
      <div className="h-[152vw] w-full relative">
        <div className='flex flex-col gap-[0.66vw] top-[6vw] left-0 flex-1 z-10'
          style={{ position: showStickyHeader ? 'sticky' : 'static' }}
        >
          <h2 className='uppercase font-formom text-my-black text-heading-main tracking-[-0.04em]'>
            custom rugs we made
          </h2>
          <p className='font-formom font-thin text-my-black tracking-[-0.02em] text-[3.3vw] leading-[3.3vw]'>
            by you and your designs
          </p>
        </div>
        <div>
          <Parallax speed={20} className='w-[24vw] absolute top-[18vw] left-[0]'>
            <Image draggable={false} src={tirex} className='w-full' alt="sticker" />
          </Parallax>
          <Parallax speed={-15} className='w-[16vw] absolute top-[38vw] left-[32vw]'>
            <Image draggable={false} src={pinkRug} className='w-full' alt="sticker" />
          </Parallax>
          <Parallax speed={5} className='w-[42vw] absolute top-[14.6vw] right-[-1.6vw]'>
            <Image draggable={false} src={blackHuman} className='w-full' alt="sticker" />
          </Parallax>
          <Parallax speed={10} className='w-[16vw] absolute top-[63vw] left-[17.7vw] z-10'>
            <Image draggable={false} src={nike} className='w-full' alt="sticker" />
          </Parallax>
          <Parallax
            speed={8}
            className='w-[42vw] absolute top-[77vw] left-[-1.6vw]'
          // onEnter={() => {setShowStickyHeader(false)}}
          // onExit={() => {setShowStickyHeader(true)}}
          >
            <Image draggable={false} src={anime} className='w-full' alt="sticker" />
          </Parallax>
          <Parallax speed={-8} className='w-[16.1vw] absolute top-[72.6vw] right-0 z-10'>
            <Image draggable={false} src={egg} className='w-full' alt="sticker" />
          </Parallax>
          <Parallax speed={-5} className='w-[24.1vw] absolute bottom-[33.9vw] right-[24.2vw] z-10'>
            <Image draggable={false} src={whiteBears} className='w-full' alt="sticker" />
          </Parallax>
          <Parallax speed={15} className='w-[16.1vw] absolute bottom-[7.17vw] left-[32.6vw] z-10'>
            <Image draggable={false} src={rainbowWaves} className='w-full' alt="sticker" />
          </Parallax>
          <Parallax speed={-12} className='w-[16.1vw] absolute bottom-[-12vw] left-0 z-10'>
            <Image draggable={false} src={chessboard} className='w-full' alt="sticker" />
          </Parallax>
          <Parallax speed={12} className='w-[32.25vw] absolute bottom-[-3.1vw] right-0 z-10'>
            <Image draggable={false} src={tiger} className='w-full' alt="sticker" />
          </Parallax>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center bg-my-black relative pt-[10.2vw] pb-[4.83vw] text-center'>
        <h2 className='uppercase font-formom text-my-beige text-custom-heading text-center tracking-[-0.04em] mb-[3.3vw]'>
          can’t decide what <br />
          rug to choose for <br />
          a comfort lover?
        </h2>
        <p className='text-custom-paragraph text-my-beige pb-[5.3vw]'>
          A rug gift certificate is a cool idea if you don't want to miss <br />
          out on a gift, but still surprise!
        </p>
        <button className='hover:bg-my-beige  transition-colors uppercase bg-my-yellow border border-my-black text-center text-custom-paragraph-sm py-[1.6vw] px-[2.83vw] rounded-[50%]'>
          Get certificate
        </button>
      </div>
    </section>
  )
}

export default ShowcaseParallax