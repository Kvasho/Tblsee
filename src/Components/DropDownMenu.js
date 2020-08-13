import React, {Component} from 'react';

import {Link} from "react-router-dom";
import CloseButton from "../Assets/icons/x.svg";

import AOS from 'aos';
import "aos/dist/aos.css";


import "../Styles/common.scss";

export default class DropdownMenu extends Component  {

    componentDidMount(){
        AOS.init({
			duration: 500
		});
    }
    render(){
  return (
    <div data-aos="fade-right" className="dropdown-menu__header">
        <img src={CloseButton} className="burger-close" alt="Close Button" onClick={() => this.props.menuHandler()}/>
        <div className="dropdown-menu_wr">
            <Link to="/aboutus" data-aos="fade-right">
                <li className="dropdown-menu_item" onClick={() => this.props.menuHandler()}>about us</li>
            </Link>
            <Link to="/gallery" data-aos="fade-left">
                <li className="dropdown-menu_item" onClick={() => this.props.menuHandler()}>gallery</li>
            </Link>
            <Link to="/rooms" data-aos="fade-left">
                <li className="dropdown-menu_item" onClick={() => this.props.menuHandler()}>rooms</li>
            </Link>
            <Link to="/restaurant" data-aos="fade-left">
                <li className="dropdown-menu_item" onClick={() => this.props.menuHandler()}>restaurant</li>
            </Link>
            <Link to="/location" data-aos="fade-left">
                <li className="dropdown-menu_item" onClick={() => this.props.menuHandler()}>location</li>
            </Link>
            <Link to="/contact" data-aos="fade-left">
                <li className="dropdown-menu_item" onClick={() => this.props.menuHandler()}>contact</li>
            </Link>
        </div>
    </div>
  );
}
}