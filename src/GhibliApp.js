import React from 'react';
import { AppRouter } from './router/AppRouter';

export const GhibliApp = () => {
	return (
		<>
			<div className="header">
				<img src="https://cdn.worldvectorlogo.com/logos/studio-ghibli-logo.svg" className="header__img" />
				<i>header</i>
			</div>
			<div className="main">
				<div className="row">
					<div className="col-push-3 col-6">
						<input />
					</div>
				</div>
				<AppRouter ></AppRouter>
			</div>
		</>
	);
};
