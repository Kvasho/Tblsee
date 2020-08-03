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
  const {doors} = props;
  console.log(props,"LLLLLLLLLLLLLLLLLLLLLLLLLLLLL")
  return (
    <Swiper
      slidesPerView = {2}  
    >
       
      {
        doors.map((door,index) => {
          // let type = door.type_en.indexOf(('luxury')) == -1 ? 'mid-range' : 'luxury';    
         return (        
           <>  
          
        <SwiperSlide>
          
          <Link to="/luxury">
            <img src={Tbilisee + door.door_image} alt={index}/>
            </Link>
        </SwiperSlide>
        </>
          )
        }
        )
      }

    </Swiper>
  );
};