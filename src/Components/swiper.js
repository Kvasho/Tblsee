import Image from '../Assets/Images/landing-gallery-2.jpg';
import React from 'react';
import Swiper from 'react-id-swiper';
const ProgressPagination = () => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  }
  return (
    <Swiper {...params}>
      <div><img src={Image}/></div>
      <div><img src={Image}/></div>
      <div><img src={Image}/></div>
      <div><img src={Image}/></div>
      <div><img src={Image}/></div>
    </Swiper>
  )
};
export default ProgressPagination;