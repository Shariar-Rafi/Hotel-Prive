import React from 'react'
import Navbar01 from './Navbar01'

const Dashboard = ({sidebarToggle,setSidebarToggle}) => {
  return (
    <div className={`${sidebarToggle?"":"ml-[304px]"} w-full absolute z-50`}>
      <Navbar01
      sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle}
      />
    </div>
  )
}

export default Dashboard
