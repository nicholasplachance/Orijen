import React, { Component } from 'react';
import './App.css';
import { LoginCard } from './components/login.components/login-card.component/login-card.component';
import { WelcomeCard } from './components/welcome.component/welcome-card.component/welcome-card.component';
import { Header } from './components/header/header.component';
import { Footer } from './components/footer/footer.component';
import { ContributorList } from './components/contributors/contributor-list/contributor-list.component';

// AFTER ALL IMPORTS START CREATE CLASS APP THAT EXTENDS COMPONENT
// USE CONSTRUCTOR TO SET UP CLASS AND HELP MANAGE STATE
// SET THIS.STATE = TO AN OBJECT LITERAL
// CREATE AN OBJECT CALLED CONTRIBUTORS THAT HOLDS AN ARRAY OF OBJECTS
// EACH OBJECT SHOULD HAVE UNIQUE ID, NAME, FIELD, FROM: RESPECTIVE TO THE CONTRIBUTOR
// CREATE A RENDER FUNCTION TO RETURN JSX INTO A USABLE COMPONENT
// PASS IMPORTS INTO RENDER FUNCTION
// USE IF STATEMENT TO PASS COMPONENTS DEPENDING ON THIS.STATE
// EXPORT CLASS TO ALLOW USEABILITY

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
		if (this.state.isLoggedIn) {
			return (
				<div className="App">
					<Header />
					<div className="flex-container">
						<ContributorList contributors={this.state.contributors} />
						<WelcomeCard
							changeStatusTrue={() => this.setState({ isLoggedIn: true })}
							changeStatusFalse={() => this.setState({ isLoggedIn: false })}
							state={this.state}
						></WelcomeCard>
					</div>
					<Footer />
				</div>
			);
		}
		return (
			<div className="App">
				<Header />
				<div className="flex-container">
					<ContributorList contributors={this.state.contributors} />
					<LoginCard
						changeStatusTrue={() => this.setState({ isLoggedIn: true })}
						changeStatusFalse={() => this.setState({ isLoggedIn: false })}
						state={this.state}
					></LoginCard>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
