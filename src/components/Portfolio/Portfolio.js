import React from "react";
import PropTypes from "prop-types";
import { Col, Button, Row } from "react-bootstrap";
import PortfolioBlocks from "components/PortfolioBlocks/PortfolioBlocks";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/fontawesome-free-solid';
import {
	camera,
	clock,
	dice,
	logo,
	lion,
	rose,
	tower,
	tracks,
	tree,
	water,
} from "assets/index.js";

import "./Portfolio.css";

const Portfolio = () => {
	console.log('camera', camera);
	return (
	<div className="Portfolio">
		<Row>
			<h6>THE SELECTED OF</h6>
			<h1>PORTFOLIO</h1>
			<div className="selector">All Items Personal Photography Portraits</div>
		</Row>
		<Row>
			<Col xs={4}>
				<PortfolioBlocks className="water" imageSrc={water} />
				<PortfolioBlocks className="tree" imageSrc={tree} />
				<PortfolioBlocks className="lion" imageSrc={lion} />
			</Col>
			<Col xs={4}>
				<PortfolioBlocks className="dice" imageSrc={dice} />
				<PortfolioBlocks className="rose" imageSrc={rose} />
				<PortfolioBlocks className="tower" imageSrc={tower} />
			</Col>
			<Col xs={4}>
				<PortfolioBlocks className="camera" imageSrc={camera} />
				<PortfolioBlocks className="tracks" imageSrc={tracks} />
				<PortfolioBlocks className="clock" imageSrc={clock} />
			</Col>			
		</Row>
		<Row className="btn-row">
			<Button onClick={()=>alert('hello')}>
				<FontAwesomeIcon className="fa-play-circle" icon={faPlayCircle} />
				Load More
			</Button>
		</Row>
	</div>);
}

Portfolio.propTypes = {};

export default Portfolio;
