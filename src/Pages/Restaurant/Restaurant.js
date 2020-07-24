import React, {Component} from 'react';

// PACKAGES
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

// COMPONENTS
import Header from '../../Components/Header';

// SCSS
import "./restaurant.scss";

// IMAGES
import RestaurantWallpaper from "../../Assets/Images/restaurant-wallpaper.png";
import Gastronomy from "../../Assets/Images/gastronomy.png";
import Desert from "../../Assets/Images/desert.png";
import Pizza from "../../Assets/Images/pizza.png";
import Shef from "../../Assets/Images/shef.png";

export default class  Restaurant extends Component {
  state = {
    arrayRestaurant: undefined
  }

  componentDidMount () {
    axios.get('https://core.tbilisee.ge/api/restaurant').then(res => {
      this.setState({arrayRestaurant: res.data});
    })
  }

  render(){
    if(!this.state.arrayRestaurant) {
      return "loading"; //TODO: Need Loading State
    }
    const {arrayRestaurant} = this.state;
  return (
    <>
    <Header/>
    <div className="restaurant">
      <img src={arrayRestaurant.cover} alt="restaurant wallpaper" className="restaurant-wallpaper"/>
      {
        arrayRestaurant.stories.map((item,index) => 
        <div className="restaurant-gastronomy container-own">
        <Row xs={1} lg={2} className="restaurant-gastronomy__wr width-full">
          <Col>
            <div className="restaurant-block">
              <h2 className="restaurant-gastronomy__title">{item.title_en}</h2>
              <p className="restaurant-gastronomy__paragraph">{item.description_en}</p>
            </div> 
          </Col>
          <Col>
            <img src={item.image} alt="gastronomy" className="width-full"/> 
          </Col>
        </Row>
      </div>)
      }
      
      {/* <div className="restaurant-desert container-own">
      <Row xs={1} lg={2} className="restaurant-gastronomy__wr width-full">
        <Col>
          <img src={Desert} alt="desert" className="width-full"/>
        </Col>
        <Col>
          <div className="restaurant-block">
            <h2 className="restaurant-desert__title">desert</h2>
            <p className="restaurant-desert__paragraph">There are many variations 
            of passages of Lorem Ipsum available, 
            but the majority have suffered  alteration in some form,</p>
         </div>
        </Col>
      </Row>        
      </div> */}
      <h3 className="restaurant-menu__title">
          Menu
          <span>Menu</span>
      </h3>
      <div className="restaurant-menu container-own">
        {
          arrayRestaurant.menus.map((item,index) => 
          <Col className="restaurant-menu__cell">
          <img src={item.image} alt={item.name} id={index} className="restaurant-menu__image"/>
            <div>
              <h4>{item.name_en}</h4>
              <h5>{item.city_en},{item.country_en}</h5>
          </div>
        </Col>)
        }
      </div>

      {/* CHEF SECTION */}
      <img src={arrayRestaurant.chef.image} alt="shef" className="restaurant-shef__img container-own"/>
      <h2 className="restaurant-shef">{arrayRestaurant.chef.fullName_en}</h2>
      <h5 className="restaurant-shef__post">shef</h5>
      <p  className="restaurant-shef__about">{arrayRestaurant.chef.description_en}</p>
    </div>
    </>
  );
}
}
