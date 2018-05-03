import React from "react";
import PropTypes from "prop-types";
import logo from "assets/orca_logo.gif";
import { Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => (
  <Row className="Footer">
    <Col class="logo-wrapper" smOffset={4} sm={4}>
      <img class="logo" src={logo} />
      <p>Copyright 2018</p>
    </Col>
  </Row>
);

Footer.propTypes = {};

export default Footer;
