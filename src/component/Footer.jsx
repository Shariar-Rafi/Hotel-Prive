import React from 'react'
import { Link } from 'react-router-dom'
import footerLogo from '../assets/footerLogo.png'
import a1 from '../assets/a1.png'
import a2 from '../assets/a2.png'
import a3 from '../assets/a3.png'
import arrow from '../assets/arrow.png'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import Image from './layer/Image'


const Footer = () => {
    return (
        <div className='bg-[#473D35] py-16 md:py-36 w-full'>
            <div className='w-[340px] md:w-[1420px] bg-[#473D35] mx-auto'>
                <div>
                    <div className='flex justify-center items-start flex-wrap' >
                        <div className='flex flex-col gap-y-1 md:gap-y-6 mr-0 md:mr-[125px]'>

                            <h5 className='font-Tinos text-3xl md:text-[32px] text-white leading-[41.6px] capitalize text-center'>Contact Us</h5>
                            <div className='text-white text-xs md:text-base leading-7 flex items-center flex-col'>
                                <p className='mb-0 md:mb-2'>7 Rue Caulaincourt, 75018 Paris, France</p>
                                <Link to="tel:+1 800 603 6035">
                                    <p>Phone: +1 800 603 6035</p>
                                </Link>
                                <Link to="tel:+8801703561733">
                                    <p>Fax: +1 800 889 9898</p>
                                </Link>
                                <Link to="mailto:mail@companyname.com" className='text-[#BF885E]'>
                                    <p>Email: mail@companyname.com
                                    </p>
                                </Link>
                            </div>
                        </div>

                        <div className='w-[340px] md:w-[438px] justify-center items-center flex flex-col mr-0 md:mr-[229px] mt-4 md:mt-0 mb-8 md:mb-0'>
                            <Image className="my-2 md:my-0" src={footerLogo} />
                            <p className='text-[#fff] font-Tinos text-sm md:text-base leading-normal md:leading-7 text-center mt-4 md:mt-8 '>"The best way to find yourself is to lose yourself in the service of others.”</p>

                            <div className='text-[#fff] flex gap-x-6 md:gap-x-4 mt-6'>
                                <Link to="https://www.facebook.com/shariar.rafi364" target='_blank'>
                                    <FaFacebookF />
                                </Link>

                                <Link to="https://github.com/Shariar-Rafi" target='_blank'>
                                    <FiGithub />
                                </Link>

                                <Link to="https://www.instagram.com/shariar.rafi364/" target='_blank'>
                                    <FaInstagram />
                                </Link>

                            </div>
                            <div className='awards flex gap-x-2 mt-8'>
                                <Image className="w-[50px] md:w-[70px]" src={a1} alt={a1}/>
                                <Image className="w-[55px] md:w-[80px]" src={a3} alt={a3}/>
                                <Image className="w-[50px] md:w-[70px]" src={a2} alt={a2}/>
                            </div>
                        </div>


                        <div className='text-white flex flex-col justify-center items-center gap-y-2'>
                            <h5 className='font-Tinos  text-3xl md:text-[32px] leading-[41.6px] capitalize mb-0 md:mb-8'>Rooms & Suits</h5>

                            <Link className='text-[#BF885E]'>
                                <div class="flex items-center justify-center gap-x-3">
                                    <div
                                        class="relative text-[#BF885E] hover:text-[#BF885E] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-[#BF885E] before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-[#BF885E] after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                                        <span className='flex items-center gap-x-2'>Classic <Image className="w-[30px] h-[6px]" alt={arrow} src={arrow}/></span>
                                        
                                    </div>
                                    
                                </div>
                            </Link>

                            <Link className='text-[#BF885E]'>
                                <div class="flex items-center justify-center gap-x-3">
                                    <div
                                        class="relative text-[#BF885E] hover:text-[#BF885E] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-[#BF885E] before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-[#BF885E] after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                                        <span className='flex items-center gap-x-2'>Superior <Image className="w-[30px] h-[6px]" alt={arrow} src={arrow}/></span>
                                        
                                    </div>
                                    
                                </div>
                            </Link>

                            <Link className='text-[#BF885E]'>
                                <div class="flex items-center justify-center gap-x-3">
                                    <div
                                        class="relative text-[#BF885E] hover:text-[#BF885E] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-[#BF885E] before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-[#BF885E] after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                                        <span className='flex items-center gap-x-2'>Deluxe <Image className="w-[30px] h-[6px]" alt={arrow} src={arrow}/></span>
                                        
                                    </div>
                                    
                                </div>
                            </Link>

                            <Link className='text-[#BF885E]'>
                                <div class="flex items-center justify-center gap-x-3">
                                    <div
                                        class="relative text-[#BF885E] hover:text-[#BF885E] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-[#BF885E] before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-[#BF885E] after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                                        <span className='flex items-center gap-x-2'>Master <Image className="w-[30px] h-[6px]" alt={arrow} src={arrow}/></span>
                                        
                                    </div>
                                    
                                </div>
                            </Link>

     
                        </div>
                    </div>

                    <p className='text-white text-base leading-7 flex justify-center text-center pt-10 md:pt-20 font-RB tracking-wide'>
                        Copyright © 2024 Hôtel Privé. Recreated by Md Monem Shariar Rafi.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Footer
