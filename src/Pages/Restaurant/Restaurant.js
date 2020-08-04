import React, {Component} from 'react';

// PACKAGES
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import AOS from 'aos';

// COMPONENTS
import Header from '../../Components/Header';

// SCSS
import "./restaurant.scss";

export default class  Restaurant extends Component {
  state = {
    arrayRestaurant: undefined
  }

  componentDidMount () {
    axios.get('https://core.tbilisee.ge/api/restaurant').then(res => {
      this.setState({arrayRestaurant: res.data});
    })
    AOS.init({
			duration: 2000
		});
  } 

  render(){
    if(!this.state.arrayRestaurant) {
      return "loading"; //TODO: Need Loading State
    }
    const Tbilisee = 'https://core.tbilisee.ge/';
    const {arrayRestaurant} = this.state;
    const {t, i18n} = this.props;
  return (
    <>
    <Header/>
    <div className="restaurant">
      <img src={Tbilisee + arrayRestaurant.cover} alt="restaurant wallpaper" className="restaurant-wallpaper"/>
      {
        arrayRestaurant.stories.map((item,index) => 
        <div data-aos="fade-up"
        data-aos-anchor-placement = "top-center"
        className={index%2===1 ? "restaurant-gastronomy container-own" : "restaurant-gastronomy container-own direction-reverse"}>
        <Row xs={1} lg={2} className="restaurant-gastronomy__wr width-full">
          <Col>
            <div className="restaurant-block">
              <h2 className="restaurant-gastronomy__title">{(() => {
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
      })()}</h2>
              <p className="restaurant-gastronomy__paragraph">{(() => {
                    if (i18n.language === 'GE') {
                      return (
                        item.description_ge
                      )
                    } else if (i18n.language === 'RU') {
                      return (
                        item.description_ru
                      )
                    } else {
                      return (
                        item.description_en
                      )
                    }
      })()}</p>
            </div> 
          </Col>
          <Col>
            <img src={Tbilisee + item.image} alt="gastronomy" className="width-full" key={index}/> 
          </Col>
        </Row>
      </div>)
      }
      <h3 className="restaurant-menu__title" data-aos="fade-up"
              data-aos-anchor-placement = "top-center">
          Menu
          <span>Menu</span>
      </h3>
      <div className="restaurant-menu container-own">
        {
          arrayRestaurant.menus.map((item,index) => 
          <div data-aos="fade-up"
          data-aos-anchor-placement = "top-center"
          className="restaurant-menu__cell">
          <img src={Tbilisee + item.image} alt={item.name} id={index} className="restaurant-menu__image" key={index}/>
            <div>
              <h4>{(() => {
                    if (i18n.language === 'GE') {
                      return (
                        item.name_ge
                      )
                    } else if (i18n.language === 'RU') {
                      return (
                        item.name_ru
                      )
                    } else {
                      return (
                        item.name_en
                      )
                    }
      })()}</h4>
              <h5>{(() => {
                    if (i18n.language === 'GE') {
                      return (
                        item.city_ge, item.country_ge
                      )
                    } else if (i18n.language === 'RU') {
                      return (
                        item.city_ru, item.country_ru
                      )
                    } else {
                      return (
                        item.city_en, item.country_en
                      )
                    }
      })()}</h5>
          </div>
        </div>)
        }
      </div>

      {/* CHEF SECTION */}
      <img data-aos="fade-up"
              data-aos-anchor-placement = "top-center"
              src={Tbilisee + arrayRestaurant.chef.image} alt="shef" className="restaurant-shef__img container-own"/>
      <h2 
              className="restaurant-shef">{(() => {
                if (i18n.language === 'GE') {
                  return (
                    arrayRestaurant.chef.fullName_ge
                  )
                } else if (i18n.language === 'RU') {
                  return (
                    arrayRestaurant.chef.fullName_ru
                  )
                } else {
                  return (
                    arrayRestaurant.chef.fullName_en
                  )
                }
  })()}</h2>
      <h5 
              className="restaurant-shef__post">shef</h5>
      <p  className="restaurant-shef__about">{(() => {
                if (i18n.language === 'GE') {
                  return (
                    arrayRestaurant.chef.description_ge
                  )
                } else if (i18n.language === 'RU') {
                  return (
                    arrayRestaurant.chef.description_ru
                  )
                } else {
                  return (
                    arrayRestaurant.chef.description_en
                  )
                }
  })()}</p>
    </div>
    </>
  );
}
}
