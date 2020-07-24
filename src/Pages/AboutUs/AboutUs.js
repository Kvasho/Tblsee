import React, {Component} from 'react';

// PACKAGES
import axios from 'axios';
import AOS from 'aos';
import "aos/dist/aos.css";

// COMPONENTS
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeaderBlack from '../../Components/HeaderBlack';
import PageTitle from '../../Components/PageTitle';

// IMAGES
import Wallpaper from '../../Assets/Images/rooms-wallpaper.png';
import aboutUsImg from "../../Assets/Images/aboutus.png";

//SCSS
import "./about-us.scss";

export default class AboutUs extends Component  {
  state= {
    arrayAboutUs: undefined
  }

  componentDidMount() {
    axios.get('https://core.tbilisee.ge/api/about').then(res => {
      this.setState( {arrayAboutUs: res.data} );     
    })
  }

  render(){
    if(!this.state.arrayAboutUs) {
      return "loading"; //TODO: Need Loading State
    }

    const {arrayAboutUs} = this.state;

  return (
    <>
    <HeaderBlack />
    <div data-aos="zoom-in" className="about-us">
      <div className="about-us__wr">      
        <PageTitle title="About Us"/>
        <img src={arrayAboutUs.cover} alt="wallpaper" className="rooms-wallpaper container-own"/>
        <div className="about-us__info">
         <div className="about-us__first">
            <h2 className="about-us__title">Tbilisee</h2>
            <h5 className="about-us__subtitle">Hotel</h5>
          </div>
          <div className="about-us__second">
            <Row xs={1} lg={2}>
              <Col>
                  <p className="about-us__paragraph">{arrayAboutUs.top_text_left_en}</p>
              </Col>
              <Col>
                  <p className="about-us__paragraph">{arrayAboutUs.top_text_right_en}</p>
              </Col>
            </Row>
          </div>
        </div>
        <h3 className="aboutus-goal__title">
          {arrayAboutUs.goal.goal_title_en}
        </h3>
        <div className="about-us__goal">
        <Row xs={1} lg={2}>
          <Col>
            <img src={arrayAboutUs.goal.goal_image} alt="Our Goal" className="aboutus-goal__img"></img>
          </Col>
          <Col>
          <div className="aboutus-goal__paragraph">
              {arrayAboutUs.goal.goal_description_en}
                 <div className="about-us__since">
                   <span>since</span>
                   <span>2016</span>
                 </div>
            </div>
          </Col>
        </Row>
        </div>
      </div>
    </div>
    </>
  );
}
}