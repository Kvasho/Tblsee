import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import Blocks from "../Assets/Images/blocks.jpg";
import Door1 from "../Assets/Images/door-1.png";

import "../Styles/Carousel.scss";
import { Button } from 'react-bootstrap';

const CarouselLanding = () => {
  return (
    <div className="carousel-wr">
      <Carousel >
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Blocks}
                alt="First slide"
                />
                <img src={Door1} alt="/" className="carousel-door__one"/>
    <Carousel.Caption>
      <h1 className="carousel-title">Your Are In The Right Place</h1>
      <Button variant="outline-primary button-explore">Explore</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
                <img
                className="d-block w-100"
                src={Blocks}
                alt="First slide"
                />
                <img src={Door1} alt="/" className="carousel-door__one"/>
    <Carousel.Caption>
      <h1 className="carousel-title">aeeeeee</h1>
      <Button variant="outline-primary">Explore</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
}

export default CarouselLanding;
