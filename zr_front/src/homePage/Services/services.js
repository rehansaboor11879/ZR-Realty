import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Cards from './Cards';
import './services.css';

const services = () => {
  return (
    <div className="main1">
      <Row>
        <Col sm={12}>
          <h1>OUR SERVICES</h1>
        </Col>
        <Col sm={12}>
          <h2>The Smartest way to Buy a Home</h2>
        </Col>
        <Col className="flexcard" sm={12}>
          <Cards />
        </Col>
      </Row>
    </div>
  );
};
export default services;
