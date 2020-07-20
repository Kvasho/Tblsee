import React, { Component } from 'react';
import {Link} from "react-router-dom";

//Styles
import "../Styles/header.scss";
import "../Styles/common.scss"

//Component
import Button from './Button';
import DropdownMenu from "./DropDownMenu";

//Icons
import BurgerMenu from "../Assets/icons/burger-menu-icon.svg";
import BurgerMenuWhite from "../Assets/icons/white-burger-menu.svg";
import Logo from "../Assets/icons/logo-black.svg";
import LogoWhite from '../Assets/icons/white-logo.svg';


class Header extends Component  {
  constructor(props) {
		super(props);
		this.state = {
      burgerMenuOpen: true,
      whiteHeader: false
    };
  }

  toggleClass = () => {
    const currentState = this.state.burgerMenuOpen;
    this.setState({ burgerMenuOpen: !currentState });
  };

  blackHeader = () => {
    this.setState({ whiteHeader: true })
  };

  whiteHeader = () => {
    this.setState({ whiteHeader: false })
  };

  render(){
    const {whiteHeader,burgerMenuOpen} = this.state;
    return (     
      <>       
          {
            burgerMenuOpen ? <header className="header"> <div className="header-wr">
            <div className="flex">
             <img src={ whiteHeader ? BurgerMenu : BurgerMenuWhite} className="header-burger_menu" alt="Burger Menu" onClick={this.toggleClass}/>
              <div className={whiteHeader ? "language-bar" : "language-bar language-bar__white"}>EN</div>
       </div>
       <Link to="/">
         {
           whiteHeader ? <img src={Logo} className="header-logo" alt="website logo" onClick={this.whiteHeader}/> : <img src={LogoWhite} className="header-logo" alt="website Logo"/>
         }
       </Link>
       <Button 
         title="book now"
         className={whiteHeader ? "book-now" : "book-now__white"}
       />
     </div> </header>:
            
        <DropdownMenu 
          menuHandler  = { this.toggleClass } 
          whiteHeader  = { this.whiteHeader } 
          blackHeader  = { this.blackHeader }/>
          }     
    </>
  );
}}

export default Header;
