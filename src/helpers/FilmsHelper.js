export const getFilmById = (id, films) => {
	return films.find(film => film.id === id);
};

export const getFilmsByRegex = (regex, films) => {
	return films.filter(film => film.title.toLowerCase().includes(regex));
};
