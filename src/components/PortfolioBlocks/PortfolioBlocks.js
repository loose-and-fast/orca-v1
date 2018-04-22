import React from "react";
import PropTypes from "prop-types";
import "./PortfolioBlocks.css";


const PortfolioBlocks = ({ className, imageSrc }) => {
	return (	
	<div className={`PortfolioBlocks-${className}`}>
		<img src={imageSrc} height="100" width="100"/>
	</div>);
}

PortfolioBlocks.propTypes = {};

export default PortfolioBlocks;
