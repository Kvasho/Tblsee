import React, { Component } from 'react';

import "../Styles/common.scss";
import { Row,Col } from 'react-bootstrap';
import '../Styles/Luxury.scss';
import HeaderBlack from '../Components/HeaderBlack';

import LogoBlack from '../Assets/icons/logo-black.svg';
import LuxuryRestaurant1 from '../Assets/Images/luxury-restaurant-1.jpg';
import LuxuryRestaurant2 from '../Assets/Images/luxury-restaurant-2.jpg';
import LuxuryRestaurant3 from '../Assets/Images/luxury-restaurant-3.jpg';

class Luxury extends Component {
    constructor(props) {
        super(props);
        this.state = { luxuryCarousel: false };
      }
      render() {
        return (
          <>
          <HeaderBlack />
          <div className="container-own">

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