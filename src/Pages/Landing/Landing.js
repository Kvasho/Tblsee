import React,{Component} from 'react';

import { useTranslation } from 'react-i18next';

// PACKAGES
import {Link} from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";
import axios from 'axios';

// COMPONENTS
import CarouselLanding from '../../Components/CarouselLanding';
import Header from '../../Components/Header';
import Swiper from '../../Components/swiper';
import SwiperMain from "../../Components/swiper-main";

// IMAGES
import HotelRound from "../../Assets/icons/tbilisee-hotel-round-white.svg";

// SCSS
import "./Landing.scss";

import Masonry from 'react-masonry-css';


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

    const Tbilisee = 'https://core.tbilisee.ge/';
    const {arrayLanding} = this.state;
    const half = Math.ceil(arrayLanding.eat_drinks.images.length / 2);
    const eatsFirstHalf = arrayLanding.eat_drinks.images.splice(0, half)
    const eatsSecondHalf = arrayLanding.eat_drinks.images.splice(-half)

    // const { t } = useTranslation();

  return (
    <>
    <Header/>
    <div className="landing">
      <div className="landing-head__swiper">
      <div className="header-title">
          <h1>{arrayLanding.headerTitle.title_en}</h1>
          <Link className="header-title__btn" to="/luxury">explore</Link>
      </div>
      
      <img className="landing-badge" src={HotelRound}/>
       <CarouselLanding 
       title={arrayLanding.headerTitle.title_en}
       spaceBetween="-50" 
       doors={arrayLanding.doors}
       headerTitle={arrayLanding.headerTitle}
       />
      </div>       
      <h2  className="exploring-title">{arrayLanding.exploring.title_en}</h2>      
        <section data-aos="fade-up"
            data-aos-anchor-placement = "top-center" className="exploring container-own">
              <div>
            <div 
            >
              <h3>Tbilisi <span className="white">Hotel</span></h3>
              <p>{arrayLanding.exploring.description_en}</p>
            </div>
            <div>
              <img  src={Tbilisee + arrayLanding.exploring.big_image} alt="/" className="exploring-image__full"/>
            </div>
            <div className="relative">
              <img  src={Tbilisee + arrayLanding.exploring.small_image} alt="/" className="exploring-image__half absolute"/>
            </div>
            </div>
        </section>
      <section data-aos="fade-up"
            data-aos-anchor-placement = "top-center" className="landing-gallery">
        <div>
          <img src={Tbilisee + arrayLanding.gallery.big_image} alt="landing gallery" className="full"/>
        </div>
        <div>
          <p>{arrayLanding.gallery.description_en}</p>
        </div>
        <div className="relative">
          <h3>{arrayLanding.gallery.title_en}</h3>
          <img src={Tbilisee + arrayLanding.gallery.medium_image} alt="Landing Gallery" className="landing-neighborhood__img absolute"/>
        </div>
        <div className="relative">
          <img src={ HotelRound } alt="badge" className="absolute landing-gallery__round"/>
        </div>
        <div>
          <img src={Tbilisee + arrayLanding.gallery.small_image} alt="*" className="landing-neighborhood__img2"/>
        </div>
        <div className="relative">
          <Link to="/gallery" className="landing-gallery__btn absolute">See More</Link>
        </div>
      </section>
      {/* <section data-aos="fade-up"
            data-aos-anchor-placement = "top-center" className="landing-swiper">
              <SwiperMain/>
      </section> */}
      {/* <Masonry
      breakpointCols={breakpointColumnsObj}
     className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
      {
              eatsFirstHalf.map((image,index) => 
              <img src={Tbilisee + image} alt={index} className="full"/>
              )
      }
      </Masonry> */}
      <section  className="landing_eats container-own" data-aos="fade-up"
            data-aos-anchor-placement = "top-center">
          <div>
          <h3 className="eats-title">{arrayLanding.eat_drinks.title_en}</h3>
              <p className="eats-paragraph">{arrayLanding.eat_drinks.description_en}</p>
                 <Link to="/restaurant" className="eats-button">See More</Link>
          </div>
          <div className="landing-eats__img">
          {
              eatsFirstHalf.map((image,index) => 
              <img src={Tbilisee + image} alt={index} className="full"/>
              )
            }
          
          </div>
          <div className="landing-eats__img2">
            {
              eatsSecondHalf.map((image,index) => 
              <img src={Tbilisee + image} alt={index} className="full"/>
              )
            }
          </div>
      </section>
      <section data-aos="fade-up"
            data-aos-anchor-placement = "top-center" className="landing-neighborhood">
          <div className="landing-neighborhood__txt">   
              <h3>{arrayLanding.neighborhood.title_en}</h3>
              <p>{arrayLanding.neighborhood.description_en}</p>
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
