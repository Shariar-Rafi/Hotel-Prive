import React from 'react';
import { FaAngleDown, FaFacebookF, FaHome, FaInstagram, FaTimes, FaTwitter } from 'react-icons/fa';
import { LiaTripadvisor } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import Image from './layer/Image';
import logo from "../assets/logo.png"


const Sidebar = ({ sidebarToggle, setSidebarToggle }) => {
    return (
        <div className={`fixed top-0 left-0 w-[204px] md:w-[304px] px-[60px] h-screen md:h-full py-14 bg-[#21160E]  text-white transform 
        ${sidebarToggle ? 'translate-x-0 -z-50' : '-translate-x-full z-50'} transition-transform duration-300`}>

            <div className="main h-svh md:h-full flex flex-col items-center gap-y-12 justify-normal md:justify-between">

                <div>
                    <Image src={logo} alt={logo} className="w-[150px] mx-auto" />
                </div>

                <FaTimes className="cursor-pointer text-white absolute  top-4 right-4 "
                    onClick={() => setSidebarToggle(false)} />


                <ul className=' text-white flex flex-col gap-y-3'>
                    <li className='rounded hover:shadow cursor-pointer' >
                        <Link className='text-[#FFF] '>
                            <div class="flex items-center justify-center gap-x-3">
                                <div
                                    class="relative text-[#FFF] hover:text-[#FFF] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-[#FFF] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-[#FFF] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                                    <span className='flex items-center justify-center gap-x-1'>HOME <FaAngleDown className='text-sm  mt-1' /></span>

                                </div>

                            </div>
                        </Link>
                    </li>
                    <li className='rounded hover:shadow cursor-pointer' >
                        <Link className='text-[#FFF]'>
                            <div class="flex items-center justify-center gap-x-3">
                                <div
                                    class="relative text-[#FFF] hover:text-[#FFF] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-[#FFF] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-[#FFF] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                                    <span className='flex items-center justify-center gap-x-1'>ROOMS <FaAngleDown className='text-sm  mt-1' /></span>

                                </div>

                            </div>
                        </Link>
                    </li>
                    <li className='rounded hover:shadow cursor-pointer' >
                        <Link className='text-[#FFF]'>
                            <div class="flex items-center justify-center gap-x-3">
                                <div
                                    class="relative text-[#FFF] hover:text-[#FFF] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-[#FFF] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-[#FFF] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                                    <span className='flex items-center justify-center gap-x-1'>PAGES <FaAngleDown className='text-sm  mt-1' /></span>

                                </div>

                            </div>
                        </Link>
                    </li>
                    <li className='rounded hover:shadow cursor-pointer' >
                        <Link className='text-[#FFF]'>
                            <div class="flex items-center justify-center gap-x-3">
                                <div
                                    class="relative text-[#FFF] hover:text-[#FFF] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-[#FFF] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-[#FFF] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                                    <span className='flex items-center justify-center gap-x-1'>PORTFOLIO <FaAngleDown className='text-sm  mt-1' /></span>

                                </div>

                            </div>
                        </Link>
                    </li>
                    <li className='rounded hover:shadow cursor-pointer' >
                        <Link className='text-[#FFF]'>
                            <div class="flex items-center justify-center gap-x-3">
                                <div
                                    class="relative text-[#FFF] hover:text-[#FFF] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-[#FFF] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-[#FFF] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                                    <span className='flex items-center justify-center gap-x-1'>BLOG <FaAngleDown className='text-sm  mt-1' /></span>

                                </div>

                            </div>
                        </Link>
                    </li>
                    <li className='rounded hover:shadow cursor-pointer' >
                        <Link className='text-[#FFF]'>
                            <div class="flex items-center justify-center gap-x-3">
                                <div
                                    class="relative text-[#FFF] hover:text-[#FFF] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-[#FFF] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-[#FFF] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                                    <span className='flex items-center justify-center gap-x-1'>SHOP <FaAngleDown className='text-sm  mt-1' /></span>

                                </div>

                            </div>
                        </Link>
                    </li>
                    <li className='rounded hover:shadow cursor-pointer' >
                        <Link className='text-[#FFF]'>
                            <div class="flex items-center justify-center gap-x-3">
                                <div
                                    class="relative text-[#FFF] hover:text-[#FFF] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-[#FFF] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-[#FFF] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                                    <span className='flex items-center justify-center gap-x-1'>ELEMENT <FaAngleDown className='text-sm  mt-1' /></span>

                                </div>

                            </div>
                        </Link>
                    </li>

                </ul>


                <div className='flex flex-col items-center gap-y-5  text-center font-RB' >
                    <div className="icons flex gap-x-2">
                        <div className='size-10 bg-[#BF885E] hover:bg-[#D9945F] flex justify-center items-center rounded-md text-base text-white cursor-pointer'>
                            <FaFacebookF />
                        </div>
                        <div className='size-10 bg-[#BF885E] hover:bg-[#D9945F] flex justify-center items-center rounded-md text-base text-white cursor-pointer'>
                            <FaInstagram />

                        </div>
                        <div className='size-10 bg-[#BF885E] hover:bg-[#D9945F] flex justify-center items-center rounded-md text-base text-white cursor-pointer'>
                            <FaTwitter />

                        </div>
                        <div className='size-10 bg-[#BF885E] hover:bg-[#D9945F] flex justify-center items-center rounded-md text-base text-white cursor-pointer'>
                            <LiaTripadvisor />
                        </div>
                    </div>

                    <p className='text-sm'>7 Rue Caulaincourt, 750118 Paris, France</p>
                    <Link to="tel:+1 800 603 6035" className=' text-sm'> <p>+1 800 603 6035</p>
                        <p>(Viber, WhatsApp)</p>
                    </Link>
                    <Link to="mailto:mail@companyname.com" className='text-[#BF885E]  text-sm'>mail@companyname.com</Link>
                </div>
            </div>

        </div>
    );
};

export default Sidebar;
