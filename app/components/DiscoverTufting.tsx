import Image, { StaticImageData } from 'next/image'
import React from 'react'

import cat from '/public/discover_tufting/cat.png'
import egg from '/public/discover_tufting/egg.png'
import kids from '/public/discover_tufting/kids.png'

const DiscoverTufting = () => {
  return (
    <section id='workshop' className='px-[1.6vw] bg-my-beige pt-[10vw]' style={{scrollMarginTop: '-4vw'}}>
        <h2 className='uppercase font-formom text-my-black text-custom-heading tracking-[-0.04em] mb-[2.66vw]'>
        Discover the world of tufting <br />
        and create a beautiful and <br />
        unique rug with us
        </h2>

        <div className='flex gap-[0.66vw]'>
            <Card
                num="1"
                heading='Learning the basics of tufting technique' 
                image={egg}
                body={
                    <>
                    From the choice of materials and tools to the <br />
                    basic steps of creating a rug
                    </>
                }
            />
            <Card
                num="2"
                heading='Practice'
                image={kids}
                body={
                    <>
                    You will be able to directly apply the acquired <br />
                    knowledge, creating your own rug under <br />
                    the guidance of experienced instructors
                    </>
                }
            />
            <Card
                num="3"
                heading='Get inspired' 
                image={cat}
                body={
                    <>
                    Communication with like-minded people and the <br />
                    opportunity to share experience with other <br />
                    participants creates an atmosphere of creativity <br />
                    and inspiration
                    </>
                }
            />
        </div>
    </section>
  )
}

interface Card {
    num: String
    heading: String
    image: StaticImageData
    body: React.ReactNode;
}

export const Card = ({ num, heading, image, body }: Card) => {
    return (
        <div className='flex flex-col bg-my-black text-my-beige flex-1 p-[1.66vw]'>
            <p className='bg-my-yellow rounded-full text-[1.66vw] h-[3.33vw] w-[3.33vw] mb-[1.33vw] flex justify-center items-center relative text-my-black'>{num}</p>
            <p className='font-formom text-[2vw] mb-[1.33vw] text-my-beige'>{heading}</p>
            <Image draggable={false} src={image} className='w-[17.8vw] mb-[1.83vw]' alt="sticker" />
            <p className='text-custom-paragraph text-my-beige tracking-[-0.02em] opacity-50 flex flex-1 items-end'>{body}</p>
        </div>
    )
}


export default DiscoverTufting