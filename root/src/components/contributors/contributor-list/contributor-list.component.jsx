import React from 'react';
import { ContributorCard } from '../contributor-card/contributor-card.component';
import './contributor-card.style.css';

export const ContributorList = props => {
	console.log(props);
	return (
		<div>
			<h2 className="sub-title">Contributors</h2>
			<div className="contributor-card">
				{props.contributors.map(contributor => (
					<ContributorCard key={contributor.id} contributor={contributor} />
				))}
			</div>
		</div>
	);
};
