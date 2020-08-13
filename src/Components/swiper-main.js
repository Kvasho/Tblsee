
  import React, { useRef } from 'react';
  import Swiper from 'react-id-swiper';
import { Link } from 'react-router-dom';
  const SwiperMain = (props) => {
    const params = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
        spaceBetween:    240,
        slidesPerView:   3,
        activeSlideKey:  'key'
    }
    const Tbilisee = 'https://core.tbilisee.ge/';
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
      <>
      <Swiper ref={swiperRef} {...params} className="landing-swiper__rooms 	swiper-container">
        {
          props.arrayLandingRooms.map((item,index) => <div><img src={Tbilisee + item.main_image} key={index} className="full swiper-slide"/></div>)
        }
      </Swiper>
      <div className="landing-swiper__controller">
      <button onClick={goPrev} className="landing-rooms__prev">prev  <span>/ garden view</span></button>
      <div>
        <h4>mid-range</h4>
        <div className="flex relative">
          <Link to='/rooms' className="landing-swiper__seemore">see more</Link>
          <Link>book now</Link>
        </div>       
      </div>
      <button onClick={ goNext } className="landing-rooms__next"><span>city view / </span> next</button>
  </div>
  </>
    )
  };
  export default SwiperMain;