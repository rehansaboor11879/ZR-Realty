import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';

import a from '../assets/ZR_REALITY_LOGO.jpeg';
import footer from './FooterData.js';
import { Link } from 'react-router-dom';
import ReactWhatsappButton from 'react-whatsapp-button';
const Footer = () => {
  return (
    <div className="footer_main">
      <Row>
        <Col sm={4} className="col1">
          <h3>ZR Reality</h3>
          <h4>is the partner of the</h4>
          <img className="img1" src={a} alt="ZR-Reality Logo" />
        </Col>
        <Col sm={2} className="col2">
          <h3>Buying</h3>
          {footer[0].map((in1) => (
            <Link to={in1}>
              <h4>{in1}</h4>
            </Link>
          ))}
        </Col>
        <Col sm={2} className="col2">
          <h3>Selling</h3>
          {footer[1].map((in1) => (
            <Link to={in1}>
              <h4>{in1}</h4>
            </Link>
          ))}
        </Col>
        <Col sm={2} className="col2">
          <h3>Leasing</h3>
          {footer[2].map((in1) => (
            <Link to={in1}>
              <h4>{in1}</h4>
            </Link>
          ))}
        </Col>
        <Col sm={2} className="col2">
          <h3>About Us</h3>
          {footer[3].map((in1) => (
            <Link to={in1}>
              <h4>{in1}</h4>
            </Link>
          ))}
          <ReactWhatsappButton
            style={{ height: '120px', width: '120px' }}
            countryCode="92"
            phoneNumber="3231520427"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
