import React, { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import line2 from "../assets/line2.png";
import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpg";
import f4 from "../assets/f4.jpg";
import f5 from "../assets/f5.jpg";
import Image from './layer/Image';

const FollowUs = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    }

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    }

    return (
        <div className='bg-white pb-16 md:pb-36'>

            <div className='flex gap-x-4 justify-center items-center mb-0 md:mb-8'>
                <Image src={line2} className="w-7 md:w-14 h-1 md:h-2 cursor-auto" />
                <p className='font-RB text-[8px] md:text-base tracking-widest text-[#626262]'>
                    #HOTELPRIVE
                </p>
            </div>
            <h3 className='text-lg md:text-[48px] text-[#21160E] font-Tinos mb-4 md:mb-14 font-medium text-center'>
                Follow Us on Instagram
            </h3>

            <div className="images flex flex-wrap justify-center items-center gap-4 md:gap-6">
                {[f1, f2, f3, f4, f5].map((image, index) => (
                    <div
                        key={index}
                        className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[232px] md:h-[232px] object-cover"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Image src={image} alt={image} className="w-full h-full object-cover" />
                        {hoveredIndex === index && (
                            <div className="absolute inset-0 bg-black opacity-60 flex items-center justify-center">
                                <FaInstagram className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div >
    );
}

export default FollowUs;
