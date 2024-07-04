import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import Dashboard from '../Dashboard'
import Banner from '../Banner'

const Home = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true)
  return (
    <div>
        <Sidebar sidebarToggle={sidebarToggle} />
        {/* <div className='absolute w-full h-full'> */}
        <Dashboard 
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
        />
        {/* </div> */}
        <Banner/>

    </div>
  )
}

export default Home
