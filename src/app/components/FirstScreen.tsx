'use client'
import Image from 'next/image'
import React from 'react'
import rightImage from '../../../public/test.png'
import orderButton from '../../../public/order_btn.svg'
import newZelandSticker from '../../../public/stickers/new_zeland_wool.png'
import madeWithLoveBlackSticker from '../../../public/stickers/made_with_love_black.png'
import fromGeorgiaSticker from '../../../public/stickers/from_georgia.png'
import globeSticker from '../../../public/stickers/globe.png'
import DraggableSticker from './DraggableSticker'
import { DraggableStickerData } from '../assets/typescriptHelpers'

interface Props {
  draggableStickersData: DraggableStickerData[]
}

const FirstScreen = ({draggableStickersData}: Props) => {

  return (
    <section id='first_screen' className='flex h-screen w-full'>
      {/* left */}
      <div className='bg-my-yellow flex-1 flex justify-center items-center pt-[8%]'>
        <div className='flex flex-col justify-between items-center text-8l'>
          {/* title with svg curves */}
          <div className='relative pb-[6vw]'>
            <h2 className='uppercase text-center text-my-black tracking-tighter font-formom'>
              <span className='relative'>
                create {' '}
              <Image src='/curves/curve_create.svg' fill className="" alt="logo" />
              </span>
               rug <br /> 
               <span className='pl-[0.7vw]'>
               with {' '}
               <span className='relative pr-[1.4vw]'>
               your {' '}
              <Image src='/curves/curve_your.svg' fill className="" alt="logo" />
              </span>
              </span>
              <br />own {' '}
              <span className='relative'>
                design {' '}
              <Image src='/curves/curve_design.svg' fill className="pt-[7vw]" alt="logo" />
              </span>
            </h2>
          </div>

          {/* order button */}
          <div className='relative'>
            <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-1 text-[1vw] w-full text-center uppercase'>
              Order rug
            </p>
          <Image src={orderButton} className='w-[18vw]' alt="logo" />
          </div>
        </div>
      </div>

      {/* right */}
      <div className='bg-my-beige flex-1 relative'>
          <div className='absolute top-[48%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[94.5%] ml-[1%]'>
            <Image src={rightImage} className='w-full'  alt="logo" />
          <div className='absolute top-[10%] right-[45%]'>
            <DraggableSticker 
              src={newZelandSticker} 
              draggableStickersData={draggableStickersData} 
              width={{width: '15vw'}} 
              id={'newZelandSticker'} 
            />
          </div>
          <div className='absolute top-[7%] left-[7%]'>
            <DraggableSticker 
              src={madeWithLoveBlackSticker} 
              draggableStickersData={draggableStickersData} 
              width={{width: '12vw'}}
              id={'madeWithLoveBlackSticker'} 
            />
          </div>
          <div className='absolute bottom-[10%] left-[25%]'>
            <DraggableSticker 
              src={fromGeorgiaSticker} 
              draggableStickersData={draggableStickersData} 
              width={{width: '11vw'}}
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
          </div>
        </div>
    </section>
  )
}

export default FirstScreen