import React, {Component} from 'react';

// COMPONENTS
import PageTitle from '../../Components/PageTitle';
import HeaderBlack from '../../Components/HeaderBlack';
import axios from 'axios';

// SCSS
import "./Location.scss";
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
    const {t, i18n} = this.props;
  return (
    <>
    <HeaderBlack />
    <div className="location">
      <PageTitle title={(() => {
                    if (i18n.language === 'GE') {
                      return (
                        arrayUrban.title_and_desc.title_ge
                      )
                    } else if (i18n.language === 'RU') {
                      return (
                        arrayUrban.title_and_desc.title_ru
                      )
                    } else {
                      return (
                        arrayUrban.title_and_desc.title_en
                      )
                    }
      })()}/>
      <p className="location-paragraph">{(() => {
                    if (i18n.language === 'GE') {
                      return (
                        arrayUrban.title_and_desc.description_ge
                      )
                    } else if (i18n.language === 'RU') {
                      return (
                        arrayUrban.title_and_desc.description_ru
                      )
                    } else {
                      return (
                        arrayUrban.title_and_desc.description_en
                      )
                    }
      })()}</p>

      <Destination arrayDestination={this.state.arrayUrban.packages} t={t} i18n={i18n}/>)
      

      {
        arrayUrban.informations.map((info,index) => 
        <div className="location-exploring container-own">
        <div className= {index%2===1 ? "location-infos" : "location-infos direction-reverse"}>
          <div className="relative">
            <div className={index%2===1 ? "location-absolute location-absolute__reverse" : "location-absolute "}/>
            <img src={Tbilisee + info.image} alt={info.title_en} className="full" key={index}/>
          </div>
           <div className="location-infos__txt">
          <h2>{(() => {
                    if (i18n.language === 'GE') {
                      return (
                        info.title_ge
                      )
                    } else if (i18n.language === 'RU') {
                      return (
                        info.title_ru
                      )
                    } else {
                      return (
                        info.title_en
                      )
                    }
      })()}</h2>
          <p>{(() => {
                    if (i18n.language === 'GE') {
                      return (
                        info.description_ge
                      )
                    } else if (i18n.language === 'RU') {
                      return (
                        info.description_ru
                      )
                    } else {
                      return (
                        info.description_en
                      )
                    }
      })()}</p>
          </div>
        </div>
      </div>) 
      }
      
      
      </div>
  </>
  );
}
}
