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
        <div className='bg-white py-36 relative'>
            <div className='w-full h-[496px] bg-[#512c0f] relative'>
                <div className='absolute inset-0 bg-[#000000] opacity-60'></div>
                <div className='absolute inset-0'>
                    <img src={paris02} className="w-full h-full object-cover" alt="paris02" />
                </div>
                <div className='py-36 w-full flex flex-col relative z-10'>
                    <div className='flex gap-x-4 items-center mb-4 justify-center'>
                        <Image src={line} className="cursor-auto w-[46px] h-[8px]" />
                        <p className='text-base font-RB tracking-widest text-white'>JOIN OUR MAILING LIST</p>
                    </div>
                    <h3 className='text-[48px] text-white font-Tinos font-medium text-center mb-10'>Newsletter Sign Up</h3>
                    <div className='flex justify-center items-center gap-x-8'>
                        <div className='flex items-baseline flex-col justify-center'>
                            <label className='text-xs font-RB tracking-widest text-[#AAA] mb-2' htmlFor="">SIGN UP FOR NEWS AND SPECIAL OFFERS</label>
                            <input
                                value={email} onChange={changeEmail}
                                type="email" className='bg-transparent w-[544px] border-b-2 border-white pb-[14px] placeholder:text-white placeholder:font-Tinos outline-none text-white' placeholder='Enter Email Address' />
                        </div>
                        <Button onClick={submit}  className="py-5 px-[38px]" text="SUBSCRIBE" />
                        

                    </div>
                    <p className={`text-sm text-red-500 font-semibold ${emailErr ? "pb-2 block" : "pb-0 hidden"} text-center mt-8`}>{emailErr}</p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
