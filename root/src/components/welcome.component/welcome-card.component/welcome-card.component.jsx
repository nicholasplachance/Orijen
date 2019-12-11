import React from 'react';
import './welcome-card.style.css';
import { WelcomeTitle } from '../welcome-title.component/welcome-title.component';

export const WelcomeCard = ({ state, changeStatusTrue, changeStatusFalse }) => {
	return (
		<div className="login-card">
			<WelcomeTitle title={'Welcome to Orijen!'} />

			<div className="login-credentials">
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
