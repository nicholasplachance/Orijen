import React from 'react';
import './footer.style.css';
import logo from '../../img/orijen_logo.png';

export const Footer = props => {
	return (
		<footer>
			<img src={logo} alt="" />
			<h3>Nexus for Junior Developers</h3>
		</footer>
	);
};
