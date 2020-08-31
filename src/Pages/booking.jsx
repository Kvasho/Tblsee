import React from "react";

import HeaderBlack from '../Components/HeaderBlack';

const Button = (props) => {
  return (
    <>
       <HeaderBlack/>
       <iframe src="https://tbilisee.ge/static/media/reservation-en.html" style={{borderStyle: "none", border: "none", width: "100%", height: "100vh", marginTop: "10rem"}}></iframe>
    </>
  );
}

export default Button;