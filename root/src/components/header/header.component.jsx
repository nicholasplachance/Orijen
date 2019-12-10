import React from 'react';
import './header.style.css';
import logo from '../../img/orijen_logo.png';

export const Header = props => {
	return (
		<header>
			<img src={logo} alt="" />
			<h3>Nexus for Junior Developers</h3>
		</header>
	);
};
