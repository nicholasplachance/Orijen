import React from 'react';
import './login-card.style.css';
import { LoginInput } from '../login-input.component/login-input.component';
import { LoginTitle } from '../login-title.component/login-title.component';

export const LoginCard = ({ state, changeStatusTrue, changeStatusFalse }) => {
	return (
		<div className="login-card">
			<LoginTitle
				title={() => {
					if (state.isLoggedIn) {
						console.log('true');
						return 'Welcome Back!';
					}
					console.log('false');
					return 'Login here!';
				}}
			/>

			<div className="login-credentials">{<LoginInput />}</div>
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
				<button
					className="login-register"
					onClick={() => {
						changeStatusFalse();
						console.log(state);
					}}
				>
					register here
				</button>
			</div>
		</div>
	);
};
