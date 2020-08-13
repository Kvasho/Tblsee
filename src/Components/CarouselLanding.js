// import Swiper core and required components
import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Link } from 'react-router-dom';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default (props) => {
  const Tbilisee = 'https://core.tbilisee.ge/';
  const {sliders} = props;
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }
  return (
    <Swiper {...params}
      slidesPerView = {1}  
    >
       
      {
        sliders.map((slide,index) => {           
         return (        
           <>            
        <SwiperSlide>                    
            <Link to="/restaurant" className="landing-open__btn">open</Link>
            <img src={Tbilisee + slide.background} alt={index} key={index}/>
        </SwiperSlide>
        </>
          )
        }
        )
      }

    </Swiper>
  );
};