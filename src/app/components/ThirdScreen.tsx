import React from 'react'
import smile from '../../../public/stickers/smile.svg'
import Image from 'next/image'
import Card from './Card'
// images
import pickle from '../../../public/card_images/pickle.png'
import flowerPower from '../../../public/card_images/flower_power.png'
import carrotSmile from '../../../public/card_images/carrot_smile.png'
import selfLove from '../../../public/card_images/self_love.png'



const ThirdScreen = () => {
  return (
    <section className='bg-my-beige py-[9vw] px-[1.5vw]'>
        <div className="flex justify-between pb-[5vw]">
            <div className='flex-1'>
                <h2 className='uppercase font-formom text-my-black text-heading-main tracking-[-1px]'>
                    rugs from our collection
                </h2>
            </div>
            <div className='flex-1 flex justify-end'>
                <div className='w-1/2 flex flex-col justify-between p-[5px]'>
                    <p className='text-custom-paragraph'>
                        We make our own rug collections but <br />
                        they are guaranteed limited edition, <br />
                        no more than five such rugs in the world!
                    </p>
                    <div className='flex justify-between items-end'>
                        <a className='underline text-custom-paragraph font-medium' href="#">See all</a>
                        <Image src={smile} className='w-[4vw] mr-[12%]' alt="sticker"/>
                    </div>
                </div>
            </div>
        </div>
        <div className='dashed-border flex flex-wrap'>
            <Card name="Carrot Smile" src={carrotSmile} />
            <DashedDivider/>
            <Card name="Flower power" src={flowerPower} />
            <DashedDivider/>
            <Card name="Pickle Rick" src={pickle} />
            <DashedDivider/>
            <Card name="Self love" src={selfLove} />
        </div>
    </section>
  )
}

const DashedDivider = () => {
  return (
    <div className='dashed-horizontal-divider w-[0.5px]'></div>
  )
}


export default ThirdScreen