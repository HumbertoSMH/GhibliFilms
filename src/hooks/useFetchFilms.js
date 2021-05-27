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
				console.log('me llmaron');
				data.forEach(film => {
					fetch(getUrlPoster(film.title))
						.then(response => response.json())
						.then(posterRes => {
							film = { ...film, poster: posterRes.Poster };
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
