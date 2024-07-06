import React from 'react'
import line2 from '../assets/line2.png'
import Image from './layer/Image'
import Slider01 from './layer/Slider01'


const RoomSuits = () => {
    return (
        <div className='pt-8 md:pt-32 mb-0 md:-mb-2 bg-white'>
            <div className="top">
                <div className='flex gap-x-4 items-center  mb-1 md:mb-10 flex-col'>
                    <div className='flex gap-x-2 md:gap-x-6 items-center mb-2 md:mb-10'>
                        <Image src={line2} className="cursor-auto w-7 md:w-14 h-1 md:h-2" />
                        <p className=' font-RB tracking-widest text-[6px] md:text-base'>ACCOMMODATION</p>
                    </div>
                    <h3 className='text-xl md:text-[48px] text-[#21160E] font-Tinos mb-2 md:mb-10 font-medium'>
                        Rooms & Suits
                    </h3>
                    <p className='text-[10px] md:text-lg text-[#21160E] font-RB mb-3 md:mb-4 max-w-[340px] md:max-w-[810px] text-center'>
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse
                        sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet.
                    </p >
                </div>
            </div>

            <div className="bottom cursor-pointer">
                <Slider01 text1="Deluxe Double Room" text2="Superior Single Room" text3="Superior Double Room" text4="Family Room"/>
            </div>
        </div>
    )
}

export default RoomSuits
