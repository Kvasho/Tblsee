import React, {Component} from 'react';

import AOS from 'aos';
import "aos/dist/aos.css";

// COMPONENTS
import PageTitle from '../../Components/PageTitle';
import Input from '../../Components/Input';
import HeaderBlack from '../../Components/HeaderBlack';
import Button from '../../Components/Button';
import ContactUs from '../../Components/ContactUs';


// SCSS
import "../../Styles/common.scss";
import "./contact.scss";

// IMAGES
import HotelRound from '../../Assets/icons/tbilisee-hotel.svg';

export default class Contact extends Component {
  state = {
    
  }
  componentDidMount(){
    AOS.init({
			duration: 2000
		});
  }
  render(){
  return (
    <>
    <HeaderBlack/>
    <div data-aos="fade-up"
     data-aos-duration="3000" className="Contact">
        <PageTitle title="Contact Us"/>
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="contact-form">
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
}}