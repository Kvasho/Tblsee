import React, {Component} from 'react';

// COMPONENTS
import PageTitle from '../../Components/PageTitle';
import HeaderBlack from '../../Components/HeaderBlack';
import axios from 'axios';

// SCSS
import "./Location.scss";
import DestinationGallery from '../../Components/Destination';

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

      {
        arrayUrban.packages.map((item,index) => <Destination arrayDestination={[item,{
          "image": "public/images/urban/2020-07-29T10:04:26.969Z0_DypQzAMdE9cudggX.jpeg",
          "title_en": "new test update",
          "title_ge": "sdfasdfasdfa update",
          "title_ru": "slkdjfhkladshfkjupdate",
          "description_en": "sld;kfj ads;lfjh;lasdkfjh ;ladjsf;lkdsaj fl;ajksdf ;ljkasdl;fj update",
          "description_ge": "khjsdfl ashdkfas dk flaksdfasdhf kljafladsfkjlashdl fkadhsf update",
          "description_ru": "skjdlhflka sfk jad lkadslfkjhadls kfh lkdsafjhl kadsjhfkl adsjflksdhlfkajd update",
          "time": "70",
          "group": "Group 1"
      }]}/>)
      }
      
      <div className="location-exploring container-own">
      </div>
      </div>
  </>
  );
}
}
