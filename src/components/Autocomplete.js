import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getFilmsByRegex } from '../helpers/FilmsHelper';
import { useHistory } from 'react-router-dom';

export const Autocomplete = ({ data }) => {
	const history = useHistory();
	const [filteredResults, updateFilteredResults] = useState([]);
	const [displayResults, updateDisplayResults] = useState(true);
	const [focusIndex, updateFocusIndex] = useState(0);
	const linkRefs = [];
	const keys = {
		ENTER: 13,
		UP: 38,
		DOWN: 40
	};

	useEffect(() => {
		updateFilteredResults(getFilmsByRegex('', data));
	}, [data]);

	const updateSearch = (e) => {
		const searchTerm = e.target.value;
		console.log(e.target.value);
		console.log(searchTerm);
		if (searchTerm === '') {
			updateDisplayResults(true);
		} else {
			updateDisplayResults(false);
		}

		updateFilteredResults(getFilmsByRegex(searchTerm, data));
	};

	const hideAutoSuggest = (e) => {
		e.persist();
		if (e.relatedTarget && e.relatedTarget.className === 'autocomplete_link') {
			return;
		}
		updateDisplayResults(true);
		updateFocusIndex(-1);
	};

	const handleNavigation = (e) => {
		switch (e.keyCode) {
		case keys.ENTER:
			if (focusIndex !== -1) {
				history.push(`./film/${linkRefs[focusIndex]}`);
			}
			hideAutoSuggest(e);
			break;
		case keys.UP:
			if (focusIndex > -1) {
				updateFocusIndex(focusIndex - 1);
			}
			break;
		case keys.DOWN:
			if (focusIndex < filteredResults.length - 1) {
				updateFocusIndex(focusIndex + 1);
			}
			break;
		}
	};

	const SearchResults = () => {
		return (
			<>
			</>
		);
	};

	return (
		<section className="autocomplete">
			<input type="text"
				placeholder="Search your film..."
				className="autocomplete_input"
				onChange={updateSearch}
				onKeyDown={handleNavigation} />
			<ul className="autocomplete_suggestions">
				{!displayResults &&
					filteredResults.map((article, index) => (
						<li key={index} className={focusIndex === index ? 'autocomplete_suggestion_active' : null}>
							<a href={`./film/${article.id}`} className="autocomplete_link"
								ref={() => { linkRefs[index] = article.id; }}>
								{article.title}
							</a>
						</li>
					))
				}
			</ul>
			<SearchResults />
		</section>
	);
};

Autocomplete.propTypes = {
	data: PropTypes.array
};
