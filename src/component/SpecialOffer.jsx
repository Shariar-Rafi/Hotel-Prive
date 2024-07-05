import React from 'react'
import Image from './layer/Image'
import line2 from '../assets/line2.png'


const SpecialOffer = () => {
    return (
        <div className='bg-white pt-36'>
            <div className='flex gap-x-4 items-center mb-2 justify-center'>
                <Image src={line2} className="cursor-auto w-[46px] h-[8px]" />
                <p className='text-sm font-RB tracking-widest text-[#21160E]'>MAKE MEMORIES HAPPEN</p>
            </div>
            <h3 className='text-[48px] text-[#21160E] font-Tinos font-medium text-center mb-10'>Special Offers</h3>
            <div className='w-full bg-slate-400'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sunt hic eligendi. Libero, ipsam praesentium et sunt quibusdam rerum maiores, quisquam hic vel, ipsum ea reprehenderit. Sequi dolorem itaque blanditiis.
            </div>
        </div>
    )
}

export default SpecialOffer
