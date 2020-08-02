import React, {Component} from 'react';

// PACKAGES
import {Link} from "react-router-dom";

// COMPONENTS
import PageTitle from '../../Components/PageTitle';
import Button from "../../Components/Button";
import HeaderBlack from "../../Components/HeaderBlack";

// SCSS
import "./Rooms.scss";
import '../../Styles/common.scss'
import axios from 'axios';


export default class  Rooms extends Component {
  state = {
    arrayRooms: undefined
  }
  componentDidMount(){
    axios.get('https://core.tbilisee.ge/api/allRooms').then(res => {
      this.setState({arrayRooms: res.data})
    })
  }
  render(){
    if(!this.state.arrayRooms) {
      return "loading"; //TODO: Need Loading State
  }
  const Tbilisee = 'https://core.tbilisee.ge/'
  const {arrayRooms} = this.state;
  return (
    <>
    <HeaderBlack/>
    <div className="rooms container-own">
      <PageTitle title="Rooms"/>
      {
        arrayRooms.map((room,index) => 
        <>
          <img src={Tbilisee + room.cover_images}/>
          <div className={index%2==1 ? "rooms-luxury container-own" : "rooms-luxury container-own direction-reverse"}>
          <div>
            <img src={Tbilisee + room.main_image} alt="Luxury room" className="full"/>
          </div>
          <div>
      <h5 className="rooms-description__subtitle">room{index}</h5>
            <h1 className="rooms-description__title">{room.type_en}</h1>
            <p className="rooms-description__paragraph">{room.description_en}</p>
              <div className="flex space-between">
                <span className="rooms-price">{room.price} $</span>
                <Link 
                  to="/luxury"
                  className="see-more__btn"
                  >See more</Link>
              </div>
          </div>
        </div>
        </>
        )
      }
    </div>
    </>
  );
}
}
