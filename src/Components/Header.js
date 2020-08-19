import React, { Component } from 'react';
import {Link} from "react-router-dom";

//Styles
import "../Styles/header.scss";
import "../Styles/common.scss"

//Component
import Button from './Button';
import DropdownMenu from "./DropDownMenu";
import i18next from 'i18next';

//Icons
import BurgerMenuWhite from "../Assets/icons/white-burger-menu.svg";
import LogoWhite from '../Assets/icons/white-logo.svg';


class Header extends Component  {
  constructor(props) {
		super(props);
		this.state = {
      burgerMenuOpen: true,
      currentLang: 'EN',
      inactiveLang: ['RU', 'GE']
    };
  }

  toggleClass = () => {
    const currentState = this.state.burgerMenuOpen;
    this.setState({ burgerMenuOpen: !currentState });
  };

 handleClick = (lang) => {
    i18next.changeLanguage(lang);
  }

  render(){
    const {t} = this.props;
    const {burgerMenuOpen} = this.state;
    let lang = i18next.language
    const otherLang = ['RU', 'KA'];
    const index = otherLang.indexOf(lang);
    if (index > -1) {  
    otherLang.splice(index, 1);
    }
    return (     
      <>       
          {
            burgerMenuOpen ? 
            <header className="header"> 
            <div className="header-wr container-own">
            <div className="flex">
             <img src={ BurgerMenuWhite } className="header-burger_menu" alt="Burger Menu" onClick={this.toggleClass}/>
              <div className="language-bar__white">
              <li onClick={() => this.handleClick("EN")} className="language-first">{this.state.currentLang}</li>
              <li onClick={() => this.handleClick("RU")} key={index} style={{margin: "0 10px"}}>RU</li>
              <li onClick={() => this.handleClick("KA")} key={index}>GE</li>
                            </div>
       </div>
       <Link to="/">           
             <img src={LogoWhite} className="header-logo" alt="website logo" onClick={this.whiteHeader}/> 
       </Link>
       <Button 
         title="book now"
         className="book-now__white"
       />
     </div> </header>:
            
        <DropdownMenu 
          t={t}
          menuHandler  = { this.toggleClass } 
          burgerMenuOpen = {burgerMenuOpen}/>
          }     
    </>
  );
}}

export default Header;
