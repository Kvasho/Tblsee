import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "../Styles/Location.scss";
import "../Styles/common.scss";

import Picture from "../Assets/Images/aboutus.png";

const Footer = () => {
  return (
<div className="destination container-own">
  <div className="destination-background"/>
        <div className="full-height width-full">
            <img src={Picture} className="destination-img" width="100%"
    height="880px" alt="/"/>
        </div>
            <div className="full-height destination-content">
              <h2>Narikala fortress</h2>
              <p>Lorem Ipsum is simply dummy 
                text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text</p>
                <Row>
                  <Col className="locations">
                    <div>
                     <h3>betlemi str.</h3>
                      <img src={Picture} height="400px" width="250px" alt="*"/>
                    </div>
                  </Col>
                  <Col className="locations">
                    <div>
                     <h3>betlemi str.</h3>
                      <img src={Picture} height="400px" width="250px" alt="*"/>
                    </div>
                  </Col>
                  <Col className="locations">
                    <div>
                     <h3>betlemi str.</h3>
                      <img src={Picture} height="400px" width="250px" alt="*"/>
                    </div>
                  </Col>
                </Row>
            </div>
    </div>
  );
}

export default Footer;
