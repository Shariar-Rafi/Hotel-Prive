import React, { useState } from 'react'
import Image from './layer/Image'
import bg from "../assets/bg.jpg"
import line from "../assets/line.png"
import { GoPlay } from "react-icons/go";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import Container from './layer/Container';
import Button from './layer/Button';




const Banner = () => {
  const [count01, setCount01] = useState(1);
  const [count02, setCount02] = useState(1);
  return (
    <div className='relative text-white'>
      <div className='absolute top-1/3 left-1/2 translate-x-[-50%] z-40'>
        <div className='flex items-center justify-center gap-x-4'>
          <Image className="w-14 h-2 cursor-auto" src={line} alt={line} />
          <h2 className='font-RB text-sm tracking-widest'>TIME TO RECONNECT</h2>
        </div>
        <h2 className='text-[64px] font-Tinos'>A New Vision of Comfort</h2>
        <div className='flex flex-col justify-center items-center gap-y-1 mt-4'>
          <GoPlay className='text-white text-[100px] animate-bounce cursor-pointer hover:text-[#D9945F]' />
          <p className='text-xs font-RB tracking-widest'>WATCH THE FILM</p>
        </div>
      </div>

      <div className='main w-full h-[180px] bg-black absolute bottom-0 left-1/2 translate-x-[-50%] z-40 opacity-50 '>
      </div>

      <div className="absolute z-40 bottom-[1%]  w-full">
        <Container>
          <div className="sub text-white py-10 flex items-center justify-between">
            <div className='flex flex-col justify-center w-[274px]'>
              <p className='text-xs font-RB  w-full tracking-widest '>ARRIVAL DATE</p>
              <div className='flex  items-center font-RB border-b-2 border-white' >
                <p className='text-[48px]'>3</p>

                <div className='ml-6 font-RB'>
                  <p className='text-4 font-bold'>July, 2024</p>
                  <p className='capitalize text-sm '>Wednesday</p>
                </div>

                <FaAngleUp className='ml-auto' />
                



              </div>
            </div>
            <div className='flex flex-col justify-center w-[274px]'>
              <p className='text-xs font-RB  w-full tracking-widest '>DEPARTURE DATE
              </p>
              <div className='flex  items-center font-RB border-b-2 border-white' >
                <p className='text-[48px]'>5</p>

                <div className='ml-6 font-RB'>
                  <p className='text-4 font-bold'>July, 2024</p>
                  <p className='capitalize text-sm '>Friday</p>
                </div>

                <FaAngleDown className='ml-auto' />


              </div>
            </div>
            <div className='flex flex-col justify-center w-[120px]'>
              <p className='text-xs font-RB  w-full tracking-widest capitalize'>ADULTS</p>
              <div className='flex  items-center font-RB border-b-2 border-white' >
                <p className='text-[48px]'>{count01}</p>

                <div className='ml-auto flex flex-col gap-y-3'>
                  <div >
                    <FaAngleUp onClick={() => setCount01(count01 + 1)} />
                  </div>

                  <div onClick={() => count01 <= 1 ? setCount01(1) : setCount01(count01 - 1)}>
                    <FaAngleDown />
                  </div>


                </div>


              </div>
            </div>
            <div className='flex flex-col justify-center w-[120px]'>
              <p className='text-xs font-RB  w-full tracking-widest capitalize'>CHILDREN</p>
              <div className='flex  items-center font-RB border-b-2 border-white' >
                <p className='text-[48px]'>{count02}</p>

                <div className='ml-auto flex flex-col gap-y-3'>
                  <div >
                    <FaAngleUp onClick={() => setCount02(count02 + 1)} />
                  </div>

                  <div onClick={() => count02 <= 1 ? setCount02(1) : setCount02(count02 - 1)}>
                    <FaAngleDown />
                  </div>

                </div>


              </div>
            </div>
            <Button text="Check Availability" className="py-5 px-20 !text-lg tracking-widest" to="#" />
          </div>

        </Container>

      </div>


      <div className="relative before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full
       before:bg-[#473D35]  before:opacity-50">
        <img src={bg} alt="bg" className="relative z-0 w-full h-full" />


      </div>
    </div>


  )
}

export default Banner
