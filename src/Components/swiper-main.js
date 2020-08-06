// import Swiper core and required components
import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// IMAGES 
import Image1 from '../Assets/Images/gallery-medium.jpg'

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default (props) => {
  console.log(props,"PROPS")
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true, el: '.swiper-pagination',type: 'progressbar' }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide><img src={Image1} alt="*"/></SwiperSlide>
      <SwiperSlide><img src={Image1} alt="*"/></SwiperSlide>
      <SwiperSlide><img src={Image1} alt="*"/></SwiperSlide>
      <SwiperSlide><img src={Image1} alt="*"/></SwiperSlide>
      <SwiperSlide><img src={Image1} alt="*"/></SwiperSlide>
      <SwiperSlide><img src={Image1} alt="*"/></SwiperSlide>
      <SwiperSlide><img src={Image1} alt="*"/></SwiperSlide>
      <SwiperSlide><img src={Image1} alt="*"/></SwiperSlide>
      <div class="swiper-pagination"></div>
    </Swiper>
  );
};