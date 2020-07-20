import React from 'react';

import "../Styles/restaurant.scss";

import RestaurantWallpaper from "../Assets/Images/restaurant-wallpaper.png";
import Gastronomy from "../Assets/Images/gastronomy.png";
import Desert from "../Assets/Images/desert.png";
import Pizza from "../Assets/Images/pizza.png";
import Shef from "../Assets/Images/shef.png";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Restaurant = () => {
  return (
    <div className="restaurant">
      <img src={RestaurantWallpaper} alt="restaurant wallpaper" className="restaurant-wallpaper"/>
      <div className="restaurant-gastronomy container-own">
        <Row xs={1} lg={2} className="restaurant-gastronomy__wr width-full">
          <Col>
            <div className="restaurant-block">
              <h2 className="restaurant-gastronomy__title">our gastronomy</h2>
              <p className="restaurant-gastronomy__paragraph">Welcome to hotel Tbilisi ,  where the food changes with the season</p>
            </div> 
          </Col>
          <Col>
            <img src={Gastronomy} alt="gastronomy" className="width-full"/> 
          </Col>
        </Row>
      </div>
      <div className="restaurant-desert container-own">
      <Row xs={1} lg={2} className="restaurant-gastronomy__wr width-full">
        <Col>
          <img src={Desert} alt="desert" className="width-full"/>
        </Col>
        <Col>
          <div className="restaurant-block">
            <h2 className="restaurant-desert__title">desert</h2>
            <p className="restaurant-desert__paragraph">There are many variations 
            of passages of Lorem Ipsum available, 
            but the majority have suffered  alteration in some form,</p>
         </div>
        </Col>
      </Row>        
      </div>
      <h3 className="restaurant-menu__title">
          Menu
          <span>Menu</span>
      </h3>
      <div className="restaurant-menu container-own">
        <Row xs={1} md={2} lg={3} className="width-full">
          <Col className="restaurant-menu__cell">
            <img src={Pizza} alt="Pizza" className="restaurant-menu__image"/>
              <div>
                <h4>Pizza</h4>
                <h5>venezia, italy</h5>
            </div>
          </Col>
          <Col className="restaurant-menu__cell">
            <img src={Pizza} alt="Pizza" className="restaurant-menu__image"/>
              <div>
                <h4>Pizza</h4>
                <h5>venezia, italy</h5>
            </div>
          </Col>
          <Col className="restaurant-menu__cell">
            <img src={Pizza} alt="Pizza" className="restaurant-menu__image"/>
              <div>
                <h4>Pizza</h4>
                <h5>venezia, italy</h5>
            </div>
          </Col>
        </Row>
        {/* <div className="restaurant-menu__cell">
            <img src={Pizza} alt="Pizza" className="restaurant-menu__image"/>
            <div>
              <h4>Pizza</h4>
              <h5>venezia, italy</h5>
            </div>
        </div>
        <div className="restaurant-menu__cell">
            <img src={Pizza} alt="Pizza" className="restaurant-menu__image"/>
            <div>
              <h4>Pizza</h4>
              <h5>venezia, italy</h5>
            </div>
        </div>
        <div className="restaurant-menu__cell">
            <img src={Pizza} alt="Pizza" className="restaurant-menu__image"/>
            <div>
              <h4>Pizza</h4>
              <h5>venezia, italy</h5>
            </div>
        </div> */}
      </div>
      <img src={Shef} alt="shef" className="restaurant-shef__img container-own"/>
      <h2 className="restaurant-shef">vakhtang chabukiani</h2>
      <h5 className="restaurant-shef__post">shef</h5>
      <p  className="restaurant-shef__about">Lorem Ipsum is simply dummy 
      text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text 
       ever since the 1500s, when an unknown printer took a 
      galley of type and scrambled it to make a type specimen book. 
      It has sur</p>
    </div>
  );
}

export default Restaurant;
