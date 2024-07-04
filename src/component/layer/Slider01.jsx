import React from 'react';
import s1 from '../../assets/s1.jpg';
import s2 from '../../assets/s2.jpg';
import s3 from '../../assets/s3.jpg';
import s4 from '../../assets/s4.jpg';
import Slider from 'react-slick';
import Image from './Image';
import SliderItem from './SliderItem';

const Slider01 = ({text1,text2,text3,text4}) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='w-full'>
      <Slider {...settings}>
        <div className="relative w-full h-[816px]">
          <Image className="object-cover w-full h-full" src={s1}/>
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 transition-all duration-300 group">
            <SliderItem className="" text={text1}/>
          </div>
        </div>

        <div className="relative w-full h-[816px]">
          <Image className="object-cover w-full h-full" src={s2}/>
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 transition-all duration-300 group">
            <SliderItem className="" text={text2}/>
          </div>
        </div>

        <div className="relative w-full h-[816px]">
          <Image className="object-cover w-full h-full" src={s3}/>
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 transition-all duration-300 group">
            <SliderItem className="" text={text3}/>
          </div>
        </div>

        <div className="relative w-full h-[816px]">
          <Image className="object-cover w-full h-full" src={s4}/>
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 transition-all duration-300 group">
            <SliderItem className="" text={text4}/>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Slider01;
