// import Swiper core and required components
import React, { useRef } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade   } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import '../Styles/common.scss';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Link } from 'react-router-dom';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
SwiperCore.use([Autoplay]);
SwiperCore.use([EffectFade]);

export default (props) => {
  const {t} = props;
  const Tbilisee = 'https://core.tbilisee.ge/';
  const {sliders} = props;
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }
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
    <Swiper autoplay={{
      delay: 3000,
      disableOnInteraction: false
  }}
  {...params}
      slidesPerView = {1}  
    >
       
      {
        sliders.map((slide,index) => {           
         return (        
           <>            
        <SwiperSlide>                    
            <Link to={"/" + slide.link} className="landing-open__btn">{t('open')}</Link>
            <div className="background-image__cover height" style={{backgroundImage: `url(${Tbilisee + slide.background})`}}>
              <img className="door" src={Tbilisee + slide.door} alt="Door"/>
            </div>
        </SwiperSlide>
        </>
          )
        }
        )
      }

    </Swiper>
    <div className="absolute luxury-swiper__controller">
            <button onClick={goPrev} className="luxury-prev"></button>
            <button onClick={ goNext } className="luxury-next"></button>
        </div>
        </>
  );
};