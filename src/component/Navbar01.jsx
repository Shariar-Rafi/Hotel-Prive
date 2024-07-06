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
    const [dropdownToggle, setDropdownToggle] = useState(false);

    const handleDropdownToggle = () => {
        setDropdownToggle(!dropdownToggle);
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
        <div className="w-[330px] md:w-[1420px] mx-auto relative">
            <div ref={sidebarRef}>
                <Sidebar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
            </div>
            <nav className={`py-[22px] md:py-[44px] flex justify-normal md:justify-between items-center ${sidebarToggle ? 'pl-48 md:pl-64' : 'pl-0'} transition-opacity duration-300`}>
                <div className='first flex items-center justify-center text-xl gap-x-8 cursor-pointer'>
                    <FaBars className='text-white cursor-pointer' onClick={() => setSidebarToggle(!sidebarToggle)} />

                    <div className='relative hidden md:flex text-white text-base font-RB items-center justify-center' onClick={handleDropdownToggle}>
                        EN <FaAngleDown />
                        {dropdownToggle && (
                            <ul className='absolute top-full mt-2 bg-white text-black w-32 py-2 rounded shadow-md'>
                                <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer text-center font-RB'>EN</li>
                                <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer text-center font-RB'>FN</li>
                            </ul>
                        )}
                    </div>
                </div>

                <div className={`second ml-[30%] md:ml-36  ${sidebarToggle ? "opacity-0 md:opacity-100" : "opacity-100"}`}>
                    <Image src={logo} alt="logo.png" href="/" className="w-24 md:w-auto" />
                </div>

                <div className='third flex justify-center items-center gap-x-8 ml-auto md:ml-0 -mt-1 md:mt-0'>
                    <Link to="tel:+1 800 603 6035" className='hidden md:flex gap-x-1 justify-center items-center '>
                        <MdOutlineCall className='text-white text-2xl ' />
                        <p className=' text-sm text-white font-bold '>
                            +1 800 603 6035
                        </p>
                    </Link>
                    <Button to="/book-room" text="Book Now"
                        className={`py-0.5 md:py-4 px-2 md:px-14 text-[10px] md:text-lg rounded-sm md:rounded-md
                    ${sidebarToggle ? "opacity-0 md:opacity-100" : "opacity-100"}`} />
                </div>
            </nav>
        </div>
    );
};

export default Navbar01;
