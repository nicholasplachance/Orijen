// CREATE A CARD THAT WILL ACT AS STATE FOR A SUCCESSFUL LOGIN

import React from 'react';
import './welcome-card.style.css';
import { WelcomeTitle } from '../welcome-title.component/welcome-title.component';

// CREATE A WELCOME CARD FUNCTION THAT WILL BE EXPORTED
// DECONSTRUCT THE PROPS FOR CLEANER CODE
// CREATE DIV FOR ENTIRE WELCOME CARD
// USE WELCOME TITLE AND CREATE PROP WITH TITLE
// CREATE SUB DIV TO HOLD WELCOME LIST
// CREATE A BUTTON TO "SIGN-OUT" AND ALLOW STATE CHANGE TESTING

export const WelcomeCard = ({ state, changeStatusFalse }) => {
	return (
		<div className="welcome-card">
			<WelcomeTitle title={'Welcome to Orijen!'} />

			<div className="welcome-credentials">
				<div className="welcome-list">
					<ul>
						<li>Shared Resources</li>
						<li>Coding Challenges</li>
						<li>Help forum</li>
						<li>News</li>
					</ul>
				</div>
			</div>
			<div className="buttons">
				<button
					className="sign-out"
					onClick={() => {
						changeStatusFalse();
						console.log(state);
					}}
				>
					sign out
				</button>
			</div>
		</div>
	);
};
