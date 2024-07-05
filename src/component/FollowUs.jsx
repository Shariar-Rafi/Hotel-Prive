import React, { useState } from 'react';
import line2 from "../assets/line2.png";
import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpg";
import f4 from "../assets/f4.jpg";
import f5 from "../assets/f5.jpg";
import Image from './layer/Image';
import instagram from "../assets/instagram.png";
const FollowUs = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    }

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    }

    return (
        <div className='bg-white pb-36'>
            <div className='flex gap-x-4 items-center mb-4 justify-center'>
                <Image src={line2} className="cursor-auto w-[46px] h-[8px]" />
                <p className='text-sm font-RB tracking-widest text-[#21160E]'>#HOTELPRIVE</p>
            </div>
            <h3 className='text-[48px] text-[#21160E] font-Tinos font-medium text-center mb-10'>Follow Us on Instagram</h3>

            <div className="images flex justify-center items-center gap-x-6">
                {[f1, f2, f3, f4, f5].map((image, index) => (
                    <div
                        key={index}
                        className="image size-[232px] object-cover relative"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Image src={image} alt={image} />
                        {hoveredIndex === index && (
                            <div className="overlay absolute inset-0 bg-black opacity-60 flex items-center justify-center">
                                <img src={instagram} alt="Instagram" className="w-12 h-12" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FollowUs;
