import React from 'react';
import { useFetch } from '../hooks/useFetchFilms';
import { FilmItem } from './FilmItem';

export const FilmsScreen = () => {
	const { films, loading } = useFetch();
	return (
		<>
			{
				loading && (
					<div className="loading">
						<img src="https://i.gifer.com/origin/62/6207a5ce52cc8164c1b10a4e460d6df3_w200.gif" title="loading gif"/>
					</div>)
			}
			{
				films?.map(film => (
					<FilmItem key={film?.id} {...film}></FilmItem>
				))
			}
		</>
	);
};
