import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getFilmById } from '../helpers/FilmsHelper';
//	import { useFetchFilm } from '../hooks/useFetchFilm';
import { FilmsContext } from './FIlmsContext';

export const FilmScreen = () => {
	const { filmId } = useParams();
	const { films, loading } = useContext(FilmsContext);
	const film = getFilmById(filmId, films);
	return (
		<>
			{
				loading && (
					<div className="loading">
						<img src="https://i.gifer.com/origin/62/6207a5ce52cc8164c1b10a4e460d6df3_w200.gif" title="loading gif" />
					</div>)
			}
			{
				film
					? (
						<>
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
					)
					: (
						<div className="film_not_found">
							<img src="https://i.pinimg.com/564x/10/ce/21/10ce2159687d0e034a3e8f5a7db7f07c.jpg" title="not-found" />
							<p>
								Ops! nothing to see here
							</p>
							<div className="card_link_container">
								<Link to="/" className="card_link">Back</Link>
							</div>
						</div>

					)
			}
		</>
	);
};
