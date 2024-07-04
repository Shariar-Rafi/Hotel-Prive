import React from 'react'
import Navbar from '../Navbar01'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const RootLayout = () => {
  return (
    <div>

        {/* <Navbar/> */}

            <Outlet/>

        {/* <Footer/> */}

    </div>
  )
}

export default RootLayout