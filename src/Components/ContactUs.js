import React, {Component} from "react";

import axios from 'axios';

// ICONS
import MapPin from '../Assets/icons/map-pin.svg';
import Facebook from '../Assets/icons/facebook.svg';
import Fax from '../Assets/icons/fax.svg';
import Mail from '../Assets/icons/mail.svg';
import Phone from '../Assets/icons/phone.svg';
import Twitter from '../Assets/icons/twitter.svg';
import Instagram from "../Assets/icons/instagram.svg";

import "../Styles/contactus.scss";

export default class ContactUs extends Component {
    state = {
        arrayContacts: undefined
    }

    componentDidMount(){
        axios.get('https://core.tbilisee.ge/api/ourContacts').then(res => {
            this.setState({arrayContacts: res.data})
        })
    }

    render(){
        if(!this.state.arrayContacts) {
            return "loading"; //TODO: Need Loading State
          }
        const {arrayContacts} = this.state;
  return (
    <div className="contactus">
        <h2 className="contactus-title">contact us</h2>
        <div className="contactus-line">
            <img src={MapPin} alt="map pin" className="contactus-line__icon"/>
            <h3 className="contactus-line__text">{arrayContacts.contacts.address}</h3>
        </div>
        <div className="contactus-line">
            <img src={Phone} alt="map pin" className="contactus-line__icon"/>
            <h3 className="contactus-line__text">{arrayContacts.contacts.mobile}</h3>
        </div>
        <div className="contactus-line">
            <img src={Fax} alt="map pin" className="contactus-line__icon"/>
            <h3 className="contactus-line__text">{arrayContacts.contacts.landline}</h3>
        </div>
        <div className="contactus-line">
            <img src={Mail} alt="map pin" className="contactus-line__icon"/>
            <h3 className="contactus-line__text">{arrayContacts.contacts.email}</h3>
        </div>
        <div className="contactus-socials">
            <img alt="facebook"  src={Facebook}/>
            <img alt="instagram" src={Instagram} className="instagram"/>
            <img alt="twitter"   src={Twitter}/>
        </div>
    </div>
  );
}
}