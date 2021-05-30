import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const FilmItem = ({
	id,
	rt_score: score,
	original_title_romanised: romanised,
	original_title: originalTitle,
	title,
	description,
	poster
}) => {
	return (
		<div className="col-sm-12 col-md-6 col-4">
			<div className="card" >
				<div className="card_picture" style={{ backgroundImage: `url(${poster})` }}></div>
				<div className="card_info">
					<div className="card_rate">
						<i className="far fa-star"></i>
						<span>{score}</span>
					</div>
				</div>
				<h3 className="card_title">{title}</h3>
				<h4 className="card_title_original">{romanised}<small>({originalTitle})</small></h4>
				<p className="card_text">
					{description}
				</p>
				<div className="card_link_container">
					<Link to={`film/${id}`} className="card_link" >More info...</Link>
				</div>
			</div>
		</div>
	);
};

FilmItem.propTypes = {
	id: PropTypes.string,
	running_time: PropTypes.string,
	rt_score: PropTypes.string,
	release_date: PropTypes.string,
	original_title_romanised: PropTypes.string,
	original_title: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	poster: PropTypes.string
};
