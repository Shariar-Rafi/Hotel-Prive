import React from 'react'
import line2 from "../assets/line2.png"
import f1 from "../assets/f1.jpg"
import f2 from "../assets/f2.jpg"
import f3 from "../assets/f3.jpg"
import f4 from "../assets/f4.jpg"
import f5 from "../assets/f5.jpg"
import Image from './layer/Image'


const FollowUs = () => {
    return (
        <div className='bg-white pb-36 '>
            <div>
                <div className='flex gap-x-4 items-center mb-4 justify-center'>
                    <Image src={line2} className="cursor-auto w-[46px] h-[8px]" />
                    <p className='text-sm font-RB tracking-widest text-[#21160E]'>#HOTELPRIVE</p>
                </div>
                <h3 className='text-[48px] text-[#21160E] font-Tinos font-medium text-center mb-10'>Newsletter Sign Up</h3>
                
                <div className="images flex justify-center items-center gap-x-6">
                    <div className="image size-[232px] object-cover">
                        <Image src={f1} alt={f1}/>
                    </div>
                    <div className="image size-[232px] object-cover">
                        <Image src={f2} alt={f2}/>
                    </div>
                    <div className="image size-[232px] object-cover">
                        <Image src={f3} alt={f3}/>
                    </div>
                    <div className="image size-[232px] object-cover">
                        <Image src={f4} alt={f4}/>
                    </div>
                    <div className="image size-[232px] object-cover">
                        <Image src={f5} alt={f5}/>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FollowUs
