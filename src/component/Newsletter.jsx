import React, { useState } from 'react'
import line from "../assets/line.png"
import paris02 from "../assets/paris02.png"
import Image from './layer/Image'
import Button from './layer/Button'


const Newsletter = () => {
    let [email, setEmail] = useState("");
    let [emailErr, setEmailErr] = useState("");

    let changeEmail = (e) => {
        setEmail(e.target.value);
        setEmailErr("")
    }

    let submit = () => {
        if (!email) {
            setEmailErr("Email is required!")

        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
            setEmailErr("You have entered an invalid email address!")
        }
        else {
            setEmailErr("Subscribed Successfully!")
            setEmail("")
        }

    }

    return (
        <div className='bg-white  py-10  md:py-36 relative'>
            <div className='w-full h-[348px] md:h-[496px] bg-[#512c0f] relative'>
                <div className='absolute inset-0 bg-[#000000] opacity-60'></div>
                <div className='absolute inset-0'>
                    <img src={paris02} className="w-full h-full object-cover" alt="paris02" />
                </div>
                <div className='py-16 md:py-36 w-full flex flex-col relative z-10'>
                    <div className='flex gap-x-4 justify-center items-center mb-2 md:mb-6'>
                        <Image src={line} className="w-7 md:w-14 h-1 md:h-2 cursor-auto" />
                        <p className='font-RB text-[8px] md:text-base tracking-widest text-white'>JOIN OUR MAILING LIST
                        </p>
                    </div>
                    <h3 className='text-lg md:text-[48px] text-white font-Tinos mb-6 md:mb-10 font-medium text-center'>
                        Newsletter Sign Up
                    </h3>
                    <div className='flex flex-col md:flex-row justify-center items-center gap-x-8'>
                        <div className='flex items-baseline flex-col justify-center'>
                            <label className='text-[8px] md:text-xs w-full md:w-auto text-[#AAA] font-RB mb-2 md:mb-2 font-medium text-center tracking-widest'
                                htmlFor=""
                            >
                                SIGN UP FOR NEWS AND SPECIAL OFFERS
                            </label>
                            <input
                                value={email} onChange={changeEmail}
                                type="email" 
                                className='bg-transparent w-[300px] md:w-[544px] border-b-2 border-white pb-[7px] md:pb-[14px]
                                 placeholder:text-white placeholder:font-Tinos outline-none text-white' 
                                placeholder='Enter Email Address' />
                        </div>
                        <Button onClick={submit} className="px-5 md:px-10 py-2 md:py-5  mt-5 md:mt-0" text="SUBSCRIBE" />


                    </div>
                    <p className={`text-[10px] md:text-sm text-red-500 font-semibold ${emailErr ? "pb-2 block" : "pb-0 hidden"} text-center mt-8`}>
                        {emailErr}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
