import React from 'react';

import PageTitle from '../Components/PageTitle';
import Input from '../Components/Input';
import HeaderBlack from '../Components/HeaderBlack';

import "../Styles/common.scss";
import "../Styles/contact.scss";
import Button from '../Components/Button';
import ContactUs from '../Components/ContactUs';

import HotelRound from '../Assets/icons/tbilisee-hotel.svg';

const Contact = () => {
  return (
    <>
    <HeaderBlack/>
    <div className="Contact">
        <PageTitle title="Contact Us"/>
        <div className="contact-form">
          <img src={HotelRound} alt="Round logo Tbilisee" className="contact-round__logo"/>
        <ContactUs/>
            <h2 className="width-full contact-title">Stay in touch</h2>
            <Input 
              type = "text"
              id = "name"
              placeholder = "Name"
              className = "contact-input width-half"
            />
            <Input 
              type = "text"
              id = "Surname"
              placeholder = "Surname"
              className = "contact-input width-half"
            />
            <Input 
              type = "number"
              id = "mobile"
              placeholder = "Phone number"
              className = "contact-input width-full"
            />
            <Input 
              type = "email"
              id = "email"
              placeholder = "E-mail"
              className = "contact-input width-full"
            />
            <Input 
              type = "textarea"
              id = "textarea"
              placeholder = "Your text here"
              className = "textarea width-full"
            />
            <Button  
              className="contact-send__button"
              title="send"
            />
        </div>
    </div>
    </>
  );
}

export default Contact;