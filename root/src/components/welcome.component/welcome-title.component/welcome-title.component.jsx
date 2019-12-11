// CREATE A COMPONENT TO HOLD STATE FOR THE TITLE OF CARD

import React from 'react';
import './welcome-title.style.css';

// EXPORT WELCOME TITLE AS A FUNCTIONAL COMPONENT
// DECONSTRUCT TITLE FOR CLEANER CODE
// CREATE DIV TO HOLD TITLE
// PASS H3 INSIDE DIV
// PASS TITLE IN H3 USING PROPS
export const WelcomeTitle = ({ title }) => {
	return (
		<div className="title">
			<h3>{title}</h3>
		</div>
	);
};
