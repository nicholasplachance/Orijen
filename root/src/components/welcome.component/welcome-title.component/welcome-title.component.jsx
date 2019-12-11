import React from 'react';
import './welcome-title.style.css';

export const WelcomeTitle = ({ title }) => {
	return (
		<div className="title">
			<h3>{title}</h3>
		</div>
	);
};
