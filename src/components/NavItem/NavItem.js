import React from "react";
import PropTypes from "prop-types";

import "./NavItem.css";

const NavItem = ({ text, location, className }) => (
  <span className={"NavItem " + className}>{text}</span>
);

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  location: PropTypes.string
};

export default NavItem;
