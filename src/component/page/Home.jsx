import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import Dashboard from '../Dashboard'
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
      <ScrollToTop className='bg-[#856A54] flex justify-center items-center rounded-[50%] p-2' smooth /> 
    </div>
  )
}

export default Home
