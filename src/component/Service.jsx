import React from 'react'
import Image from './layer/Image'
import { Link } from 'react-router-dom'
import line from '../assets/line.png'
import couple1 from '../assets/couple1.jpg'
import Container from './layer/Container'


const Service = () => {
    return (
        <div className='py-36 bg-[#664831] z-40 relative'>
            <Container className="relative">
                <div className="main flex">
                    <div>
                        <Image alt={couple1} src={couple1} />
                    </div>

                    <div className='w-[608px] bg-[#664831]'>

                    </div>

                    <div className='p-[120px] w-[718px] bg-[#7c583c] absolute top-1/2 translate-y-[-50%] right-0'>
                        <div className='flex gap-x-4 items-center  mb-4'>
                            <Image src={line} className="cursor-auto w-[46px] h-[8px]" />
                            <p className='text-base font-RB tracking-widest text-white'>WELCOME</p>
                        </div>
                        <h3 className='text-[48px] text-white font-Tinos mb-2 font-medium'>
                            Luxury Hotel
                        </h3>
                        <h5 className='text-[36px] text-white font-Tinos mb-10'>
                            Near The Montmartre, Paris
                        </h5>
                        <p className='text-lg font-semibold text-white font-RB mb-4' >
                            Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        </p>
                        <p className='text-lg text-white font-RB mb-10'>
                            Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus
                        </p >

                        <Link to="#" className="group p-5 cursor-pointer relative  text-xl font-normal border-0 flex items-center justify-center bg-transparent text-white h-auto w-[170px] overflow-hidden transition-all duration-100 font-RB">
                            <span className="group-hover:w-full absolute left-0 h-full w-5 border-y border-l border-white transition-all duration-500"></span>

                            <p className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all duration-200">Explore More</p>

                            <span className="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">Explore Now !</span>

                            <span
                                className="group-hover:w-full absolute right-0 h-full w-5  border-y border-r  border-white  transition-all duration-500">
                            </span>
                        </Link>
                    </div>

                </div>

            </Container>
        </div>
    )
}

export default Service
