// import Swiper core and required components
import React, { useState, useRef } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../Styles/common.scss';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Link } from 'react-router-dom';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Autoplay]);

export default (props) => {
  const {t, i18n} = props;
  const Tbilisee = 'https://core.tbilisee.ge/';
  const {sliders} = props;
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    // renderPrevButton: () => <button className="swiper-button-prev">Prev</button>,
    // renderNextButton: () => <button className="swiper-button-next">Next</button>
  }
  return (
    <Swiper 
  
  {...params}
      slidesPerView = {1}  
    >
    <button className="swiper-button-next"></button> 
    <button className="swiper-button-prev"></button> 
       
      {
        sliders.map((slide,index) => {           
         return (        
           <>      
        <SwiperSlide>           
            <div className="background-image__cover height" style={{backgroundImage: `url(${Tbilisee + slide.background})`}}>              
            {/* {(() => {
        if (i18n.language === 'KA') {
          return (
            <iframe  className = "iframe-main"
                src="https://tbilisee.ge/static/media/main_ka.html"></iframe> 
          )
        } else if (i18n.language === 'RU') {
          return (
            <iframe  className = "iframe-main"
                src="https://tbilisee.ge/static/media/main_ru.html"></iframe> 
          )
        } else {
          return (
            <iframe  className = "iframe-main"
            src="https://tbilisee.ge/static/media/main.html"></iframe> 
          )
        }
      })()}                                 */}
                <div>
                <img className="door" src={Tbilisee + slide.door} alt="Door"/>
                <Link to={"/" + slide.link}>
                <h1 className="landing-main__title">{slide.title}</h1>
                <h2 className="landing-open__btn">{t('open')}</h2>
                </Link>
                </div>             
            </div>
        </SwiperSlide>
        </>
          )
        }
        )
      }

    </Swiper>
  );
};