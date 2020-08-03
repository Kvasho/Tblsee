import React, {Component} from 'react';
import axios from 'axios';
import HeaderBlack from '../../Components/HeaderBlack';
import PageTitle from '../../Components/PageTitle';
import LuxurySwiper from '../../Components/LuxurySwiper';
import Button from '../../Components/Button'

// SCSS
import './MidRange.scss'
import '../../Styles/common.scss'

class MidRange extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          arrayLuxury: undefined
         };
      }
      componentDidMount(){
        const {index}  = this.props.match.params;
        axios.get('https://core.tbilisee.ge/api/oneRoom/luxury').then(res => {
          this.setState( {arrayLuxury: res.data[index]} );    
        })               
      }
      render() {
        if(!this.state.arrayLuxury) {
          return "loading"; //TODO: Need Loading State
        }
        const Tbilisee = "https://core.tbilisee.ge/";
        const {arrayLuxury} = this.state;
        return (
          <>
          <HeaderBlack />
          <PageTitle title="mid - range"/>                    
            <>
            <div className="container-own luxury">
            <div className="luxury-absolute"/>
            <section className="luxury-swiper">
            <LuxurySwiper 
            containerClass   = "swiper-div"
            slidesPerView    = "auto"
            spaceBetween     = { 50 }
            buttonNextClass  = "landing-btn__next"
            buttonPrevClass  = "landing-btn__prev"
            swiperController = "landing-swiper__controller" 
            prevButton       = "Prev"
            nextButton       = "Next"
            arrayImg         = {arrayLuxury.cover_images}
        />
            </section>
            </div>
            <section className="luxury-about">
            <h2>about room</h2>
            <p>{arrayLuxury.description_en}</p>
            </section> 
            <section className="luxury-style container-own">
              <div></div>
              <div>
                <img src={Tbilisee + arrayLuxury.style_image} alt={"index"} className="full"/>
              </div>
              <div>
                <h2>Style</h2>
                <p>{arrayLuxury.style_description_en}</p>
              </div>
              <div>
                <img src={Tbilisee + arrayLuxury.mood_image_small} alt={"index"} className="full" style={{height: "60%"}}/>
                <div className="flex" style={{marginTop: "7rem"}}>
                <h4 className="luxury-style__price">{arrayLuxury.price} $</h4>
                <h4 className="per-night">per night</h4>
                </div>
              </div>
              <div>
                <h2 style={{marginTop: "6rem"}}>Mood</h2>
                <p>{arrayLuxury.mood_description_en}</p>
              </div>
              <div>
                <img src={Tbilisee + arrayLuxury.mood_image_big} className="full"/>
              </div>
            </section>
            </>
            )
          
          <section className="luxury-credit">
                <Button
                  title="book now"
                 className="midrange-credit__btn"
                />                  
            </section>          
          </>
        );
      }
  }

  export default MidRange;