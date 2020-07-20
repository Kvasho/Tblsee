import React from "react";

// ICONS
import MapPin from '../Assets/icons/map-pin.svg';
import Facebook from '../Assets/icons/facebook.svg';
import Fax from '../Assets/icons/fax.svg';
import Mail from '../Assets/icons/mail.svg';
import Phone from '../Assets/icons/phone.svg';
import Twitter from '../Assets/icons/twitter.svg';
import Instagram from "../Assets/icons/instagram.svg";

import "../Styles/contactus.scss";

const ContactUs = () => {
  return (
    <div className="contactus">
        <h2 className="contactus-title">contact us</h2>
        <div className="contactus-line">
            <img src={MapPin} alt="map pin" className="contactus-line__icon"/>
            <h3 className="contactus-line__text">agmashenebeli 54</h3>
        </div>
        <div className="contactus-line">
            <img src={Phone} alt="map pin" className="contactus-line__icon"/>
            <h3 className="contactus-line__text">+995 592 45 65 65</h3>
        </div>
        <div className="contactus-line">
            <img src={Fax} alt="map pin" className="contactus-line__icon"/>
            <h3 className="contactus-line__text">+995 032 2 33 04 05</h3>
        </div>
        <div className="contactus-line">
            <img src={Mail} alt="map pin" className="contactus-line__icon"/>
            <h3 className="contactus-line__text">JohnMaloy@tbilisee.ge</h3>
        </div>
        <div className="contactus-socials">
            <img alt="facebook"  src={Facebook}/>
            <img alt="instagram" src={Instagram} className="instagram"/>
            <img alt="twitter"   src={Twitter}/>
        </div>
    </div>
  );
}

export default ContactUs;