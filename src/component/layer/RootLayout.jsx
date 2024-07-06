import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Sidebar from '../Sidebar'
import Dashboard from '../Dashboard'

const RootLayout = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true)

  return (
    <div>
      <Sidebar sidebarToggle={sidebarToggle} />
      <Dashboard
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />

      <Outlet />

      <Footer />

    </div>
  )
}

export default RootLayout