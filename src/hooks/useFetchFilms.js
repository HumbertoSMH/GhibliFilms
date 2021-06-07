import { useState, useEffect } from 'react';
import { API_URL, CONFIG_FETCH_GET, getUrlPoster } from '../configuration/ApiConfiguration';

export const useFetch = () => {
	const [loading, setLoading] = useState(true);
	const [films, setFilms] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(API_URL, CONFIG_FETCH_GET)
			.then(resp => resp.json())
			.then(data => {
				data.forEach(film => {
					fetch(getUrlPoster(film.title))
						.then(response => response.json())
						.then(posterRes => {
							film = { ...film, poster: posterRes.Poster === undefined ? 'https://i.pinimg.com/564x/10/ce/21/10ce2159687d0e034a3e8f5a7db7f07c.jpg' : posterRes.Poster };
							setFilms(films => [...films, film]);
						});
				});
			});
		setLoading(false);
		setError(null);
	}, [API_URL]);

	return {
		loading,
		films,
		error
	};
};
