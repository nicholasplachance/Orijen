// CREATE A COMPONENT THAT STORES ALL ELEMENTS FOR CONTRIBUTORS

import React from 'react';

// CREATE A FUNCTIONAL COMPONENT THAT WILL EXPORT DETAILS OF CONTRIBUTOR
// USE NESTED DESTRUCTURING OF PROPS FOR CLEANER CODE
export const ContributorCard = ({ contributor: { name, from, field } }) => (
	<div>
		<h2>{name}</h2>
		<h3>{from}</h3>
		<h4>{field}</h4>
	</div>
);
