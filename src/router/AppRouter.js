import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FilmsScreen } from '../components/FilmsScreen';

export const AppRouter = () => {
	return (
		<Router>
			<div className="main__container">
				<Switch>
					<Route path="/" component={FilmsScreen} />
				</Switch>
			</div>
		</Router>
	);
};
