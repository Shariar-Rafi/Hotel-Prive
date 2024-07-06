import React from 'react'
import Banner from '../Banner'
import About from '../About'
import RoomSuits from '../RoomSuits'
import Service from '../Service'
import Newsletter from '../Newsletter'
import FollowUs from '../FollowUs'
import ScrollToTop from "react-scroll-to-top";
import SpecialOffer from '../SpecialOffer'


const Home = () => {
  return (
    <div>

      <Banner />
      <About />
      <RoomSuits />
      <Service />
      <SpecialOffer/>
      <Newsletter />
      <FollowUs /> 
      <ScrollToTop className='bg-[#FFF] hidden md:flex justify-center items-center rounded-[50%] p-3' smooth /> 
    </div>
  )
}

export default Home
