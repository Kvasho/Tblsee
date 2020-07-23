import React from 'react';

// COMPONENTS
import PageTitle from '../../Components/PageTitle';
import Destination from '../../Components/Destination';
import HeaderBlack from '../../Components/HeaderBlack';

// SCSS
import "./Location.scss";

// IMAGES 
import locationExploring from '../../Assets/Images/location-exploring.jpg'
import locationCulture from '../../Assets/Images/location-culture.jpg'

const Location = () => {
  return (
    <>
    <HeaderBlack />
    <div className="location">
      <PageTitle title="urban & unique"/>
      <p className="location-paragraph">Lorem Ipsum is simply dummy 
      text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text 
       ever since the 1500s, when an unknown printer took a 
      galley of type and scrambled it to make a type specimen book.</p>
      <p className="location-paragraph">Lorem Ipsum is simply dummy 
      text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text 
       ever since the 1500s, when an unknown printer took a 
      galley of type and scrambled it to make a type specimen book.</p>
      <Destination/>
      <Destination/>
      <Destination/>
      <div className="location-exploring container-own">
          <img src={locationExploring}/>
          <div className="location-exploring__txt">
              <h2>Exploring</h2>
              <p>Lorem ipsum is placeholder text commonly used in the graphic, 
                print, and publishing industries for previewing layouts and visual mockups
              </p>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
               incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
               exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
               dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
            anim id est laborum..</p>
          </div>
      </div>
      <div className="location-culture container-own">
          
          <div className="location-culture__txt">
          <h2>Culture</h2>
              <p>Lorem ipsum is placeholder text commonly used in the graphic, 
                print, and publishing industries for previewing layouts and visual mockups
              </p>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
               incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
               exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
               dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
            anim id est laborum..</p>
          </div>
          <img src={locationCulture}/>
      </div>
  </div>
  </>
  );
}

export default Location;
