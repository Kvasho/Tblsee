import React, { useRef } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import '../Styles/costumiseSwiper.scss';
import Image from "../Assets/Images/landing-gallery.jpg"
import Image2 from "../Assets/Images/landing-gallery-2.jpg"
import Image3 from "../Assets/Images/landing-gallery-3.jpg"



  const ManipulatingComponentOutSideSwiper = (props) => {
    const params = {
        navigation:      {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        spaceBetween:    props.spaceBetween,
        slidesPerView:   props.slidesPerView,
        slidesPerColumn: 1,
        loop:            true,
        speed:           400,
    
    };
    const swiperRef = useRef(null);
    const goNext = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    };
    const goPrev = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slidePrev();
      }
    };
    return (
      <div>
        <Swiper ref={swiperRef} {...params}>
          <div>
              <img src={Image}/>
          </div>
          <div>
              <img src={Image}/>
          </div>
          <div>
              <img src={Image2}/>
          </div>
          <div>
              <img src={Image2}/>
          </div>
          <div>
              <img src={Image}/>
          </div>
        </Swiper>
        <button onClick={goPrev}>Prev</button>
        <button onClick={goNext}>Next</button>
      </div>
    );
  };
  export default ManipulatingComponentOutSideSwiper;