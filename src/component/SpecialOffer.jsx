import React from "react";
import Image from './layer/Image';
import line2 from '../assets/line2.png';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import Slider from "react-slick";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

const NextArrow = ({ onClick }) => {
    return (
        <div
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#aaaaaaa2] p-4 rounded-full cursor-pointer z-50"
            onClick={onClick}
        >
            <MdKeyboardDoubleArrowRight className="text-white" />
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div
            className="absolute top-1/2 left-0 transform -translate-y-1/2  bg-[#aaaaaaa2] p-4 rounded-full cursor-pointer z-50"
            onClick={onClick}
        >
            <MdKeyboardDoubleArrowLeft className="text-white" />
        </div>
    );
};

const SpecialOffer = () => {
    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        speed: 1000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
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
        <div className='bg-white pt-8 md:pt-28'>
            <div className='flex gap-x-4 justify-center items-center mb-0 md:mb-6'>
                <Image src={line2} className="w-7 md:w-14 h-1 md:h-2 cursor-auto" />
                <p className='font-RB text-[8px] md:text-base tracking-widest'>MAKE MEMORIES HAPPEN
                </p>
            </div>
            <h3 className='text-lg md:text-[48px] text-[#21160E] font-Tinos mb-4 md:mb-10 font-medium text-center'>
            Special Offers
            </h3>
            <div className='w-full'>
                <div className="slider-container relative">
                    <Slider {...settings}>
                        <div className="image-container">
                            <Image src={p1} />
                        </div>
                        <div className="image-container">
                            <Image src={p2} />
                        </div>
                        <div className="image-container">
                            <Image src={p3} />
                        </div>
                        <div className="image-container">
                            <Image src={p1} />
                        </div>
                        <div className="image-container">
                            <Image src={p2} />
                        </div>
                        <div className="image-container">
                            <Image src={p3} />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default SpecialOffer;
