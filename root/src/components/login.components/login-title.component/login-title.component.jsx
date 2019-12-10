import React from 'react';
import './login-title.style.css';

export const LoginTitle = ({ title }) => {
	return (
		<div className="title">
			<h3>{title()}</h3>
		</div>
	);
};
