
import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { Link } from 'react-router-dom';

// CSS
import 'swiper/swiper.scss';
import '../Styles/costumiseSwiper.scss';
import Image from "../Assets/Images/landing-swiper.jpg"



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
    console.log(this.props.arrayDestination[0]);
  }
  render () {
  const Tbilisee = 'https://core.tbilisee.ge/';
  const toggleImage = (item) => {
    this.setState({testImages: item})
  }
  return (
<>
  <>
  <div className="destination container-own relative"> 
    <div className="destination-background absolute"/>
      <img id="destination-main" src={Tbilisee + this.state.testImages.image} className="destination-img full"/>
            <div className="destination-content">
              <div>
              <h2 className="destination-content__title">{this.state.testImages.title_en}</h2>
              <p className="destination-content__paragraph" style={{ marginTop: "30px", marginBottom: "30px"}}>{this.state.testImages.description_en}</p>
              <p className="destination-content__paragraph">{this.state.testImages.time} min trip</p>
              </div>
              <div className="destination-cards">
              {
                  this.props.arrayDestination.map((item,index) => 
                  <div className="destination-card">
                      <h3>{item.title_en}</h3>
                  <img src={Tbilisee + item.image} className="destination-card__image" onClick={() => toggleImage(item)}/> 
                </div>
                  )
              }                               
                </div>                                                        
            </div>
            </div>
  </>
  )
    
</>

   
  );
}
}
