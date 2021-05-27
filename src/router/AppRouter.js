import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FilmScreen } from '../components/FilmScreen';
import { FilmsScreen } from '../components/FilmsScreen';

export const AppRouter = () => {
	return (
		<Router>
			<div className="main__container">
				<Switch>
					<Route exact path="/" component={FilmsScreen} />
					<Route exact path="/film/:filmId" component={FilmScreen} />
				</Switch>
			</div>
		</Router>
	);
};
