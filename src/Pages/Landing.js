import React from 'react';
import {Link} from "react-router-dom";

import CarouselLanding from '../Components/CarouselLanding';
import ExploringImg from '../Assets/Images/rooms-test-1.png';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'

import LandingGallery from "../Assets/Images/landing-gallery.jpg";
import LandingGallery2 from '../Assets/Images/landing-gallery-2.jpg';
import HotelRound from "../Assets/icons/tbilisee-hotel-round.svg";
import LandingGallery3 from "../Assets/Images/landing-gallery-3.jpg";
import Eats from "../Assets/Images/eats.jpg";
import LandingNeighborhood from "../Assets/Images/landing-neighborhood.jpg"
import LandingNeighborhood2 from "../Assets/Images/landing-neighborhood2.jpg"

import "../Styles/common.scss";
import Header from '../Components/Header';
import Swiper from '../Components/Swiper';

const Landing = () => {
  return (
    <>
    <Header/>
    <div className="landing">
        <CarouselLanding luxuryCarousel={false}/>
      <h2 className="exploring-title">exploring</h2>
      <div className="exploring container-own">
        <div className="exploring-col exploring-text" style={{paddingLeft: '140px'}}>
          <h3>Tbilisi <span className="white">Hotel</span></h3>
          <p>Lorem Ipsum is simply dummy 
            text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, Lorem Ipsum 
            is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the ind</p>
        </div>
        <img src={ExploringImg} alt="/" className="exploring-col"/>
        <img src={ExploringImg} alt="/" className="exploring-col last-image" style={{ height: "50%", alignSelf: 'flex-end'}}/>
      </div>
      <section className="landing-gallery">
        <img src={ LandingGallery } alt="landing gallery"/>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has been the industry's standard dummy text 
          ever since the 1500s, Lorem Ipsum is simply dummy 
          text of the printing and typesetting industry. Lorem Ipsum has 
          been the ind</p>
        <div className="padding-right">
          <h3>Gallery</h3>
          <div>
            <img src={LandingGallery2} alt="Landing Gallery"/>
            <img src={ LandingGallery3 } alt="*"/>
          </div>
          
        </div>
      </section>
      <section className="landing-gallery__second">
        <img src={ HotelRound } alt="badge" style={{ alignSelf: "flex-end" }}/>
        
        <Link to="/gallery" className="landing-gallery__btn">See More</Link>
      </section>
      <section className="landing_eats container-own">
          <Row xs={1} lg={2} xl={3}>
            <Col>
              <h3 className="eats-title">Eats & Drinks</h3>
              <p className="eats-paragraph">gallery-shi gadava dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 
                 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting 
                 industry. Lorem Ipsum has been the indust</p>
                 <Link to="/restaurant" className="eats-button">See More</Link>
            </Col>
            <Col xs={12}>
            <Figure>
                <Figure.Image
                  width={475}
                  height={534}
                  alt="171x180"
                  src={Eats}
                  className="eats-img"
                />
              </Figure>
              <Figure>
                <Figure.Image
                  width={475}
                  height={534}
                  alt="171x180"
                  src={Eats}
                  className="eats-img"
                />
              </Figure>
              <Figure>
                <Figure.Image
                  width={475}
                  height={534}
                  alt="171x180"
                  src={Eats}
                />
              </Figure>
            </Col>
            <Col lg={12} style={{ marginTop : "100px"}} className="eats-img__section">
            <Figure>
                <Figure.Image
                  width={475}
                  height={534}
                  alt="171x180"
                  src={Eats}
                  className="eats-img"
                />
              </Figure>
              <Figure>
                <Figure.Image
                  width={475}
                  height={534}
                  alt="171x180"
                  src={Eats}
                  className="eats-img"
                />
              </Figure>
              <Figure>
                <Figure.Image
                  width={475}
                  height={534}
                  alt="171x180"
                  src={Eats}
                />
              </Figure>
            </Col>
          </Row>
      </section>
      <section className="landing-neighborhood">
          <div className="landing-neighborhood__txt">   
              <h3>Neighborhood</h3>
              <p>gallery-shi gadava dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                text ever since the 1500s, Lorem Ipsum is simply 
                dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the indust</p>
                <Link to="/location" className="neighborhood-more">View More</Link>
          </div>
          <img src= { LandingNeighborhood } alt="location" style={{ width: "29%", marginRight: "110px" }}/>
          <img src={LandingNeighborhood2} alt="location" style={{ height: "50%", marginTop: "9%", width: "29%" }}/>
      </section>
      <section>
        <Swiper 
            containerClass   = "swiper-div"
            slidesPerView    = { 3 }
            spaceBetween     = { 248 }
            buttonNextClass  = "landing-btn__next"
            buttonPrevClass  = "landing-btn__prev"
            swiperController = "landing-swiper__controller" 
            prevButton       = "Prev"
            nextButton       = "Next"
        />
      </section>
    </div>
    </>
  );
}

export default Landing;
