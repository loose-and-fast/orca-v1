import React, { Component } from "react";
// import PropTypes from "prop-types";
import "./TopNav.css";
import NavItem from "components/NavItem/NavItem";
import { Row } from "react-bootstrap";
import logo from "assets/orca_logo.gif";

class TopNav extends Component {
  state = {};

  render() {
    return (
      <div className="TopNav">
        <Row className="navigation">
          <img src={logo} height="100" width="100" alt="orca logo"/>
          <NavItem className="item" text="WORK" />
          <span className="bullet">&middot;</span>
          <NavItem className="item" text="ABOUT" />
          <span className="bullet">&middot;</span>
          <NavItem className="item" text="CONTACT" />
        </Row>
        <div className="bottom">
          <span className="glyphicon glyphicon-chevron-down down-arrow" />
        </div>
      </div>
    );
  }
}

TopNav.propTypes = {};

TopNav.defaultProps = {};

export default TopNav;
