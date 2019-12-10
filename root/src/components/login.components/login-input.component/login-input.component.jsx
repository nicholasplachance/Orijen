import React from 'react';
import './login-input.style.css';

export const LoginInput = props => {
	return (
		<div className="login-input">
			<label placeholder="Email/Username">email</label>
			<input type="text" placeholder="email" />
			<label placeholder="password">password</label>
			<input type="password" placeholder="password" />
		</div>
	);
};
