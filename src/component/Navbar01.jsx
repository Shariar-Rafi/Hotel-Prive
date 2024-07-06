import React, { useState, useEffect, useRef } from 'react';
import { FaAngleDown, FaBars } from 'react-icons/fa';
import Image from './layer/Image';
import logo from "../assets/logo.png";
import { MdOutlineCall } from 'react-icons/md';
import Button from './layer/Button';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Navbar01 = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false);
    const sidebarRef = useRef(null);

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setSidebarToggle(false);
        }
    };

    useEffect(() => {
        if (sidebarToggle) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [sidebarToggle]);

    return (
        <div className="w-[300px] md:w-[1420px] mx-auto relative">
            <div ref={sidebarRef}>
                <Sidebar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
            </div>
            <nav className={`py-[22px] md:py-[44px] flex justify-normal md:justify-between items-center ${sidebarToggle ? 'pl-44 md:pl-64' : 'pl-0'} transition-padding duration-300`}>
                <div className='first flex items-center justify-center text-xl gap-x-8 cursor-pointer'>
                    <FaBars className='text-white cursor-pointer' onClick={() => setSidebarToggle(!sidebarToggle)} />

                    <div className='hidden md:flex text-white text-base font-RB items-center justify-center'>
                        EN <FaAngleDown />
                    </div>
                </div>

                <div className='second ml-[30%] md:ml-36 '>
                    <Image src={logo} alt="logo.png" href="/" className="w-24 md:w-auto" />
                </div>

                <div className='third hidden lg:flex justify-center items-center gap-x-8'>
                    <Link to="tel:+1 800 603 6035" className='flex gap-x-1 justify-center items-center'>
                        <MdOutlineCall className='text-white text-2xl' />
                        <p className='text-sm text-white font-bold '>
                            +1 800 603 6035
                        </p>
                    </Link>
                    <Button to="/book-room" text="Book Now" className="py-2 md:py-4 px-3 md:px-5 uppercase tracking-wider" />
                </div>
            </nav>
        </div>
    );
};

export default Navbar01;
