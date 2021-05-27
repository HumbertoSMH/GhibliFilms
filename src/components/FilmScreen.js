import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFetchFilm } from '../hooks/useFetchFilm';

export const FilmScreen = () => {
	const { filmId } = useParams();
	const { film, loading } = useFetchFilm(filmId);
	return (
		<>
			{
				loading && (
					<div className="loading">
						<img src="https://i.gifer.com/origin/62/6207a5ce52cc8164c1b10a4e460d6df3_w200.gif" title="loading gif" />
					</div>)
			}
			<div className="col-sm-12 col-push-1 col-4 mt-25">
				<img src={film?.poster} title="img" className="film_picture" />
			</div>
			<div className="col-sm-12 col-6 mt-25">
				<div className="card">
					<div className="card_info">
						<div className="card_time">
							<i className="far fa-clock"></i>
							<span>{film?.running_time}</span>
						</div>
						<div className="card_rate">
							<i className="far fa-star"></i>
							<span>{film?.rt_score}</span>
						</div>
						<div className="card_date">
							<i className="fas fa-calendar-alt"></i>
							<span>{film?.release_date}</span>
						</div>
					</div>
					<h3 className="card_title">{film?.title}</h3>
					<h4 className="card_title_original_full">{film?.original_title_romanised}<small>({film?.original_title})</small></h4>
					<p className="card_text_full">
						{film?.description}
					</p>
					<p className="card_director">
						<strong>Director:</strong> {film?.director}
					</p>
					<p className="card_producer">
						<strong>Producer:</strong> {film?.producer}
					</p>
					<div className="card_link_container">
						<Link to="/" className="card_link">Back</Link>
					</div>
				</div>
			</div>
		</>
	);
};
