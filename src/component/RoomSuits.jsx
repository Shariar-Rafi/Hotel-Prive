import React from 'react'
import line2 from '../assets/line2.png'
import Image from './layer/Image'
import Slider01 from './layer/Slider01'


const RoomSuits = () => {
    return (
        <div className='pt-36 -mb-2 bg-white'>
            <div className="top">
                <div className='flex gap-x-4 items-center  mb-4 flex-col'>
                    <div className='flex gap-x-6 items-center mb-4'>
                        <Image src={line2} className="cursor-auto" />
                        <p className='text-base font-RB tracking-widest '>ACCOMMODATION</p>
                    </div>
                    <h3 className='text-[48px] text-[#21160E] font-Tinos mb-4 font-medium'>
                        Rooms & Suits
                    </h3>
                    <p className='text-lg text-[#21160E] font-RB mb-4 max-w-[810px] text-center'>
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse
                        sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet.
                    </p >
                </div>
            </div>

            <div className="bottom">
                <Slider01 text1="Deluxe Double Room" text2="Superior Single Room" text3="Superior Double Room" text4="Family Room"/>
            </div>
        </div>
    )
}

export default RoomSuits
