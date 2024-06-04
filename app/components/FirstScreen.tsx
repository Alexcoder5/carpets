'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import rightImage from '/public/first_screen_right.png'
import newZelandSticker from '/public/stickers/new_zeland_wool.svg'
import craftedWithCare from '/public/stickers/crafted_with_care.svg'
import fromGeorgiaSticker from '/public/stickers/from_georgia.svg'
import globeSticker from '/public/stickers/globe.svg'
import curve from '/public/curves/first_screen_custom.svg'
import dragMe from '/public/curves/drag_me.svg'
import DraggableSticker from './DraggableSticker'
import { DraggableStickerData } from '../assets/typescriptHelpers'

interface Props {
  draggableStickersData: DraggableStickerData[]
  isStickerPositionChanged: Boolean
}

const FirstScreen = ({ draggableStickersData, isStickerPositionChanged }: Props) => {

  return (
    <section id='first_screen' className='flex h-screen w-full'>
      {/* left */}
      <div className='bg-my-yellow flex-1 flex justify-center items-center pt-[8%]'>
        <div className='flex flex-col justify-between items-center'>
          {/* title with svg curves */}
          <h2 className='uppercase text-center text-my-black tracking-[-0.04em] font-formom text-heading-main pb-[3.33vw] relative px-[4vw]'>
            we make custom rugs
            <Image draggable={false} src={curve} className='absolute bottom-[2.5vw] left-[9vw] w-[19vw] ' alt="sticker" />
          </h2>
          <p className='w-[23.3vw] text-center text-custom-paragraph pb-[5.25vw] tracking-[-0.01em]'>
            Order rug with your own design <br />
            or choose from our <span className='underline font-medium'>limited collection</span>
          </p>
          {/* order button */}
          <button className='hover:bg-my-black hover:text-my-beige transition-colors uppercase bg-my-beige border border-my-black text-center text-custom-paragraph-sm py-[1.6vw] px-[4.3vw] rounded-[50%]'>
            order rug
          </button>
        </div>
      </div>

      {/* right */}
      <div className='bg-my-beige flex-1 relative'>
        <div className='absolute top-[48%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[94.5%] ml-[1%]'>
          <Image src={rightImage} className='w-full' alt="logo" />
          <div className='absolute top-[10%] right-[45%]'>
            <DraggableSticker
              src={newZelandSticker}
              draggableStickersData={draggableStickersData}
              width={{ width: '15vw' }}
              id={'newZelandSticker'}
            />
          </div>
          <div className='absolute top-[7%] left-[7%]'>
            <DraggableSticker
              src={craftedWithCare}
              draggableStickersData={draggableStickersData}
              width={{ width: '12vw' }}
              id={'craftedWithCare'}
            />
          </div>
          <div className='absolute bottom-[10%] left-[25%]'>
            <DraggableSticker
              src={fromGeorgiaSticker}
              draggableStickersData={draggableStickersData}
              width={{ width: '11vw' }}
              id={'fromGeorgiaSticker'}
            />
          </div>
          <div className='absolute bottom-[25%] right-[25%]'>
            <DraggableSticker
              src={globeSticker}
              draggableStickersData={draggableStickersData}
              width={{ width: '11vw' }}
              id={'globeSticker'}
            />
          </div>

          {!isStickerPositionChanged ? <Image src={dragMe} className='z-50 absolute bottom-[-5vw] left-[23vw] w-[11vw] ' alt="sticker" /> : null}
        </div>
      </div>
    </section>
  )
}

export default FirstScreen