export const getFilmById = (id, films) => {
	return films.find(film => film.id === id);
};

export const getFilmsByRegex = (regex, films) => {
	regex = regex.toLowerCase();
	if (regex === '') {
		return films;
	}
	return films.filter(film => film.title.toLowerCase().includes(regex) || film.description.toLowerCase().includes(regex));
};
