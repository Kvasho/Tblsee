import React,{Component} from 'react';

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
import LandingGallery from "../../Assets/Images/landing-gallery.jpg";
import LandingGallery2 from '../../Assets/Images/landing-gallery-2.jpg';
import HotelRound from "../../Assets/icons/tbilisee-hotel-round.svg";
import LandingGallery3 from "../../Assets/Images/landing-gallery-3.jpg";
import Eats from "../../Assets/Images/eats.jpg";
import LandingNeighborhood from "../../Assets/Images/landing-neighborhood.jpg"
import LandingNeighborhood2 from "../../Assets/Images/landing-neighborhood2.jpg"
import ExploringFull from '../../Assets/Images/exploring-full.jpg';
import ExploringHalf from '../../Assets/Images/exploring-half.jpg';
import galleryMedium from "../../Assets/Images/gallery-medium.jpg"
import gallerySmall from "../../Assets/Images/gallery-small.jpg"
import restaurant1 from '../../Assets/Images/restaurant1.jpg';
import restaurant2 from '../../Assets/Images/restaurant2.jpg';
import restaurant3 from '../../Assets/Images/restaurant3.jpg';
import restaurant4 from '../../Assets/Images/restaurant4.jpg';
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

    const {arrayLanding} = this.state;
  return (
    <>
    <Header/>
    <div className="landing">
        <CarouselLanding luxuryCarousel={false}/>
      <h2  className="exploring-title">{arrayLanding.exploring.title_en}</h2>      
        <section data-aos="fade-up"
            data-aos-anchor-placement = "top-center" className="exploring container-own">
            <div 
            >
              <h3>Tbilisi <span className="white">Hotel</span></h3>
              <p>{arrayLanding.exploring.description_en}</p>
            </div>
            <div>
              <img  src={arrayLanding.exploring.big_image} alt="/" className="exploring-image__full"/>
            </div>
            <div className="relative">
              <img  src={arrayLanding.exploring.medium_image} alt="/" className="exploring-image__half absolute"/>
            </div>
        </section>
      <section data-aos="fade-up"
            data-aos-anchor-placement = "top-center" className="landing-gallery">
        <div>
          <img src={arrayLanding.gallery.big_image} alt="landing gallery" className="full"/>
        </div>
        <div>
          <p>{arrayLanding.gallery.description_en}</p>
        </div>
        <div className="relative">
          <h3>{arrayLanding.gallery.title_en}</h3>
          <img src={arrayLanding.gallery.medium_image} alt="Landing Gallery" className="landing-neighborhood__img absolute"/>
        </div>
        <div className="relative">
          <img src={ HotelRound } alt="badge" className="absolute landing-gallery__round"/>
        </div>
        <div>
          <img src={arrayLanding.gallery.small_image} alt="*" className="landing-neighborhood__img2"/>
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
                  src={image}
                  className="eats-img"
                />
              </Figure>
              )
            }
            {/* <Col>
            
              <Figure data-aos="fade-up"
            data-aos-anchor-placement = "top-center">
                <Figure.Image
                  width={475}
                  height={534}
                  alt="171x180"
                  src={restaurant1}
                  className="eats-img"
                />
              </Figure>
              <Figure data-aos="fade-up"
            data-aos-anchor-placement = "top-center">
                <Figure.Image
                  width={475}
                  height={534}
                  alt="171x180"
                  src={restaurant2}
                />
              </Figure>
            </Col>
            <Col lg={12} style={{ marginTop : "100px"}} className="eats-img__section">
            <Figure data-aos="fade-up"
            data-aos-anchor-placement = "top-center">
                <Figure.Image
                  width={475}
                  height={534}
                  alt="171x180"
                  src={restaurant3}
                  className="eats-img"
                />
              </Figure>
              <Figure data-aos="fade-up"
            data-aos-anchor-placement = "top-center">
                <Figure.Image
                  width={475}
                  height={534}
                  alt="171x180"
                  src={restaurant4}
                  className="eats-img"
                />
              </Figure>
              <Figure data-aos="fade-up"
            data-aos-anchor-placement = "top-center">
                <Figure.Image
                  width={475}
                  height={534}
                  alt="171x180"
                  src={Eats}
                />
              </Figure>
            </Col> */}
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
            <img src= { arrayLanding.neighborhood.big_image } alt="location" style={{ width: "29%", marginRight: "110px" }}/>
            <img src={arrayLanding.neighborhood.small_image}  alt="location" style={{ height: "50%", marginTop: "9%", width: "29%" }}/>
          </div>
          </section>
    </div>
    </>
  );
}
}
