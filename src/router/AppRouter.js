import React from 'react';
import { BrowserRouter as Router, HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { FilmScreen } from '../components/FilmScreen';
import { FilmsScreen } from '../components/FilmsScreen';

export const AppRouter = () => {
	return (
		<Router>
			<div className="main__container">
				<Switch>
					<HashRouter>
						<Route exact path="/" component={FilmsScreen} />
						<Route exact path="/film/:filmId" component={FilmScreen} />
						<Redirect to="/" />
					</HashRouter>
				</Switch>
			</div>
		</Router>
	);
};
