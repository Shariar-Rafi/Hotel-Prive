import React from 'react'
import Container from './layer/Container'
import line2 from '../assets/line2.png'
import hotel1 from '../assets/hotel1.jpg'
import Image from './layer/Image'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='py-16 md:py-36 bg-[#f1f1f1] z-40 '>
            <Container className="relative" >
                <div className="main flex">

                    <div className='w-[508px] bg-[#f1f1f1]'>

                    </div>

                    <div className='p-[20px] md:p-[120px] w-[200px] md:w-[718px] bg-white absolute top-1/2 translate-y-[-50%] left-0'>
                        <div className='flex gap-x-4 items-center mb-1 md:mb-6'>
                            <Image src={line2} className="w-7 md:w-14 h-1 md:h-2 cursor-auto" />
                            <p className='font-RB text-[6px] md:text-base tracking-widest'>WELCOME</p>
                        </div>
                        <h3 className='text-sm md:text-[48px] text-[#21160E] font-Tinos mb-0 md:mb-10 font-medium'>
                            Luxury Hotel
                        </h3>
                        <h5 className='text-sm md:text-[36px] text-[#21160E] font-Tinos mb-1 md:mb-10'>
                            Near The Montmartre, Paris
                        </h5>
                        <p className='text-[8px] md:text-lg font-semibold text-[#21160E] font-RB mb-4 hidden md:block' >
                            Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        </p>
                        <p className='text-[8px] md:text-lg text-[#21160E] font-RB mb-1 md:mb-10'>
                            Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus
                        </p >

                        <Link to="#" className="group p-2 md:p-5 cursor-pointer relative text-[8px] md:text-xl font-normal border-0 hidden md:flex items-center justify-center bg-transparent text-[#BF885E] h-auto w-[170px] overflow-hidden transition-all duration-100 font-RB">
                            <span className="group-hover:w-full absolute left-[30%] md:left-0 h-full w-5 border-y border-l border-[#D9945F] transition-all duration-500"></span>

                            <p className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all duration-200">Explore More</p>

                            <span className="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">Explore Now !</span>

                            <span
                                className="group-hover:w-full absolute right-[30%] md:right-0 h-full w-5  border-y border-r  border-[#D9945F]  transition-all duration-500">
                            </span>
                        </Link>
                    </div>
                    <div className='object-cover'>
                        <Image alt={hotel1} src={hotel1} />
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default About
