import React, { Component } from 'react';

// PACKAGES
import { Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

// COMPONENTS
import HeaderBlack from '../../Components/HeaderBlack';
import Destination from "../../Components/Destination";
import PageTitle from '../../Components/PageTitle';
import Button from "../../Components/Button";
import Swiper from '../../Components/swiper';
import LuxurySwiper from '../../Components/LuxurySwiper';

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
        this.state = { 
          arrayLuxury: undefined
         };
      }
      componentDidMount(){
        axios.get('https://core.tbilisee.ge/api/allRooms').then(res => {
          this.setState( {arrayLuxury: res.data} );  
          console.log(this.state.arrayLuxury)   
        })
      }
      render() {
        if(!this.state.arrayLuxury) {
          return "loading"; //TODO: Need Loading State
        }
        const Tbilisee = "https://core.tbilisee.ge/";
        const {arrayLuxury} = this.state;
        return (
          <>
          <HeaderBlack />
          <div className="container-own luxury">
            <div className="luxury-absolute"/>
            <PageTitle title="luxury"/>
            <section className="luxury-swiper">
            <LuxurySwiper 
            containerClass   = "swiper-div"
            slidesPerView    = "auto"
            spaceBetween     = { 50 }
            buttonNextClass  = "landing-btn__next"
            buttonPrevClass  = "landing-btn__prev"
            swiperController = "landing-swiper__controller" 
            prevButton       = "Prev"
            nextButton       = "Next"
        />
            </section>
            <section className="luxury-about">
                <h2>about room</h2>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                  It has roots in a piece of classical Latin literature from 45 BC,
                   making it over 2000 years old. Richard McClintock, a Latin professor
                    at Hampden-Sydney College in Virginia, looked up one o</p>
            </section>
            
              {
                arrayLuxury.map((room,index) => 
                <section className="luxury-style container-own">
                <div className="luxury-cell">
                <img src={Tbilisee + room.style_image} className="full" alt={index}/>
                <div></div>
                <div className="luxury-cell__txt">
                <h2>style</h2>
                <p>{room.style_description_en}</p>
                </div>
              </div>
              <div className="luxury-cell">
                <img src={Tbilisee + room.mood_image_small} alt={index} style={{width: "100%", height: "70%"}}/>
                <div className="flex">
              <h4>{room.price + "$"}</h4>
                 <h5>per night</h5>
                </div>               
              </div>
              <div className="luxury-cell__txt">
                <h2 style={{marginTop: "50px"}}>mood</h2>
                <p>{room.mood_description_en}</p>
              </div>
              <div className="luxury-cell">
                <img src={Tbilisee + room.mood_image_big} alt={index} style={{width: "80%", height: "100%"}}/>
              </div>
            </section>)
              }  
              
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