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
];
const Header = () => {
  return (
    <div className="Header">
      <Row className="main">
        <Col lg={4} sm={4}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </Col>
        <Col className='nav-bar-center' lg={8} sm={8}>
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
