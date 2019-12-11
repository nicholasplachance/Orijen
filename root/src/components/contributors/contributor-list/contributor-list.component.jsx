// CREATE A COMPONENT THAT RETURNS A GRID OF ALL CONTRIBUTORS

import React from 'react';
import { ContributorCard } from '../contributor-card/contributor-card.component';
import './contributor-card.style.css';

// CREATE A FUNCTIONAL COMPONENTS THAT TAKES IN CONTRIBUTOR LIST AND RETURNS A GRID OF ELEMENTS
// USE DESTRUCTURING ON PROPS TO CREATE CLEANER CODE
// PASS PROPS TO CONTRIBUTOR CARD TO PASS CONTRIBUTOR DATA
export const ContributorList = ({ contributors }) => {
	return (
		<div>
			<h2 className="sub-title">Contributors</h2>
			<div className="contributor-card">
				{contributors.map(contributor => (
					<ContributorCard key={contributor.id} contributor={contributor} />
				))}
			</div>
		</div>
	);
};
