import React, { useContext, useEffect, useState } from 'react';
import { getFilmsByRegex } from '../helpers/FilmsHelper';
import { Autocomplete } from './Autocomplete';
import { FilmItem } from './FilmItem';
import { FilmsContext } from './FIlmsContext';

export const FilmsScreen = () => {
	const { films, loading } = useContext(FilmsContext);
	const [filmsFiltered, setFilmsFiltered] = useState([]);

	useEffect(() => {
		setFilmsFiltered(getFilmsByRegex('', films));
	}, [films]);
	return (
		<>
			{
				loading && (
					<>
						<div className="loading">
							<img src="https://i.gifer.com/origin/62/6207a5ce52cc8164c1b10a4e460d6df3_w200.gif" title="loading gif" />
						</div>
					</>)
			}
			{
				<>
					<Autocomplete data={films} />
					{
						filmsFiltered?.map(film => (
							<FilmItem key={film?.id} {...film}></FilmItem>
						))
					}
				</>
			}
		</>
	);
};
