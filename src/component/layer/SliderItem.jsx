import React from 'react'
import Button from './Button'

const SliderItem = ({ text, className }) => {
  return (
    <div className="m-auto">
      <h2 className={`${className} text-[25px] md:text-[48px] font-Tinos text-white font-medium text-center mb-3 md:mb-10`}>{text}</h2>
      <p className='text-xs md:text-lg text-white font-RB mb-5 md:mb-10 text-center max-w-[320px] md:max-w-[620px] '>
        Donec porta diam eu massa. Quisque diam lorem, interdum
        vitae, dapibus ac, scelerisque vitae, pede. Donec eget
        tellus non erat lacinia fermentum. Donec in velit vel
        ipsum auctor pulvinar. Vestibulum iaculis lacinia est.
      </p>
      <div className='flex gap-x-4 justify-center'>
        <Button className="px-5 md:px-10 py-2 md:py-5 " text="BOOK NOW"/>
        <Button className="px-5 md:px-10 py-2 md:py-5 !bg-[#A6734B] hover:!bg-[#BF885E]" text="DETAILS"/>
      </div>
    </div>

  )
}

export default SliderItem