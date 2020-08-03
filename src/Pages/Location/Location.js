import React, {Component} from 'react';

// COMPONENTS
import PageTitle from '../../Components/PageTitle';
import HeaderBlack from '../../Components/HeaderBlack';
import axios from 'axios';

// SCSS
import "./Location.scss";
import DestinationGallery from '../../Components/Destination';
import Destination from '../../Components/Destination'

export default class Location extends Component {
  state={
    arrayUrban: undefined
  }

  componentDidMount(){
    axios.get('https://core.tbilisee.ge/api/urban').then(res => {
      this.setState({arrayUrban: res.data})
    })
  }

  render(){
    if(!this.state.arrayUrban) {
      return "loading"; //TODO: Need Loading State
    }
    const {arrayUrban} = this.state;
    const Tbilisee = 'https://core.tbilisee.ge/';
    console.log(this.state.arrayUrban,"ARRAYDESTINATION")
  return (
    <>
    <HeaderBlack />
    <div className="location">
      <PageTitle title={arrayUrban.title_and_desc.title_en}/>
      <p className="location-paragraph">{arrayUrban.title_and_desc.description_en}</p>

      <Destination arrayDestination={this.state.arrayUrban.packages}/>)
      

      {
        arrayUrban.informations.map((info,index) => 
        <div className="location-exploring container-own">
        <div className= {index%2==1 ? "location-infos" : "location-infos direction-reverse"}>
          <div className="relative">
            <div className={index%2==1 ? "location-absolute location-absolute__reverse" : "location-absolute "}/>
            <img src={Tbilisee + info.image} alt={info.title_en} className="full"/>
          </div>
           <div className="location-infos__txt">
          <h2>{info.title_en}</h2>
          <p>{info.description_en}</p>
          </div>
        </div>
      </div>) 
      }
      
      
      </div>
  </>
  );
}
}
