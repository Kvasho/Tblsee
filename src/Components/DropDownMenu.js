import React from 'react';

import {Link} from "react-router-dom";
import CloseButton from "../Assets/icons/x.svg"

import "../Styles/common.scss";

const DropdownMenu = (props) => {
  return (
    <div className="dropdown-menu__header">
        <img src={CloseButton} className="burger-close" alt="Close Button" onClick={() => props.menuHandler()}/>
        <div className="dropdown-menu_wr">
            <Link to="/aboutus" onClick={() => props.blackHeader()}>
                <li className="dropdown-menu_item" onClick={() => props.menuHandler()}>about us</li>
            </Link>
            <Link to="/gallery" onClick={() => props.blackHeader()}>
                <li className="dropdown-menu_item" onClick={() => props.menuHandler()}>gallery</li>
            </Link>
            <Link to="/rooms" onClick={() => props.blackHeader()}>
                <li className="dropdown-menu_item" onClick={() => props.menuHandler()}>rooms</li>
            </Link>
            <Link to="/restaurant" onClick={() => props.whiteHeader()}>
                <li className="dropdown-menu_item" onClick={() => props.menuHandler()}>restaurant</li>
            </Link>
            <Link to="/location" onClick={() => props.blackHeader()}>
                <li className="dropdown-menu_item" onClick={() => props.menuHandler()}>location</li>
            </Link>
            <Link to="/contact" onClick={() => props.blackHeader()}>
                <li className="dropdown-menu_item" onClick={() => props.menuHandler()}>contact</li>
            </Link>
        </div>
    </div>
  );
}

export default DropdownMenu;