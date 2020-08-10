  import React, {useRef} from 'react';
  import Swiper from 'react-id-swiper';
import { propTypes } from 'react-bootstrap/esm/Image';
  const Navigation = (props) => {
    const params = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
        loop: true
    }
    const {i18n} = props;
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
      <Swiper ref={swiperRef} {...params}>
      {
          props.arrayDestination.map((item,index) => <div>
              <div className="destination-card" key={index}>
                      <h3>{(() => {
                    if (i18n.language === 'GE') {
                      return (
                        item.title_ge
                      )
                    } else if (i18n.language === 'RU') {
                      return (
                        item.title_ru
                      )
                    } else {
                      return (
                        item.title_en
                      )
                    }
      })()}</h3>
                  <img src={Tbilisee + item.image} className="destination-card__image" onClick={() => props.toggleImage(item)}/> 
                </div>
          </div>)
      }
      </Swiper>
      {/* <div className="dest-swiper__controls">
        <button onClick={goPrev} className="dest-swiper__prev"/>
        <button onClick={ goNext } className="dest-swiper__next"/>
      </div> */}
      </>
    )
  };
  export default Navigation;