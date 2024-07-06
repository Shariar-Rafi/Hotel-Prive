import React, { useState } from 'react'
import Container from './layer/Container'
import { SlCalender } from 'react-icons/sl'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import Button from './layer/Button'
import { GiCoffeeCup } from 'react-icons/gi'
import Image from './layer/Image'
import plan from '../assets/plan.png'
import g1 from '../assets/g1.jpg'
import g2 from '../assets/g2.jpg'
import g3 from '../assets/g3.jpg'
import g4 from '../assets/g4.jpg'
import Slider from "react-slick";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

const NextArrow = ({ onClick }) => {
    return (
        <div
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#0000003e] p-1 md:p-4 rounded-full cursor-pointer z-40"
            onClick={onClick}
        >
            <MdKeyboardDoubleArrowRight className="text-white" />
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div
            className="absolute top-1/2 left-0 transform -translate-y-1/2  bg-[#0000003e] p-1 md:p-4 rounded-full cursor-pointer z-40"
            onClick={onClick}
        >
            <MdKeyboardDoubleArrowLeft className="text-white" />
        </div>
    );
};

const Description = () => {
    const [count01, setCount01] = useState(1);
    const [count02, setCount02] = useState(1);

    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        speed: 1000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    };
    return (
        <div className='py-10 md:py-36 bg-white'>
            <Container>
                <div className="main">
                    <div className="description flex justify-between">
                        <div className="left_box flex flex-col pr-4">
                            <h3 className='font-Tinos text-base  md:text-[24px] mb-2 md:mb-6 font-medium'>Description</h3>
                            <p className='font-Tinos text-[10px] md:text-lg max-w-[200px] md:max-w-[900px] text-justify mb-2 md:mb-6'>Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros.</p>
                            <div className='mb-2 md:mb-6'>
                                <h5 className='font-Tinos  text-[24px] mb-2 md:mb-6 font-medium'>Room Facilities</h5>
                                <div className='flex max-w-[200px] md:max-w-[900px] flex-wrap gap-x-3 md:gap-x-40 gap-y-2 md:gap-y-4 justify-between'>
                                    <p className='flex items-center gap-x-1 md:gap-x-4 '><GiCoffeeCup className='text-[#865733] text-[8px] md:text-lg' />
                                        <span className='font-Tinos text-[8px] md:text-lg'>Kettle, tea & coffee</span>
                                    </p>

                                    <p className='flex items-center gap-x-1 md:gap-x-4 '><GiCoffeeCup className='text-[#865733] text-[8px] md:text-lg' />
                                        <span className='font-Tinos text-[8px] md:text-lg'>Kettle, tea & coffee</span>
                                    </p>
                                    <p className='flex items-center gap-x-1 md:gap-x-4 '><GiCoffeeCup className='text-[#865733] text-[8px] md:text-lg' />
                                        <span className='font-Tinos text-[8px] md:text-lg'>Kettle, tea & coffee</span>
                                    </p>

                                    <p className='flex items-center gap-x-1 md:gap-x-4 '><GiCoffeeCup className='text-[#865733] text-[8px] md:text-lg' />
                                        <span className='font-Tinos text-[8px] md:text-lg'>Kettle, tea & coffee</span>
                                    </p>
                                    <p className='flex items-center gap-x-1 md:gap-x-4 '><GiCoffeeCup className='text-[#865733] text-[8px] md:text-lg' />
                                        <span className='font-Tinos text-[8px] md:text-lg'>Kettle, tea & coffee</span>
                                    </p>

                                    <p className='flex items-center gap-x-1 md:gap-x-4 '><GiCoffeeCup className='text-[#865733] text-[8px] md:text-lg' />
                                        <span className='font-Tinos text-[8px] md:text-lg'>Kettle, tea & coffee</span>
                                    </p>
                                    <p className='flex items-center gap-x-1 md:gap-x-4 '><GiCoffeeCup className='text-[#865733] text-[8px] md:text-lg' />
                                        <span className='font-Tinos text-[8px] md:text-lg'>Kettle, tea & coffee</span>
                                    </p>

                                    <p className='flex items-center gap-x-1 md:gap-x-4 '><GiCoffeeCup className='text-[#865733] text-[8px] md:text-lg' />
                                        <span className='font-Tinos text-[8px] md:text-lg'>Kettle, tea & coffee</span>
                                    </p>
                                    <p className='flex items-center gap-x-1 md:gap-x-4 '><GiCoffeeCup className='text-[#865733] text-[8px] md:text-lg' />
                                        <span className='font-Tinos text-[8px] md:text-lg'>Kettle, tea & coffee</span>
                                    </p>

                                    <p className='flex items-center gap-x-1 md:gap-x-4 '><GiCoffeeCup className='text-[#865733] text-[8px] md:text-lg' />
                                        <span className='font-Tinos text-[8px] md:text-lg'>Kettle, tea & coffee</span>
                                    </p>
                                    <p className='flex items-center gap-x-1 md:gap-x-4 '><GiCoffeeCup className='text-[#865733] text-[8px] md:text-lg' />
                                        <span className='font-Tinos text-[8px] md:text-lg'>Kettle, tea & coffee</span>
                                    </p>

                                    <p className='flex items-center gap-x-1 md:gap-x-4 '><GiCoffeeCup className='text-[#865733] text-[8px] md:text-lg' />
                                        <span className='font-Tinos text-[8px] md:text-lg'>Kettle, tea & coffee</span>
                                    </p>




                                </div>
                            </div>

                            <h3 className='font-Tinos text-base  md:text-[24px] mb-2 md:mb-6 font-medium'>Floor Plan</h3>
                            <Image className="object-cover mb-2 md:mb-6 cursor-auto" src={plan} alt={plan} />
                            <h5 className='font-Tinos  text-[24px] mb-2 md:mb-6 font-medium'>Room Facilities</h5>
                            <div className='main_slider max-w-[200px] md:max-w-[900px] mb-2 md:mb-6'>
                                <div className="slider-container relative">
                                    <Slider {...settings}>
                                        <div className="image-container">
                                            <Image src={g1} />
                                        </div>
                                        <div className="image-container">
                                            <Image src={g2} />
                                        </div>
                                        <div className="image-container">
                                            <Image src={g3} />
                                        </div>
                                        <div className="image-container">
                                            <Image src={g4} />
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <h3 className='font-Tinos text-base  md:text-[24px] mb-2 md:mb-6 font-medium'>Terms and Conditions</h3>
                            <p className='font-Tinos text-[10px] md:text-lg max-w-[200px] md:max-w-[900px] text-justify mb-2 md:mb-6'>
                                Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros. Nulla facilisi. Aenean nec eros.
                            </p>
                            <h3 className='font-Tinos text-base  md:text-[24px] mb-2 md:mb-6 font-medium'>Rates</h3>
                            <div className='rates_table font-RB  '>
                                <div className="flex justify-start items-center ">
                                        <div className="">
                                            <table className="bg-white rounded-lg overflow-hidden shadow-lg max-w-[200px] md:max-w-[900px]">
                                                <thead className="bg-[#00000023] text-white text-xs">
                                                    <tr>
                                                        <th className="p-1 md:p-3 text-left text-black font-medium text-xs" >Price
                                                        in USD</th>
                                                        <th className="p-1 md:p-3 text-left text-black font-medium text-xs">Season_1
                                                        </th>
                                                        <th className="p-1 md:p-3 text-left text-black font-medium text-xs">Season_2
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="hover:bg-gray-100">
                                                        <td className="border p-1 md:p-3 text-xs">Sunday - Thursday</td>
                                                        <td className="border p-1 md:p-3 truncate text-xs">$ 99	</td>
                                                        <td className="border p-1 md:p-3 text-xs">$ 159	</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-100">
                                                        <td className="border p-1 md:p-3 text-xs">Friday - Saturday</td>
                                                        <td className="border p-1 md:p-3 truncate text-xs">$ 119</td>
                                                        <td className="border p-1 md:p-3 text-xs">$ 159	</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                </div>
                            </div>



                        </div>



                        <div className="right_box w-[140px] md:w-[340px] h-[690px] md:h-[950px] p-8 bg-[#664831]">
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
                            <Button text="Check Availability" className="md:rounded-md py-0.5 md:py-4 !text-[6px]
                            md:!text-sm w-full tracking-normal md:tracking-widest " to="#" />

                        </div>
                    </div>


                </div>
            </Container>


        </div>
    )
}

export default Description
