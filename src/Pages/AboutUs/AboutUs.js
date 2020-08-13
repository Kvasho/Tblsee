import React, {Component} from 'react';

// PACKAGES
import axios from 'axios';
import AOS from 'aos';
import "aos/dist/aos.css";

// COMPONENTS
import HeaderBlack from '../../Components/HeaderBlack';
import PageTitle from '../../Components/PageTitle';
import RoundBlack from '../../Assets/icons/tbilisee-hotel-round.svg'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

//SCSS
import "./about-us.scss";

export default class AboutUs extends Component  {
  state= {
    arrayAboutUs: undefined
  }

  componentDidMount() {
    axios.get('https://core.tbilisee.ge/api/about').then(res => {
      this.setState( {arrayAboutUs: res.data} );     
    })
  }

  render(){
    if(!this.state.arrayAboutUs) {
      return "loading"; //TODO: Need Loading State
    }

    const Tbilisee = 'https://core.tbilisee.ge/';
    const {arrayAboutUs} = this.state;
    const {t, i18n} = this.props;

  return (
    <>
    <HeaderBlack />
    <div data-aos="zoom-in" className="about-us">
      <div className="about-us__wr">  
      <div className="about-us__absolute"/>    
        <PageTitle title="About Us"/>
        <div style={{height: "50vh"}}>
          <div className="background-image__cover height rooms-wallpaper container-own" style={{backgroundImage: `url(${Tbilisee + arrayAboutUs.cover})`}}/>
        </div>        
        <div className="about-us__info">
          <img src={RoundBlack} className="about-us__badge"/>
         <div className="about-us__first">
            <h2 className="about-us__title">{t('test')}</h2>
            <h5 className="about-us__subtitle">Hotel</h5>
          </div>
          <div className="about-us__second">            
          <p className="about-us__paragraph">{(() => {
        if (i18n.language == 'GE') {
          return (
            arrayAboutUs.top_text_left_ge
          )
        } else if (i18n.language == 'RU') {
          return (
            arrayAboutUs.top_text_left_ru
          )
        } else {
          return (
            arrayAboutUs.top_text_left_en
          )
        }
      })()}</p>              
                  <p className="about-us__paragraph">{(() => {
        if (i18n.language == 'GE') {
          return (
            arrayAboutUs.top_text_right_ge
          )
        } else if (i18n.language == 'RU') {
          return (
            arrayAboutUs.top_text_right_ru
          )
        } else {
          return (
            arrayAboutUs.top_text_right_en
          )
        }
      })()}</p>
             
            
          </div>
        </div>
        <h3 className="aboutus-goal__title relative">
        {(() => {
        if (i18n.language == 'GE') {
          return (
            arrayAboutUs.goal.goal_title_ge
          )
        } else if (i18n.language == 'RU') {
          return (
            arrayAboutUs.goal.goal_title_ru
          )
        } else {
          return (
            arrayAboutUs.goal.goal_title_en
          )
        }
      })()}
          <span className="absolute goal-absolute">Goal</span>
        </h3>
        <div className="about-us__goal">
        <div className="background-image__cover height rooms-wallpaper container-own full" style={{backgroundImage: `url(${Tbilisee + arrayAboutUs.goal.image})`}}/>
          
          <div className="aboutus-goal__paragraph">
              <p>{(() => {
        if (i18n.language == 'GE') {
          return (
            arrayAboutUs.goal.description_ge
          )
        } else if (i18n.language == 'RU') {
          return (
            arrayAboutUs.goal.description_ru
          )
        } else {
          return (
            arrayAboutUs.goal.description_en
          )
        }
      })()}</p>
                 <div className="about-us__since">
                   <span>since</span>
                   <span>2016</span>
                 </div>
            </div>
         
        </div>
      </div>
    </div>
    </>
  );
}
}