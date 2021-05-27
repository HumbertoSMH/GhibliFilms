import React from 'react';
import { AppRouter } from './router/AppRouter';
import GhibliLogo from './studio-ghibli-logo.svg';

export const GhibliApp = () => {
	return (
		<>
			<div className="header">
				<img src={GhibliLogo} className="header__img" />
			</div>
			<div className="main">
				<AppRouter ></AppRouter>
			</div>
		</>
	);
};
