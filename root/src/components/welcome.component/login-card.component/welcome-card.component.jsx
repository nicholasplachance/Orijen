import React from 'react';
import './login-card.style.css';
import { LoginTitle } from '../welcome-title.component/welcome-title.component';

export const WelcomeCard = ({ state, changeStatusTrue, changeStatusFalse }) => {
	return (
		<div className="login-card">
			<LoginTitle title={'Welcome to Orijen!'} />

			<div className="login-credentials">
				<div className="login-input">
					<label placeholder="Email/Username">email</label>
					<input type="text" placeholder="email" />
					<label placeholder="password">password</label>
					<input type="password" placeholder="password" />
				</div>
			</div>
			<div className="buttons">
				<button
					className="login-forgot"
					onClick={() => {
						changeStatusFalse();
						console.log(state);
					}}
				>
					forgot login
				</button>
				<button
					className="login-confirm"
					onClick={() => {
						changeStatusTrue();
						console.log(state);
					}}
				>
					sign in
				</button>
			</div>
		</div>
	);
};
