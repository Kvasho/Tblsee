import React,{Component} from 'react';

// PACKAGES
import {Link} from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";
import axios from 'axios';
import SwiperMain from '../../Components/swiper-main'

// COMPONENTS
import CarouselLanding from '../../Components/CarouselLanding';
import Header from '../../Components/Header';
import { useTranslation } from 'react-i18next';

// IMAGES
import HotelRound from "../../Assets/icons/tbilisee-hotel-round-white.svg";
import GalleryRound from '../../Assets/icons/hotel-badge.svg';

// SCSS
import "./Landing.scss";


export default class Landing extends Component {
  state = {
    arrayLanding: undefined
  }

  componentDidMount(){
    axios.get('https://core.tbilisee.ge/api/mainPage').then(res => {
      this.setState( {arrayLanding: res.data} ); 
    })
    AOS.init({
			duration: 2000
		});
  }
  render(){
    if(!this.state.arrayLanding) {
      return "loading"; //TODO: Need Loading State
    }
    console.log(this.state.arrayLanding,"arrayLANDING")

    const Tbilisee = 'https://core.tbilisee.ge/';
    const {arrayLanding} = this.state;
    const half = 3;
    const eatsFirstHalf = arrayLanding.eat_drinks.images.splice(0, half)
    const eatsSecondHalf = arrayLanding.eat_drinks.images.splice(-half)
    const {t, i18n} = this.props;
    

    // const { t } = useTranslation();

  return (
    <>
    <Header/>
    <div className="landing">
      <div className="landing-head__swiper">
      <div className="header-title">
          <h1>{(() => {
        if (i18n.language === 'GE') {
          return (
            arrayLanding.headerTitle.title_ge
          )
        } else if (i18n.language === 'RU') {
          return (
            arrayLanding.headerTitle.title_ru
          )
        } else {
          return (
            arrayLanding.headerTitle.title_en
          )
        }
      })()}</h1>
          <Link className="header-title__btn" to="/luxury">{t('explore')}</Link>
      </div>
      
      <img className="landing-badge" src={HotelRound}/>
       <CarouselLanding 
        title={arrayLanding.headerTitle.title_en}
        spaceBetween="-50" 
        doors={arrayLanding.doors}
        headerTitle={arrayLanding.headerTitle}
       />
      </div>       
      <h2  className="exploring-title">{(() => {
        if (i18n.language === 'GE') {
          return (
            arrayLanding.exploring.title_ge
          )
        } else if (i18n.language === 'RU') {
          return (
            arrayLanding.exploring.title_ru
          )
        } else {
          return (
            arrayLanding.exploring.title_en
          )
        }
      })()}</h2>      
        <section data-aos="fade-up"
            data-aos-anchor-placement = "top-center" className="exploring container-own">
              
            <div 
            >
              <h3>Tbilisi <span className="white">Hotel</span></h3>
              <p>{(() => {
        if (i18n.language == 'GE') {
          return (
            arrayLanding.exploring.description_ge
          )
        } else if (i18n.language === 'RU') {
          return (
            arrayLanding.exploring.description_ru
          )
        } else {
          return (
            arrayLanding.exploring.description_en
          )
        }
      })()}</p>
            </div>
            <div>
              <img  src={Tbilisee + arrayLanding.exploring.big_image} alt="/" className="exploring-image__full"/>
            </div>
            <div className="relative">
              <img  src={Tbilisee + arrayLanding.exploring.small_image} alt="/" className="exploring-image__half absolute"/>
            </div>
           
        </section>
      <section data-aos="fade-up"
            data-aos-anchor-placement = "top-center" className="landing-gallery">
              <div className="landing-gallery__absolute absolute"/>
        <div>
          <img src={Tbilisee + arrayLanding.gallery.big_image} alt="landing gallery" className="full gallery-big__image"/>
        </div>
        <div>
          <p>{(() => {
        if (i18n.language === 'GE') {
          return (
            arrayLanding.gallery.description_ge
          )
        } else if (i18n.language === 'RU') {
          return (
            arrayLanding.gallery.description_ru
          )
        } else {
          return (
            arrayLanding.gallery.description_en
          )
        }
      })()}</p>
        </div>
        <div className="relative">
          <h3>{(() => {
        if (i18n.language === 'GE') {
          return (
            arrayLanding.gallery.title_ge
          )
        } else if (i18n.language === 'RU') {
          return (
            arrayLanding.gallery.title_ru
          )
        } else {
          return (
            arrayLanding.gallery.title_en
          )
        }
      })()}</h3>
          <img src={Tbilisee + arrayLanding.gallery.medium_image} alt="Landing Gallery" className="landing-neighborhood__img absolute"/>
        </div>
        <div className="relative">
        <img className="gallery-badge absolute" src={GalleryRound}/>
        </div>
        <div>
          <img src={Tbilisee + arrayLanding.gallery.small_image} alt="*" className="landing-neighborhood__img2"/>
        </div>
        <div className="relative">
          <Link to="/gallery" className="landing-gallery__btn absolute">{t('See More')}</Link>
        </div>
      </section>
      <section data-aos="fade-up"
            data-aos-anchor-placement = "top-center" className="landing-swiper">
              <SwiperMain arrayLandingRooms={arrayLanding.rooms}/>
      </section>
      <section  className="landing_eats container-own" data-aos="fade-up"
            data-aos-anchor-placement = "top-center">
          <div>
          <h3 className="eats-title">{(() => {
        if (i18n.language === 'GE') {
          return (
            arrayLanding.eat_drinks.title_ge
          )
        } else if (i18n.language === 'RU') {
          return (
            arrayLanding.eat_drinks.title_ru
          )
        } else {
          return (
            arrayLanding.eat_drinks.title_en
          )
        }
      })()}</h3>
              <p className="eats-paragraph">{(() => {
        if (i18n.language === 'GE') {
          return (
            arrayLanding.eat_drinks.description_ge
          )
        } else if (i18n.language === 'RU') {
          return (
            arrayLanding.eat_drinks.description_ru
          )
        } else {
          return (
            arrayLanding.eat_drinks.description_en
          )
        }
      })()}</p>
                 <Link to="/restaurant" className="eats-button">See More</Link>
          </div>
          <div className="landing-eats__img">
          {
              eatsFirstHalf.map((image,index) => 
              <img src={Tbilisee + image} alt={index} className="full" key={index}/>
              )
            }
          
          </div>
          <div className="landing-eats__img2">
            {
              eatsSecondHalf.map((image,index) => 
              <img src={Tbilisee + image} alt={index} className="full" key={index}/>
              )
            }
          </div>
      </section>
      <section data-aos="fade-up"
            data-aos-anchor-placement = "top-center" className="landing-neighborhood">
          <div className="landing-neighborhood__txt">   
              <h3>{(() => {
        if (i18n.language === 'GE') {
          return (
            arrayLanding.neighborhood.title_ge
          )
        } else if (i18n.language === 'RU') {
          return (
            arrayLanding.neighborhood.title_ru
          )
        } else {
          return (
            arrayLanding.neighborhood.title_en
          )
        }
      })()}</h3>
              <p>{(() => {
        if (i18n.language === 'GE') {
          return (
            arrayLanding.neighborhood.description_ge
          )
        } else if (i18n.language === 'RU') {
          return (
            arrayLanding.neighborhood.description_ru
          )
        } else {
          return (
            arrayLanding.neighborhood.description_en
          )
        }
      })()}</p>
                <Link to="/location" className="neighborhood-more">View More</Link>
          </div>
            
            <img src= {Tbilisee +  arrayLanding.neighborhood.big_image } alt="location" className="full"/>
            <img src={Tbilisee + arrayLanding.neighborhood.small_image}  alt="location" className="neigborhood-img2"/>
       
          </section>
    </div>
    </>
  );
}
}
