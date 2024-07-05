import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const RootLayout = () => {
  return (
    <div>

      <Outlet />

      {/* <Footer /> */}

    </div>
  )
}

export default RootLayout