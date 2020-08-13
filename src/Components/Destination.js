
import React, { Component } from 'react';

// CSS
import 'swiper/swiper.scss';
import '../Styles/costumiseSwiper.scss';
import Image from "../Assets/Images/landing-swiper.jpg"
import '../Pages/Location/Location.scss'
import '../Styles/common.scss';
import DestCardsSwiper from '../Components/DestCardsSwiper';



export default class Destination extends Component {
  state = {
    testImages: {
      "image": "public/images/rooms/2020-05-26T07:40:32.801Z2.jpg",
      "title_en": "title en edited",
      "title_ge": "titile ge",
      "description_en": "desc en",
      "description_ge": "desc ge",
      "description_ru": "desc ru"
  }
  }
  componentDidMount () {
    this.setState({testImages: this.props.arrayDestination[0]})
  }
  render () {
  const Tbilisee = 'https://core.tbilisee.ge/';
  const toggleImage = (item) => {
    this.setState({testImages: item})
  }
  const {t, i18n} = this.props;
  return (
<>
  <>
  <div className="dest container-own">
    <div>
      <div id="destination-main" className="background-image__cover height" style={{backgroundImage: `url(${Tbilisee + this.state.testImages.image_1000})`}}/>
      {/* <img  src={Tbilisee + this.state.testImages.image_1000} className="destination-img full"/> */}
    </div>
    <div className="dest-col">
        <div>
        <h2 className="destination-content__title">
              {(() => {
                    if (i18n.language === 'GE') {
                      return (
                        this.state.testImages.title_ge
                      )
                    } else if (i18n.language === 'RU') {
                      return (
                        this.state.testImages.title_ru
                      )
                    } else {
                      return (
                        this.state.testImages.title_en
                      )
                    }
      })()}</h2>
      <p className="destination-content__paragraph elipsis-5" style={{ marginTop: "30px", marginBottom: "30px"}}>{(() => {
                    if (i18n.language === 'GE') {
                      return (
                        this.state.testImages.description_ge
                      )
                    } else if (i18n.language === 'RU') {
                      return (
                        this.state.testImages.description_ru
                      )
                    } else {
                      return (
                        this.state.testImages.description_en
                      )
                    }
      })()}</p>
      <p className="destination-content__paragraph">{this.state.testImages.time} min trip</p>
        </div>
        <div className="dest-cards relative">
        <div className="dest-absolute"/>
          <div className="dest-cards__wr absolute">
        {
                  this.props.arrayDestination.map((item,index) => 
                  <div className="destination-card" key={index}>
                      <h3>{(() => {
                    if (i18n.language === 'GE') {
                      return (
                        item.title_ge
                      )
                    } else if (i18n.language === 'RU') {
                      return (
                        item.title_ru
                      )
                    } else {
                      return (
                        item.title_en
                      )
                    }
      })()}</h3>
                  <div id="destination-main" className="background-image__cover height destination-card__image" style={{backgroundImage: `url(${Tbilisee + item.image})`}} onClick={() => toggleImage(item)}/>
                  {/* <img src={Tbilisee + item.image} className="destination-card__image" onClick={() => toggleImage(item)}/>  */}
                </div>
                  )
              }
              </div>
        </div>
    </div>
    <div className="dest-cards__mobile">
            <DestCardsSwiper i18n={i18n} t={t} toggleImage={toggleImage}arrayDestination={this.props.arrayDestination}/>
      </div>
  </div>
  {/* <div className="destination container-own relative"> 
    <div className="destination-background absolute"/>
      <img id="destination-main" src={Tbilisee + this.state.testImages.image} className="destination-img full"/>
            <div className="destination-content">
              <div>
              <h2 className="destination-content__title">
              {(() => {
                    if (i18n.language === 'GE') {
                      return (
                        this.state.testImages.title_ge
                      )
                    } else if (i18n.language === 'RU') {
                      return (
                        this.state.testImages.title_ru
                      )
                    } else {
                      return (
                        this.state.testImages.title_en
                      )
                    }
      })()}</h2>
              <p className="destination-content__paragraph" style={{ marginTop: "30px", marginBottom: "30px"}}>{(() => {
                    if (i18n.language === 'GE') {
                      return (
                        this.state.testImages.description_ge
                      )
                    } else if (i18n.language === 'RU') {
                      return (
                        this.state.testImages.description_ru
                      )
                    } else {
                      return (
                        this.state.testImages.description_en
                      )
                    }
      })()}</p>
              <p className="destination-content__paragraph">{this.state.testImages.time} min trip</p>
              </div>
              <div className="destination-cards">
              {
                  this.props.arrayDestination.map((item,index) => 
                  <div className="destination-card" key={index}>
                      <h3>{(() => {
                    if (i18n.language === 'GE') {
                      return (
                        item.title_ge
                      )
                    } else if (i18n.language === 'RU') {
                      return (
                        item.title_ru
                      )
                    } else {
                      return (
                        item.title_en
                      )
                    }
      })()}</h3>
                  <img src={Tbilisee + item.image} className="destination-card__image" onClick={() => toggleImage(item)}/> 
                </div>
                  )
              }                               
                </div>                                                        
            </div>
            </div> */}
  </>
  
    
</>

   
  );
}
}
