import React,{Component} from 'react';

import * as coreTbilisee from '../../constants/request';

// PACKAGES
import {Link} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import AOS from 'aos';
import "aos/dist/aos.css";
import axios from 'axios'

// COMPONENTS
import CarouselLanding from '../../Components/CarouselLanding';
import Header from '../../Components/Header';
import Swiper from '../../Components/swiper';

// IMAGES
import HotelRound from "../../Assets/icons/tbilisee-hotel-round.svg";

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

    const Tbilisee = 'https://core.tbilisee.ge/';
    const {arrayLanding} = this.state;
  return (
    <>
    <Header/>
    <div className="landing">
      <div className="landing-head__swiper">
       <CarouselLanding doors={arrayLanding}/>
      </div>       
      <h2  className="exploring-title">{arrayLanding.exploring.title_en}</h2>      
        <section data-aos="fade-up"
            data-aos-anchor-placement = "top-center" className="exploring container-own">
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
      <section data-aos="fade-up"
            data-aos-anchor-placement = "top-center" className="landing-swiper">
        <Swiper 
            containerClass   = "swiper-div"
            slidesPerView    = "auto"
            spaceBetween     = { 50 }
            buttonNextClass  = "landing-btn__next"
            buttonPrevClass  = "landing-btn__prev"
            swiperController = "landing-swiper__controller" 
            prevButton       = "Prev"
            nextButton       = "Next"
            rooms            =             {arrayLanding.rooms}
        />
      </section>
      <section  className="landing_eats container-own">
          <Row xs={1} lg={2} xl={3}>
            <Col>
              <h3 className="eats-title">{arrayLanding.eat_drinks.title_en}</h3>
              <p className="eats-paragraph">{arrayLanding.eat_drinks.description_en}</p>
                 <Link to="/restaurant" className="eats-button">See More</Link>
            </Col>
            {
              arrayLanding.eat_drinks.images.map((image,index) => 
              <Figure data-aos="fade-up"
                data-aos-anchor-placement = "top-center">
                <Figure.Image
                  width={475}
                  height={534}
                  alt="171x180"
                  src={Tbilisee + image}
                  className="eats-img"
                />
              </Figure>
              )
            }
          </Row>
      </section>
      <section data-aos="fade-up"
            data-aos-anchor-placement = "top-center" className="landing-neighborhood">
          <div className="landing-neighborhood__txt">   
              <h3>{arrayLanding.neighborhood.title_en}</h3>
              <p>{arrayLanding.neighborhood.description_en}</p>
                <Link to="/location" className="neighborhood-more">View More</Link>
          </div>
            <div>
            <img src= {Tbilisee +  arrayLanding.neighborhood.big_image } alt="location" style={{ width: "29%", marginRight: "110px" }}/>
            <img src={Tbilisee + arrayLanding.neighborhood.small_image}  alt="location" style={{ height: "50%", marginTop: "9%", width: "29%" }}/>
          </div>
          </section>
    </div>
    </>
  );
}
}
