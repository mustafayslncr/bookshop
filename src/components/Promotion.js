import React from 'react'
import './Promotion.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const Promotion = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
  return (
    <div className='promotion'>
    
    <div className='slider'>
        <Slider className="slider-detay" {...settings}>
        <div>
            <img src="/resimler/slider1.jpg" alt=""/>
        </div>
        <div>
            <img src="/resimler/slider2.jpg" alt=""/>
        </div>
        <div>
            <img src="/resimler/slider3.jpg" alt=""/>
        </div>
        <div>
            <img src="/resimler/slider4.jpg" alt=""/>
        </div>
        <div>
            <img src="/resimler/slider5.jpg" alt=""/>
        </div>
        <div>
            <img src="/resimler/slider6.jpg" alt=""/>
        </div>
          
        </Slider>
    </div>
    </div>
  )
}

export default Promotion