import React from 'react'
import man from '/public/design_options/man.png'
import gun from '/public/design_options/gun.png'
import scissors from '/public/design_options/scissors.png'
import Image from 'next/image'

const DesignOptions = () => {
    return (
        <section id='about' className='bg-my-beige pt-[11vw] pb-[6vw] relative' style={{scrollMarginTop: '11vw'}}>
            <Image src={gun} className='absolute top-[3%] right-[17%] w-[16vw]' alt="sticker"/>
            <Image src={scissors} className='absolute bottom-[3%] right-[8%] w-[16vw]' alt="sticker"/>
            <div className='flex flex-1 items-center justify-center flex-col gap-[2vw] relative'>
                <Image src={man} className='absolute top-[-5%] left-[5.7%] w-[24.25vw]' alt="sticker"/>
                <h2 className='uppercase font-formom text-my-black text-custom-heading text-center tracking-[-0.04em]'>
                Tufting allows  <br />
                a wide range  <br />
                of design options
                </h2>
                <p className='text-center font-thin text-my-black text-custom-paragraph tracking-[-0.02em]'>
                    Tufting is a textile technique that consists <br />
                    of inserting yarn into a fabric base creating loops <br />
                    or cut tassels, without knots. It allows a wide <br />
                    range of design options including the use <br />
                    of different colors, textures, and patterns.
                </p>
            </div>
        </section>
    )
}

export default DesignOptions