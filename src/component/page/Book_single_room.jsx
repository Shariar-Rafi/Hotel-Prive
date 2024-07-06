import React from 'react'
import Banner02 from '../Banner02'
import ScrollToTop from 'react-scroll-to-top'
import Description from '../Description'

const Book_single_room = () => {
  return (
    <div>
      <Banner02/>
      <Description/>







      <ScrollToTop className='bg-[#FFF] hidden md:flex justify-center items-center rounded-[50%] p-3' smooth /> 
    </div>
  )
}

export default Book_single_room
