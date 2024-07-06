import React, { useState } from 'react'
import Container from './layer/Container'
import { SlCalender } from 'react-icons/sl'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import Button from './layer/Button'
import { GiCoffeeCup } from 'react-icons/gi'

const Description = () => {
    const [count01, setCount01] = useState(1);
    const [count02, setCount02] = useState(1);
    return (
        <div className='py-36 bg-white'>
            <Container>
                <div className="main">
                    <div className="description flex justify-between">
                        <div className="left_box flex flex-col pr-4">
                            <h3 className='font-Tinos text-base  md:text-[24px] mb-2 md:mb-6 font-medium'>Description</h3>
                            <p className='font-Tinos text-[10px] md:text-lg max-w-[900px] text-justify mb-6'>Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros.</p>
                            <div>
                                <h5 className='font-Tinos  text-[24px] mb-6 font-medium'>Room Facilities</h5>
                                <div className='flex max-w-[900px] flex-wrap gap-x-40 gap-y-4 justify-between'>
                                    <p className='flex items-center gap-x-4 '><GiCoffeeCup className='text-[#865733] text-lg'/>
                                        <span className='font-Tinos text-lg'>Kettle, tea & coffee</span>
                                    </p>
                                    <p className='flex items-center gap-x-4 '><GiCoffeeCup className='text-[#865733] text-lg'/>
                                        <span className='font-Tinos text-lg'>Kettle, tea & coffee</span>
                                    </p>
                                    <p className='flex items-center gap-x-4 '><GiCoffeeCup className='text-[#865733] text-lg'/>
                                        <span className='font-Tinos text-lg'>Kettle, tea & coffee</span>
                                    </p>
                                    <p className='flex items-center gap-x-4 '><GiCoffeeCup className='text-[#865733] text-lg'/>
                                        <span className='font-Tinos text-lg'>Kettle, tea & coffee</span>
                                    </p>
                                    <p className='flex items-center gap-x-4 '><GiCoffeeCup className='text-[#865733] text-lg'/>
                                        <span className='font-Tinos text-lg'>Kettle, tea & coffee</span>
                                    </p>
                                    <p className='flex items-center gap-x-4 '><GiCoffeeCup className='text-[#865733] text-lg'/>
                                        <span className='font-Tinos text-lg'>Kettle, tea & coffee</span>
                                    </p>
                                    <p className='flex items-center gap-x-4 '><GiCoffeeCup className='text-[#865733] text-lg'/>
                                        <span className='font-Tinos text-lg'>Kettle, tea & coffee</span>
                                    </p>
                                    <p className='flex items-center gap-x-4 '><GiCoffeeCup className='text-[#865733] text-lg'/>
                                        <span className='font-Tinos text-lg'>Kettle, tea & coffee</span>
                                    </p>
                                    <p className='flex items-center gap-x-4 '><GiCoffeeCup className='text-[#865733] text-lg'/>
                                        <span className='font-Tinos text-lg'>Kettle, tea & coffee</span>
                                    </p>
                                    <p className='flex items-center gap-x-4 '><GiCoffeeCup className='text-[#865733] text-lg'/>
                                        <span className='font-Tinos text-lg'>Kettle, tea & coffee</span>
                                    </p>
                                    <p className='flex items-center gap-x-4 '><GiCoffeeCup className='text-[#865733] text-lg'/>
                                        <span className='font-Tinos text-lg'>Kettle, tea & coffee</span>
                                    </p>
                                    <p className='flex items-center gap-x-4 '><GiCoffeeCup className='text-[#865733] text-lg'/>
                                        <span className='font-Tinos text-lg'>Kettle, tea & coffee</span>
                                    </p>
                                    <p className='flex items-center gap-x-4 '><GiCoffeeCup className='text-[#865733] text-lg'/>
                                        <span className='font-Tinos text-lg'>Kettle, tea & coffee</span>
                                    </p>
                                    <p className='flex items-center gap-x-4 '><GiCoffeeCup className='text-[#865733] text-lg'/>
                                        <span className='font-Tinos text-lg'>Kettle, tea & coffee</span>
                                    </p>
                                    <p className='flex items-center gap-x-4 '><GiCoffeeCup className='text-[#865733] text-lg'/>
                                        <span className='font-Tinos text-lg'>Kettle, tea & coffee</span>
                                    </p>
                                    <p className='flex items-center gap-x-4 '><GiCoffeeCup className='text-[#865733] text-lg'/>
                                        <span className='font-Tinos text-lg'>Kettle, tea & coffee</span>
                                    </p>
                                    <p className='flex items-center gap-x-4 '><GiCoffeeCup className='text-[#865733] text-lg'/>
                                        <span className='font-Tinos text-lg'>Kettle, tea & coffee</span>
                                    </p>
                                    <p className='flex items-center gap-x-4 '><GiCoffeeCup className='text-[#865733] text-lg'/>
                                        <span className='font-Tinos text-lg'>Kettle, tea & coffee</span>
                                    </p>

                                </div>
                            </div>
                        </div>



                        <div className="right_box w-[140px] md:w-[340px] h-[680px] md:h-[950px] p-8 bg-[#664831]">
                            <div className='flex gap-x-1 md:gap-x-6 items-center justify-center mb-0 md:mb-8'>
                                <SlCalender className='text-white text-sm md:text-[42px] mb-6 md:mb-5' />
                                <h2 className='font-Tinos text-[7px] md:text-[24px] mb-6 font-medium text-white leading-normal md:leading-8'>Check Availability</h2>
                            </div>

                            <div className='flex flex-col gap-y-6 text-white  mb-0 md:mb-8'>
                                <div className='flex flex-col justify-center w-[90px] md:w-[274px]'>
                                    <p className='text-[10px] md:text-xs font-RB  w-full tracking-normal md:tracking-widest mb-1'>ARRIVAL DATE</p>
                                    <div className='flex  items-center font-RB border-b md:border-b-2 border-white' >
                                        <p className='text-base md:text-[48px]'>3</p>

                                        <div className='ml-2 md:ml-6 font-RB'>
                                            <p className='text-[10px] md:text-[18px] font-bold'>July, 2024</p>
                                            <p className='capitalize text-[10px] md:text-sm'>Wednesday</p>
                                        </div>

                                        <FaAngleUp className='ml-auto' />

                                    </div>
                                </div>

                                <div className='flex flex-col justify-center w-[90px] md:w-[274px]'>
                                    <p className='text-[10px] md:text-xs font-RB  w-full tracking-normal md:tracking-widest mb-1'>DEPARTURE DATE
                                    </p>
                                    <div className='flex  items-center font-RB border-b md:border-b-2 border-white' >
                                        <p className='text-base md:text-[48px]'>5</p>

                                        <div className='ml-2 md:ml-6 font-RB'>
                                            <p className='text-[10px] md:text-[18px] font-bold'>July, 2024</p>
                                            <p className='capitalize text-[10px] md:text-sm'>Friday</p>
                                        </div>

                                        <FaAngleDown className='ml-auto' />


                                    </div>
                                </div>
                                <div className='flex justify-center md:justify-between items-center mb-4 md:mb-8 flex-wrap'>
                                    <div className='flex flex-col justify-center w-[50px] md:w-[120px] mb-4 md:mb-0'>
                                        <p className='text-[10px] md:text-xs font-RB  w-full tracking-normal md:tracking-widest capitalize mb-1'>ADULTS</p>
                                        <div className='flex  items-center font-RB border-b md:border-b-2 border-white' >
                                            <p className='text-base md:text-[48px]'>{count01}</p>

                                            <div className='ml-auto flex flex-col gap-y-0 md:gap-y-3'>
                                                <div >
                                                    <FaAngleUp onClick={() => setCount01(count01 + 1)} />
                                                </div>

                                                <div onClick={() => count01 <= 1 ? setCount01(1) : setCount01(count01 - 1)}>
                                                    <FaAngleDown />
                                                </div>


                                            </div>


                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-center w-[50px] md:w-[120px]'>
                                        <p className='text-[10px] md:text-xs font-RB  w-full tracking-normal md:tracking-widest capitalize mb-1'>CHILDREN</p>
                                        <div className='flex  items-center font-RB border-b md:border-b-2 border-white' >
                                            <p className='text-base md:text-[48px]'>{count02}</p>

                                            <div className='ml-auto flex flex-col gap-y-0 md:gap-y-3'>
                                                <div >
                                                    <FaAngleUp onClick={() => setCount02(count02 + 1)} />
                                                </div>

                                                <div onClick={() => count02 <= 1 ? setCount02(1) : setCount02(count02 - 1)}>
                                                    <FaAngleDown />
                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='mb-4 md:mb-8'>
                                <p className='text-[10px] md:text-xs font-RB  w-full tracking-normal md:tracking-widest text-white mb-4'>
                                    AMENITIES
                                </p>
                                <div className='flex flex-col gap-y-2'>
                                    <p className='flex items-center justify-start gap-x-4'>
                                        <input type="checkbox" />
                                        <span className='font-Tinos text-[7px] md:text-[21px] leading-0 font-medium text-white '>Air Conditioner</span>
                                    </p>
                                    <p className='flex items-center justify-start gap-x-4'>
                                        <input type="checkbox" />
                                        <span className='font-Tinos text-[7px] md:text-[21px] leading-0 font-medium text-white '>Family Friendly</span>
                                    </p>
                                    <p className='flex items-center justify-start gap-x-4'>
                                        <input type="checkbox" />
                                        <span className='font-Tinos text-[7px] md:text-[21px] leading-0 font-medium text-white '>Hair Dryer</span>
                                    </p>
                                    <p className='flex items-center justify-start gap-x-4'>
                                        <input type="checkbox" />
                                        <span className='font-Tinos text-[7px] md:text-[21px] leading-0 font-medium text-white '>LCD Television</span>
                                    </p>
                                    <p className='flex items-center justify-start gap-x-4'>
                                        <input type="checkbox" />
                                        <span className='font-Tinos text-[7px] md:text-[21px] leading-0 font-medium text-white '>Minibar</span>
                                    </p>
                                    <p className='flex items-center justify-start gap-x-4'>
                                        <input type="checkbox" />
                                        <span className='font-Tinos text-[7px] md:text-[21px] leading-0 font-medium text-white '>
                                            No Smoking</span>
                                    </p>
                                    <p className='flex items-center justify-start gap-x-4'>
                                        <input type="checkbox" />
                                        <span className='font-Tinos text-[7px] md:text-[21px] leading-0 font-medium text-white '>Parking</span>
                                    </p>
                                    <p className='flex items-center justify-start gap-x-4'>
                                        <input type="checkbox" />
                                        <span className='font-Tinos text-[7px] md:text-[21px] leading-0 font-medium text-white '>Pets Allowed</span>
                                    </p>
                                    <p className='flex items-center justify-start gap-x-4'>
                                        <input type="checkbox" />
                                        <span className='font-Tinos text-[7px] md:text-[21px] leading-0 font-medium text-white '>
                                            Safe Deposit Box</span>
                                    </p>
                                </div>
                            </div>
                            <Button text="Check Availability" className="md:rounded-md text-[6px] md:text-[10px] 
                            md:text-sm w-full tracking-normal md:tracking-widest " to="#" />

                        </div>
                    </div>


                </div>
            </Container>


        </div>
    )
}

export default Description
