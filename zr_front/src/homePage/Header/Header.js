import React from 'react';
// import useEffect from 'react';
// import axios from 'axios';
import './Header.css';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/ZR_REALITY_LOGO.jpeg';
const navbar = [
  'Home',
  'Projects',
  'Team',
  'Blog',
  "Buyer's Guide",
  'About Us',
  'Contact Us',
];
const Header = () => {
  return (
    <div className="Header">
      <Row className="main">
        <Col md={3}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </Col>
        <Col md={9}>
          <ul>
            {navbar.map((nav) => (
              <li key={[nav]}>
                <Link to={nav}>{nav}</Link>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
