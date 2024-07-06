import React from 'react'
import Image from './layer/Image'
import { Link } from 'react-router-dom'
import line from '../assets/line.png'
import couple1 from '../assets/couple1.jpg'
import Container from './layer/Container'


const Service = () => {
    return (
        <div className='py-16 md:py-36 bg-[#A6734B] z-40 '>
            <Container className="relative" >
                <div className="main flex">
                    <div className='object-cover'>
                        <Image alt={couple1} src={couple1} />
                    </div>

                    <div className='w-[508px] bg-[#A6734B]'>

                    </div>


                    <div className='p-[20px] md:p-[120px] w-[200px] md:w-[718px] bg-[#9e693f] absolute top-1/2 translate-y-[-50%] right-0'>
                        <div className='flex gap-x-4 items-center mb-1 md:mb-6'>
                            <Image src={line} className="w-7 md:w-14 h-1 md:h-2 cursor-auto" />
                            <p className='font-RB text-[6px] md:text-base tracking-widest text-white'>FACILITIES AND SERVICES
                            </p>
                        </div>
                        <h3 className='text-sm md:text-[48px] text-white font-Tinos mb-0 md:mb-10 font-medium'>
                            Wellness & Spa
                        </h3>
                        <h5 className='text-sm md:text-[36px] text-white font-Tinos mb-1 md:mb-10'>
                            Near The Montmartre, Paris
                        </h5>
                        <p className='text-[8px] md:text-lg font-semibold text-white font-RB mb-4' >
                            Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat.
                        </p>
                        <p className='text-[8px] md:text-lg text-[#C2B0A3] font-RB mb-1 md:mb-10'>
                            Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus
                        </p >

                        <Link to="#" className="group p-2 md:p-5 cursor-pointer relative text-[8px] md:text-xl font-normal border-0 hidden md:flex items-center justify-center bg-transparent text-white h-auto w-[170px] overflow-hidden transition-all duration-100 font-RB">
                            <span className="group-hover:w-full absolute left-[30%] md:left-0 h-full w-5 border-y border-l border-white transition-all duration-500"></span>

                            <p className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all duration-200">Explore More</p>

                            <span className="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">Explore Now !</span>

                            <span
                                className="group-hover:w-full absolute right-[30%] md:right-0 h-full w-5  border-y border-r  border-white  transition-all duration-500">
                            </span>
                        </Link>
                    </div>

                </div>

            </Container>
        </div>
    )
}

export default Service
