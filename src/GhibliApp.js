import React from 'react';

import { FilmsContext } from './components/FIlmsContext';
import { useFetch } from './hooks/useFetchFilms';
import { AppRouter } from './router/AppRouter';

export const GhibliApp = () => {
	const { films, loading } = useFetch();

	return (
		<>
			<div className="header">
				<img src="https://cdn.worldvectorlogo.com/logos/studio-ghibli-logo.svg" className="header__img" title="logo" />
			</div>
			<div className="main">
				<FilmsContext.Provider value={{ films, loading }}>
					<AppRouter></AppRouter>
				</FilmsContext.Provider>
			</div>
		</>
	);
};
