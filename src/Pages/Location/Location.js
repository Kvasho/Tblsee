import React, {Component} from 'react';

// COMPONENTS
import PageTitle from '../../Components/PageTitle';
import Destination from '../../Components/Destination';
import HeaderBlack from '../../Components/HeaderBlack';
import axios from 'axios';

// SCSS
import "./Location.scss";

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
  return (
    <>
    <HeaderBlack />
    <div className="location">
      <PageTitle title={arrayUrban.title_and_desc.title_en}/>
  <p className="location-paragraph">{arrayUrban.title_and_desc.description_en}</p>
      {/* <Destination arrayDestination={arrayUrban.packages}/> */}
      <div className="location-exploring container-own">
      </div>
  </div>
  </>
  );
}
}
