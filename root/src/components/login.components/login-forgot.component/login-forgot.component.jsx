import React from 'react';
import './login-forgot.style.css';

export const LoginForgot = props => {
	{
		console.log(props.props.state.isLoggedIn);
	}
	return (
		<button className="login-forgot" type="submit">
			forgot login
		</button>
	);
};
