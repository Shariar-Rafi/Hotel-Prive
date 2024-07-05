import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import Dashboard from '../Dashboard'
import Banner from '../Banner'
import About from '../About'
import RoomSuits from '../RoomSuits'
import Service from '../Service'
import Newsletter from '../Newsletter'
import FollowUs from '../FollowUs'

const Home = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true)
  return (
    <div>
        <Sidebar sidebarToggle={sidebarToggle} />
        <Dashboard 
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
        />
        <Banner/>
        <About/>
        <RoomSuits/>
        <Service/>
        <Newsletter/>
        <FollowUs/>        
    </div>
  )
}

export default Home
