import React from "react";
import Image from './layer/Image';
import line2 from '../assets/line2.png';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import Slider from "react-slick";


const SpecialOffer = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerPadding: "20px",
        slidesToShow: 3,
        speed: 500,
    };

    return (
        <div className='bg-white py-36'>
            <style>
                {`
                    .slick-center {
                        transform: scale(1.1) translateY(-20px);
                        transition: transform 0.5s;
                    }
                    .slick-center .image-container {
                        height: 400px;
                        
                    }
                    .slider-container .slick-slide {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .image-container {
                        height: 350px; 
                        overflow: hidden;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: height 0.5s;
                    }
                `}
            </style>
            <div className='flex gap-x-4 items-center mb-2 justify-center'>
                <Image src={line2} className="cursor-auto w-[46px] h-[8px]" />
                <p className='text-sm font-RB tracking-widest text-[#21160E]'>MAKE MEMORIES HAPPEN</p>
            </div>
            <h3 className='text-[48px] text-[#21160E] font-Tinos font-medium text-center mb-10'>Special Offers</h3>
            <div className='w-full h-[300px]'>
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className="image-container">
                           <Image src={p1}/>
                        </div>
                        <div className="image-container">
                           <Image src={p2}/>
                        </div>
                        <div className="image-container">
                           <Image src={p3}/>
                        </div>
                        <div className="image-container">
                           <Image src={p1}/>
                        </div>
                        <div className="image-container">
                           <Image src={p2}/>
                        </div>
                        <div className="image-container">
                           <Image src={p3}/>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default SpecialOffer;
