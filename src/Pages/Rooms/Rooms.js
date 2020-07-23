import React from 'react';

// PACKAGES
import {Link} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Figure } from 'react-bootstrap';

// COMPONENTS
import PageTitle from '../../Components/PageTitle';
import Button from "../../Components/Button";
import HeaderBlack from "../../Components/HeaderBlack";

// IMAGES
import RoomsWallpaper from "../../Assets/Images/rooms-wallpaper.png";
import RoomsTest1 from "../../Assets/Images/rooms-test-1.png";
import TbiliseeRound from "../../Assets/Images/tbilisee-hotel-round.png";

// SCSS
import "./Rooms.scss";


const Rooms = () => {
  return (
    <>
    <HeaderBlack/>
    <div className="rooms container-own">
      <PageTitle title="Rooms"/>
      <img src={RoomsWallpaper} alt="Rooms Page wallpaper" className="rooms-wallpaper"/>
      <div className="rooms-luxury">
      <Row xs={1} md={2}>
        <Col>
          <img src={RoomsTest1} alt="Luxury room" className="rooms-luxury__img"/>
        </Col>
        <Col>
        <div className="rooms-description">
          <h5 className="rooms-description__subtitle">room</h5>
          <h1 className="rooms-description__title">Luxury</h1>
          <p className="rooms-description__paragraph">Contrary to popular belief, Lorem Ipsum is not simply 
            random text. It has roots in a piece of classical Latin 
            literature from 45 BC, making it over 2000 years old. Richard 
            McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
            looked up one o</p>
            <div className="flex space-between margin-110">
              <span className="rooms-price">560$</span>
              <Link
              to="/luxury"
                className="see-more__btn"
              >See More</Link>
            </div>
         </div>
        </Col>
      </Row>
      </div>
      <div className="rooms-midrange">
        <Row xs={1} md={2}>
          <Figure>
          <Col>
          <div className="rooms-description">
          <h5 className="rooms-description__subtitle">room</h5>
          <h1 className="rooms-description__title">Luxury</h1>
          <p className="rooms-description__paragraph">Contrary to popular belief, Lorem Ipsum is not simply 
            random text. It has roots in a piece of classical Latin 
            literature from 45 BC, making it over 2000 years old. Richard 
            McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
            looked up one o</p>
            <div className="flex space-between margin-110">
              <span className="rooms-price">560$</span>
              <Link 
                to="/luxury"
                className="see-more__btn"
                >See more</Link>
            </div>
         </div>
          </Col>
          </Figure>
          <Figure>
          <Col>
            <img src={TbiliseeRound} alt="Tbilisee" className="tbilisee-round"/>
            <img src={RoomsTest1} alt="Luxury room" className="rooms-luxury__img"/>
          </Col>
          </Figure>        
        </Row>                      
      </div>
      <div className="rooms-luxury">
      <Row xs={1} md={2}>
        <Col>
          <img src={RoomsTest1} alt="Luxury room" className="rooms-luxury__img"/>
        </Col>
        <Col>
        <div className="rooms-description">
          <h5 className="rooms-description__subtitle">room</h5>
          <h1 className="rooms-description__title">Luxury</h1>
          <p className="rooms-description__paragraph">Contrary to popular belief, Lorem Ipsum is not simply 
            random text. It has roots in a piece of classical Latin 
            literature from 45 BC, making it over 2000 years old. Richard 
            McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
            looked up one o</p>
            <div className="flex space-between margin-110">
              <span className="rooms-price">560$</span>
              <Link
              to="/luxury"
                className="see-more__btn"
              >See More</Link>
            </div>
         </div>
        </Col>
      </Row>
      </div>
      <div className="rooms-luxury" style={{marginBottom: "20rem"}}>
      <Row xs={1} md={2}>
        <Col>
          <img src={RoomsTest1} alt="Luxury room" className="rooms-luxury__img"/>
        </Col>
        <Col>
        <div className="rooms-description">
          <h5 className="rooms-description__subtitle">room</h5>
          <h1 className="rooms-description__title">Luxury</h1>
          <p className="rooms-description__paragraph">Contrary to popular belief, Lorem Ipsum is not simply 
            random text. It has roots in a piece of classical Latin 
            literature from 45 BC, making it over 2000 years old. Richard 
            McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
            looked up one o</p>
            <div className="flex space-between margin-110">
              <span className="rooms-price">560$</span>
              <Link
              to="/luxury"
                className="see-more__btn"
              >See More</Link>
            </div>
         </div>
        </Col>
      </Row>
      </div>
    </div>
    </>
  );
}

export default Rooms;
