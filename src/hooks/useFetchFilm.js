import { useState, useEffect } from 'react';
import { API_URL, CONFIG_FETCH_GET, getUrlPoster } from '../configuration/ApiConfiguration';

export const useFetchFilm = (id) => {
	const [loading, setLoading] = useState(true);
	const [film, setFilm] = useState({});
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(`${API_URL}/${id}`, CONFIG_FETCH_GET)
			.then(resp => resp.json())
			.then(data => {
				fetch(getUrlPoster(data.title), CONFIG_FETCH_GET)
					.then(response => response.json())
					.then(posters => {
						setFilm({ ...data, poster: posters.Poster });
					});
				setLoading(false);
				setError(null);
			});
	}, [id]);

	return {
		loading,
		film,
		error
	};
};
