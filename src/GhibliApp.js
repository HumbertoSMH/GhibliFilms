import React from 'react';

import { FilmsContext } from './components/FIlmsContext';
import { useFetch } from './hooks/useFetchFilms';
import { AppRouter } from './router/AppRouter';

import GhibliLogo from './studio-ghibli-logo.svg';

export const GhibliApp = () => {
	const { films, loading } = useFetch();

	return (
		<>
			<div className="header">
				<img src={GhibliLogo} className="header__img" />
			</div>
			<div className="main">
				<FilmsContext.Provider value={{ films, loading }}>
					<AppRouter></AppRouter>
				</FilmsContext.Provider>
			</div>
		</>
	);
};
