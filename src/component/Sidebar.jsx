import React from 'react'
import { FaFacebookF, FaHome, FaInstagram, FaTwitter } from 'react-icons/fa'
import { LiaTripadvisor } from 'react-icons/lia'
import { Link } from 'react-router-dom'

const Sidebar = ({sidebarToggle}) => {
    return (
        <div className={`${sidebarToggle?"hidden":"block"} w-[304px] px-[60px] bg-[#21160E] text-white fixed h-full  py-14 flex flex-col items-center justify-between z-50`}>
            <div className='my-2 mb-4'>
                <h2 className='text-2xl text-white font-bold'>Admin</h2>
                <hr />
            </div>

            <ul className='mt-3 text-white'>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 ' >
                    <Link to="#"><FaHome className='inline-block w-6 h-6 mr-2 -mt-2' />Home</Link>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 ' >
                    <Link to="#"><FaHome className='inline-block w-6 h-6 mr-2 -mt-2' />Home</Link>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 ' >
                    <Link to="#"><FaHome className='inline-block w-6 h-6 mr-2 -mt-2' />Home</Link>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 ' >
                    <Link to="#"><FaHome className='inline-block w-6 h-6 mr-2 -mt-2' />Home</Link>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 ' >
                    <Link to="#"><FaHome className='inline-block w-6 h-6 mr-2 -mt-2' />Home</Link>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 ' >
                    <Link to="#"><FaHome className='inline-block w-6 h-6 mr-2 -mt-2' />Home</Link>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 ' >
                    <Link to="#"><FaHome className='inline-block w-6 h-6 mr-2 -mt-2' />Home</Link>
                </li>
            </ul>

            <div className='flex flex-col items-center gap-y-5  text-center font-RB' >
                <div className="icons flex gap-x-2">
                    <div className='size-10 bg-[#BF885E] hover:bg-[#D9945F] flex justify-center items-center rounded-md text-base text-white'><FaFacebookF />
                    </div>
                    <div className='size-10 bg-[#BF885E] hover:bg-[#D9945F] flex justify-center items-center rounded-md text-base text-white'><FaInstagram />

                    </div>
                    <div className='size-10 bg-[#BF885E] hover:bg-[#D9945F] flex justify-center items-center rounded-md text-base text-white'><FaTwitter />

                    </div>
                    <div className='size-10 bg-[#BF885E] hover:bg-[#D9945F] flex justify-center items-center rounded-md text-base text-white'><LiaTripadvisor />

                    </div>
                </div>
                
                <p className='text-sm'>7 Rue Caulaincourt, 750118 Paris, France</p>
                <Link to="tel:+1 800 603 6035" className=' text-sm'> <p>+1 800 603 6035</p> 
                    <p>(Viber, WhatsApp)</p>
                </Link>
                <Link to="mailto:mail@companyname.com" className='text-[#BF885E]  text-sm'>mail@companyname.com</Link>
            </div>

        </div>
    )
}

export default Sidebar
