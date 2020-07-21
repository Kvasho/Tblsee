import React from 'react';
import PageTitle from '../Components/PageTitle';
import Destination from '../Components/Destination';
import HeaderBlack from '../Components/HeaderBlack';

import "../Styles/Location.scss";
import "../Styles/common.scss";

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
  </div>
  </>
  );
}

export default Location;
