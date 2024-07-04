import React from 'react'
import { FaAngleDown, FaBars } from 'react-icons/fa'
import Container from './layer/Container'
import Image from './layer/Image'
// import logo from "../assets/logo.png"
// import Listitem from './layer/Listitem'
// import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import { MdOutlineCall } from 'react-icons/md'
import Button from './layer/Button'
import { Link } from 'react-router-dom'

const Navbar01 = ({ sidebarToggle, setSidebarToggle }) => {
    return (
        <div className="w-[1800px] mx-auto" >
            <nav className='py-[44px] flex justify-between'>
                <div className='first flex items-center justify-center text-xl gap-x-8 cursor-pointer'>
                    <FaBars className='text-white cursor-pointer'
                        onClick={() => setSidebarToggle(!sidebarToggle)} />

                    <div className='flex gap-x-1 text-white text-base font-RB items-center justify-center '>
                        EN <FaAngleDown />
                    </div>
                </div>

                <div className='second ml-36'>
                    <Image src={logo} alt="logo.png" href="/" />
                </div>

                <div className='third flex justify-center items-center gap-x-8'>
                    <Link to="tel:+1 800 603 6035" className='flex gap-x-1 justify-center items-center '>
                        <MdOutlineCall className='text-white text-2xl' />
                        <p className='text-sm text-white font-bold'>
                            +1 800 603 6035
                        </p>
                    </Link>
                    <Button text="Book Now" className="py-4 px-5 uppercase tracking-wider" />
                </div>

            </nav>
        </div>


    )
}

export default Navbar01
