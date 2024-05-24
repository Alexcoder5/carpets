import React from 'react'
import SecondScreenCurve from './icons/SecondScreenCurve'

const SecondScreen = () => {
  return (
    <section className='flex h-screen relative -z-10'>
      <div className="flex-1 bg-[url('/screen_two_left.png')] w-full h-full bg-no-repeat bg-cover mb-8">
      </div>

      <div className='bg-my-black flex flex-1 items-center justify-center'>
        <div className='flex flex-1 items-center justify-center flex-col gap-[3.3vw]'>
          <h2 className='h-[50%] uppercase font-formom text-my-yellow text-custom-heading text-center tracking-[-0.04em]'>
            Add an original detail to your interior or make a unique gift
          </h2>
          <p className='text-center font-thin text-my-beige text-custom-paragraph tracking-[-0.02em]'>
            We make customised tufting rugs, using <br />
            your illustrations, logos and even photos <br />
            or pictures from pinterest, and are open <br />
            for collaborations with creators
          </p>
        </div>
      </div>
      <SecondScreenCurve className={'absolute bottom-0 left-1/2 transform -translate-x-1/2 resize w-[21.5vw]'}/>
    </section>
  )
}

export default SecondScreen