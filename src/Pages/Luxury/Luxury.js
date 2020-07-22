import React, { Component } from 'react';

// PACKAGES
import { Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// COMPONENTS
import HeaderBlack from '../../Components/HeaderBlack';
import Destination from "../../Components/Destination";
import PageTitle from '../../Components/PageTitle';
import Button from "../../Components/Button";
import Swiper from '../../Components/Swiper';

// SCSS
import "../../Styles/common.scss";
import './Luxury.scss';

// IMAGES
import LogoBlack from '../../Assets/icons/logo-black.svg';
import LuxuryRestaurant1 from '../../Assets/Images/luxury-restaurant-1.jpg';
import LuxuryRestaurant2 from '../../Assets/Images/luxury-restaurant-2.jpg';
import LuxuryRestaurant3 from '../../Assets/Images/luxury-restaurant-3.jpg';

class Luxury extends Component {
    constructor(props) {
        super(props);
        this.state = { luxuryCarousel: false };
      }
      render() {
        return (
          <>
          <HeaderBlack />
          <div className="container-own luxury">
            <PageTitle title="luxury"/>
            {/* <section className="luxury-swiper">
              <Swiper
                 containerClass   = "swiper-div"
                 slidesPerView    = { 1 }
                 spaceBetween     = { 0 }
                 buttonNextClass  = "landing-btn__next"
                 buttonPrevClass  = "landing-btn__prev"
                 swiperController = "landing-swiper__controller" 
                 prevButton       = "Prev"
                 nextButton       = "Next"
              />
            </section> */}

            <section className="luxury-about">
                <h2>about room</h2>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                  It has roots in a piece of classical Latin literature from 45 BC,
                   making it over 2000 years old. Richard McClintock, a Latin professor
                    at Hampden-Sydney College in Virginia, looked up one o</p>
            </section>
 
            <section className="luxury-style container-own">  
              <div></div>
              <div className="luxury-cell">
                <img src={LuxuryRestaurant2} style={{width: "100%", height: "100%"}}/>
              </div>
              <div className="luxury-cell__txt">
                <h2>style</h2>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has 
                  roots in a piece of classical Latin literature from 45 BC, making it over 2000
                   years old. Richard McClintock, a Latin professor at Hampden-Sydney College in 
                   Virginia, looked up one o</p>
              </div>
              <div className="luxury-cell">
                <img src={LuxuryRestaurant2} style={{width: "100%", height: "70%"}}/>
                <div className="flex">
                 <h4>560$</h4>
                 <h5>per night</h5>
                </div>               
              </div>
              <div className="luxury-cell__txt">
                <h2 style={{marginTop: "50px"}}>mood</h2>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots 
                  in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                   Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one o</p>
              </div>
              <div className="luxury-cell">
                <img src={LuxuryRestaurant2} style={{width: "80%", height: "100%"}}/>
              </div>
            </section>
            <section className="luxury-credit">
                <h5>* No credit card required</h5>
                <Button
                  title="book now"
                 className="luxury-credit__btn"
                />                  
            </section>
            <div>
              <Link to="/gallery" className="luxury-view__all">View All Rooms</Link>
            </div>           
            <Destination />

            <section className="luxury-restaurant">
              <Row md={1} lg={2}>
                <Col>
                <div>
                  <img src = { LogoBlack } alt="Logo"/>   
                </div> 
                </Col>
                <Col>
                  <h4>Taste most delicious food in our restaurant</h4>
                </Col>
              </Row>
            <div className="luxury-restaurant__wr">
                <img src={LuxuryRestaurant1} alt="/" className="luxury-restaurant__img"/>
              <div className="luxury-restaurant__half">
                <img src={LuxuryRestaurant2} alt="/" style={{ width: "100%" }}/>
                <img src={LuxuryRestaurant3} alt="/" style={{ marginTop: "93px", width: "100%" }}/>
              </div>
            </div>
            </section>
          </div>
          </>
        );
      }
  }

  export default Luxury;