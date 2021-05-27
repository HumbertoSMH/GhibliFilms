import React, { useContext } from 'react';
import { FilmItem } from './FilmItem';
import { FilmsContext } from './FIlmsContext';

export const FilmsScreen = () => {
	const { films, loading } = useContext(FilmsContext);
	return (
		<>
			{
				loading && (
					<div className="loading">
						<img src="https://i.gifer.com/origin/62/6207a5ce52cc8164c1b10a4e460d6df3_w200.gif" title="loading gif" />
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
