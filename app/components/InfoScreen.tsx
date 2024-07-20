import React, { useState } from 'react'

const InfoScreen = () => {
    const [range, setRange] = useState('5.5')

    const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRange(e.target.value)
    }

    return (
        <section id='info' className='py-[10vw] bg-my-beige px-[1.6vw]' style={{scrollMarginTop: '-4vw'}}>
            <div className='flex gap-[0.66vw] h-[24.2vw] mb-[0.66vw]'>
                <div className='flex-1 bg-my-black p-[1.6vw] flex flex-col justify-between'>
                    <div className='flex gap-[5.2vw]'>
                        <h2 className='text-custom-heading uppercase font-formom text-my-yellow w-[17.2vw] tracking-[-0.04em]'>
                            Why us
                        </h2>
                        <p className='font-thin text-custom-paragraph text-my-beige tracking-[-0.02em]'>
                            We don't have an endless stream <br />
                            of orders, so we are always heavily <br />
                            involved in the client's ideas
                        </p>
                    </div>
                    <div className='text-my-beige flex gap-[0.66vw] flex-wrap'>
                        <WhyUsCard text='Precise transfer of pictures' />
                        <WhyUsCard text='Attentive and caring service' />
                        <WhyUsCard text='Individual approach to our clients wishes' />
                        <WhyUsCard text='High quality rugs' />
                    </div>
                </div>

                <div className='flex-1 bg-my-black justify-between flex flex-col p-[1.6vw]'>
                    <div className='flex gap-[5.2vw]'>
                        <h2 
                            className='text-custom-heading uppercase font-formom text-my-yellow w-[17.2vw] tracking-[-0.04em]'
                            style={{fontSize: range+'vw', }}
                        >
                            Price
                        </h2>
                    </div>
                    <div className='text-my-beige flex flex-col gap-[1.34vw] text-custom-paragraph tracking-[-0.02em]'>
                        <p>Prices of our rugs depends on the size and complexity of the design</p>
                        <div className='flex items-center'>
                            <p>50€</p>
                            <input type="range" className="flex-1 mx-[1.24vw] slider" id="myRange" onChange={handleRangeChange} value={range} min="1" max="18" step={0.1}/>
                            <p>350€</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex-1 bg-my-black p-[1.6vw] flex flex-col justify-between h-[33.1vw] mb-[0.66vw]'>
                <h2 className='text-custom-heading text-my-yellow uppercase font-formom tracking-[-0.04em]'>
                    How to order
                </h2>
                <div className='flex gap-[7vw] relative'>
                    <hr className='absolute border-my-yellow border w-[80vw] border-opacity-30 top-[1.66vw] left-0'/>
                    <HowToOrderCard
                        num={'1'}
                        heading={'Contact'}
                        body={
                            <>
                            Contact us via instagram or fill<br />
                            out the form, attaching a picture <br /> 
                            of the design you want
                            </>
                        }
                    />

                    <HowToOrderCard
                        num={'2'}
                        heading={'Discuss'}
                        body={
                            <>
                            We reach out to you to discuss <br /> 
                            the size, your order details <br />
                            and calculate the cost
                            </>
                        }
                    />

                    <HowToOrderCard
                        num={'3'}
                        heading={'Manufacture'}
                        body={
                            <>
                            We manufacture a rug and ship <br />
                            it anywhere in the world
                            </>
                        }
                    />

                    <HowToOrderCard
                        num={'4'}
                        heading={'Enjoy'}
                        body={
                            <>
                            You receive, decorate <br />
                            your space and enjoy
                            </>
                        }
                    />
                </div>
            </div>

            <div className='flex flex-1 uppercase rounded-full border-my-black border bg-my-yellow text-custom-paragraph-sm justify-center items-center pt-[0.9vw] pb-[0.7vw] font-medium cursor-pointer'>
                Contact us to order
            </div>
        </section>
    )
}

export const WhyUsCard = ({ text }: { text: String }) => {
    return (
        <div className='border-my-yellow border rounded-full border-opacity-[30%] py-[0.66vw] px-[1.67vw] text-[1.33vw] leading-[1.33vw]'>
            {text}
        </div>
    )
}

interface Card {
    num: String
    heading: String
    body: React.ReactNode;
}

export const HowToOrderCard = ({ num, heading, body }: Card) => {
    return (
        <div className='flex flex-col items-start'>
            <p className='bg-my-yellow rounded-full text-[1.66vw] h-[3.33vw] w-[3.33vw] mb-[1.33vw] flex justify-center items-center relative'>{num}</p>
            <p className='font-formom text-[2vw] mb-[2.66vw] text-my-beige'>{heading}</p>
            <p className='text-custom-paragraph text-my-beige'>{body}</p>
        </div>
    )
}

export default InfoScreen