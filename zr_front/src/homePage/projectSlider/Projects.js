import React from 'react';
import './Projects.css';
import Data from './data.js';
import Slider from 'react-slick';
import { Col, Container, Row } from 'react-bootstrap';

var settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
};
const Projects = () => {
  return (
    <div className="projectslide">
      <div style={{ textAlign: 'center' }}>
        {/* use servicess css for con and h1 and h2 */}
        <Container classNameName="con">
          <Row>
            <Col sm={12}>
              <h1>WHAT WE OFFER</h1>
            </Col>
            <Col sm={12}>
              <h2>Exclusive Offer For You</h2>
            </Col>
          </Row>
        </Container>
        <Slider {...settings}>
          <Data />
          <Data />
          <Data />
          <Data />
          <Data />
          <Data />
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
