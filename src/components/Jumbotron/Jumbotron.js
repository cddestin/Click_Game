//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
	<header className = "header">
		<h1>DBZ Clicky Game.</h1>
		<h2>Click on any image to earn a point, but don't click on the same picture more than once.</h2>
	</header>
);

export default Jumbotron;