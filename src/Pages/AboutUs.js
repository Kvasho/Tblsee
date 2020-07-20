import React from 'react';
import PageTitle from '../Components/PageTitle';
import Wallpaper from '../Assets/Images/rooms-wallpaper.png';
import aboutUsImg from "../Assets/Images/aboutus.png";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//SCSS
import "../Styles/about-us.scss";
import "../Styles/common.scss";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us__wr">      
        <PageTitle title="About Us"/>
        <img src={Wallpaper} alt="wallpaper" className="rooms-wallpaper container-own"/>
        <div className="about-us__info">
         <div className="about-us__first">
            <h2 className="about-us__title">Tbilisee</h2>
            <h5 className="about-us__subtitle">Hotel</h5>
          </div>
          <div className="about-us__second">
            <Row xs={1} lg={2}>
              <Col>
                <p className="about-us__paragraph">Contrary to popular belief, Lorem Ipsum is not simply 
                  random text. It has roots in a piece of classical Latin literature 
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia, looked up one o</p>
              </Col>
              <Col>
              <p className="about-us__paragraph">Contrary to popular belief, Lorem Ipsum is not simply random text. It has 
                roots in a piece of classical Latin literature from 45 BC, making it over 2000 
                years old. Richard McClintock, 
                a Latin professor at Hampden-Sydney College in Virginia, looked up one o</p>
              </Col>
            </Row>
          </div>
        </div>
        <h3 className="aboutus-goal__title">
          Our Goal
          <span>Goal</span>
        </h3>
        <div className="about-us__goal">
        <Row xs={1} lg={2}>
          <Col>
            <img src={aboutUsImg} alt="Our Goal" className="aboutus-goal__img"></img>
          </Col>
          <Col>
          <div className="aboutus-goal__paragraph">
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin literature from 45 BC, making 
                it over 2000 years old. Richard McClintock,
                 a Latin professor at Hampden-Sydney College in Virginia, looked up one o</p>
                 <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin literature from 45 BC, making 
                it over 2000 years old. Richard McClintock,
                 a Latin professor at Hampden-Sydney College in Virginia, looked up one o</p>
                 <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin literature from 45 BC, making 
                it over 2000 years old. Richard McClintock,
                 a Latin professor at Hampden-Sydney College in Virginia, looked up one o</p>
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
  );
}

export default AboutUs;