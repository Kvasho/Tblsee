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

import Image2 from '../Assets/Images/gallery-small.jpg';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default () => {
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true, el: '.swiper-pagination',type: 'progressbar' }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={Image1}/></SwiperSlide>
      <SwiperSlide><img src={Image1}/></SwiperSlide>
      <SwiperSlide><img src={Image1}/></SwiperSlide>
      <SwiperSlide><img src={Image1}/></SwiperSlide>
      <SwiperSlide><img src={Image1}/></SwiperSlide>
      <SwiperSlide><img src={Image1}/></SwiperSlide>
      <SwiperSlide><img src={Image1}/></SwiperSlide>
      <SwiperSlide><img src={Image1}/></SwiperSlide>
      <div class="swiper-pagination"></div>
    </Swiper>
  );
};