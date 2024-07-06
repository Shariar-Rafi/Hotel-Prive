import bg02 from "../assets/bg02.jpg"
import { FaUsers } from 'react-icons/fa';
import Container from './layer/Container';
import Button from './layer/Button';
import { BsBox } from 'react-icons/bs';
import { LuBedDouble } from 'react-icons/lu';
import { AiFillPicture } from 'react-icons/ai';




const Banner02 = () => {

  return (
    <div className='relative text-white'>

      <div className="absolute z-40 bottom-0 md:bottom-[3%] w-full">
        <Container>
          <div className=" text-white py-2 md:py-10 flex items-center gap-y-1 md:gap-y-0 gap-x-4 md:gap-x-0 justify-between">
            <div className='flex flex-col gap-y-2 md:gap-y-8'>
              <h2 className='text-[12px] md:text-[64px] text-white font-medium font-Tinos'>Superior Single Room</h2>
              <div className='flex gap-x-3 md:gap-x-10 items-center'>
                <div className='flex gap-x-1 md:gap-x-3 items-center  text-[#f5f4f4]'>
                  <BsBox className='text-[15px] md:text-[40px]' />
                  <p className='font-RB text-[8px] md:text-lg'>30 Sqm</p>
                </div>
                <div className='flex gap-x-1 md:gap-x-3 items-center  text-[#f5f4f4]'>
                  <LuBedDouble className='text-[15px] md:text-[40px]' />
                  <p className='font-RB text-[8px] md:text-lg'>1 Single Bed</p>
                </div>
                <div className='flex gap-x-1 md:gap-x-3 items-center  text-[#f5f4f4]'>
                  <FaUsers className='text-[15px] md:text-[40px]' />
                  <p className='font-RB text-[8px] md:text-lg'>1 Adult
                  </p>
                </div>
                <div className='flex gap-x-1 md:gap-x-3 items-center  text-[#f5f4f4]'>
                  <AiFillPicture className='text-[15px] md:text-[40px]' />
                  <p className='font-RB text-[8px] md:text-lg'>Gardern View
                  </p>
                </div>
              </div>
            </div>

            <div className='flex flex-col'>
              <p className='text-[8px] md:text-lg font-Tinos font-medium'>From</p>
              <p className='text-[10px] md:text-[32px] font-Tinos leading-3 md:leading-normal font-medium mb-0 md:mb-2'>$199/night</p>
              <Button text="Book This Room"
                className="rounded-sm md:rounded-md py-0 md:py-4 px-1 md:px-6 !text-[6px] md:!text-sm" to="#" />
            </div>

          </div>

        </Container>

      </div>


      <div className="relative before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full
       before:bg-[#473D35]  before:opacity-50">
        <img src={bg02} alt="bg02" className="relative z-0 w-full h-full" />


      </div>
    </div>


  )
}

export default Banner02
