import React, { Component } from "react";
// import PropTypes from "prop-types";
import "./TopNav.css";
import NavItem from "components/NavItem/NavItem";
import { Row } from "react-bootstrap";

class TopNav extends Component {
  state = {};

  render() {
    return (
      <div className="TopNav">
        <Row>
          {/* <img src={image} /> */}
          <NavItem className="item" text="WORK" />
          <span className="bullet">&middot;</span>
          <NavItem className="item" text="ABOUT" />
          <span className="bullet">&middot;</span>
          <NavItem className="item" text="CONTACT" />
        </Row>
      </div>
    );
  }
}

TopNav.propTypes = {};

TopNav.defaultProps = {};

export default TopNav;
