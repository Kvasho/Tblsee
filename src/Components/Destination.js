import React from 'react';

import "../Pages/Location/Location.scss";
import "../Styles/common.scss";

import Picture from "../Assets/Images/aboutus.png";

const Footer = () => {
  return (
<div className="destination container-own relative">      
<div className="destination-background absolute"/>
      <img src={Picture} className="destination-img full"/>
            <div className="destination-content">
              <div>
              <h2 className="destination-content__title">Narikala fortress</h2>
              <p className="destination-content__paragraph" style={{ marginTop: "30px", marginBottom: "30px"}}>Lorem Ipsum is simply dummy 
                text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text</p>
              <p className="destination-content__paragraph">90 min trip</p>
              </div>
              <div className="destination-cards">
                <div className="destination-card">
                <h3>betlemi str.</h3>
                  <img src={Picture} className="destination-card__image"/> 
                </div>
                <div className="destination-card">
                <h3>betlemi str.</h3>
              <img src={Picture} className="destination-card__image"/> 
                </div>
                <div className="destination-card">
                <h3>betlemi str.</h3>
              <img src={Picture} className="destination-card__image"/> 
                </div>
                </div>                    
                                     
            </div>
    </div>
  );
}

export default Footer;
