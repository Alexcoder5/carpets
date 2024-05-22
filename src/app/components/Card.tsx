import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface Props {
  src: StaticImageData
  name: string
}

const Card = ({name, src}: Props) => {
  return (
    <div className='flex flex-col px-[3vw] py-[4vw] flex-1'>
        <Image src={src} className='pb-2' alt="sticker" />
        <p className='font-formom text-[1.7vw]'>{name}</p>
        <p className='text-my-black opacity-50 font-medium text-[0.85vw] pb-2'>Size 90x60</p>
        <div className='uppercase border border-my-black rounded-full text-[1vw] pt-[10px] pb-[8px] text-center font-medium leading-[1vw]'>
            add to cart
        </div>
    </div>
  )
}

export default Card