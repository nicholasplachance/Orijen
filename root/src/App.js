import React, { Component } from 'react';
import './App.css';
import { LoginCard } from './components/login.components/login-card.component/login-card.component';
import { Header } from './components/header/header.component';
import { ContributorList } from './components/contributors/contributor-list/contributor-list.component';
class App extends Component {
	constructor() {
		super();

		this.state = {
			contributors: [
				{
					id: 1,
					name: 'Nick LaChance',
					field: 'Front-end Web Development',
					from: 'St. Louis, MO'
				}
			],
			isLoggedIn: false
		};
	}

	render() {
		if (this.state.isLoggedIn === true) {
			return <h1>Hello World!</h1>;
		}
		return (
			<div className="App">
				<Header />
				<ContributorList contributors={this.state.contributors} />
				{/* <LoginCard
					changeStatusTrue={() => this.setState({ isLoggedIn: true })}
					changeStatusFalse={() => this.setState({ isLoggedIn: false })}
					state={this.state}
				></LoginCard> */}
			</div>
		);
	}
}

export default App;
