// Sidebar.js
import React from 'react';
import { FaFacebookF, FaHome, FaInstagram, FaTimes, FaTwitter } from 'react-icons/fa';
import { LiaTripadvisor } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const Sidebar = ({ sidebarToggle, setSidebarToggle }) => {
    return (
        <div className={`fixed top-0 left-0 w-[304px] 
        px-[60px] h-full py-14 bg-[#21160E] flex flex-col items-center justify-between text-white transform 
        ${sidebarToggle ? 'translate-x-0 -z-50' : '-translate-x-full z-50' } transition-transform duration-300`}>

            <div>

            </div>
            <div className="flex justify-between items-center p-4 ">
                <div className='my-2 mb-4'>
                    <h2 className='text-2xl text-white font-bold'>Admin</h2>
                    <hr />
                </div>

            </div>

            <FaTimes className="cursor-pointer text-white absolute  top-4 right-4 "
                onClick={() => setSidebarToggle(false)} />


            <ul className='mt-3 text-white'>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer' >
                    <Link to="#"><FaHome className='inline-block w-6 h-6 mr-2 -mt-2 ' />Home</Link>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer' >
                    <Link to="#"><FaHome className='inline-block w-6 h-6 mr-2 -mt-2' />Home</Link>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer' >
                    <Link to="#"><FaHome className='inline-block w-6 h-6 mr-2 -mt-2' />Home</Link>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer' >
                    <Link to="#"><FaHome className='inline-block w-6 h-6 mr-2 -mt-2' />Home</Link>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer' >
                    <Link to="#"><FaHome className='inline-block w-6 h-6 mr-2 -mt-2' />Home</Link>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer' >
                    <Link to="#"><FaHome className='inline-block w-6 h-6 mr-2 -mt-2' />Home</Link>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer' >
                    <Link to="#"><FaHome className='inline-block w-6 h-6 mr-2 -mt-2' />Home</Link>
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
    );
};

export default Sidebar;
