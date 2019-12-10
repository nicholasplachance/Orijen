import React from 'react';

export const ContributorCard = props => (
	<div>
		<h2>{props.contributor.name}</h2>
		<h3>{props.contributor.from}</h3>
		<h4>{props.contributor.field}</h4>
	</div>
);
