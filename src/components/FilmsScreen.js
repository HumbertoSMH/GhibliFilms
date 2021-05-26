import React from 'react';

export const FilmsScreen = () => {
	const movies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	return (
		<>
			{
				movies.map(i => (
					<div className="col-sm-12 col-md-6 col-4" key={i}>
						<div className="card" >
							<div className="card_picture" style= { { backgroundImage: 'url(https://images-na.ssl-images-amazon.com/images/I/51Mg8os52AL._AC_.jpg)' } }></div>
							<div className="card_info">
								<div className="card_time">
									<i className="far fa-clock"></i>
									<span>105</span>
								</div>
								<div className="card_rate">
									<i className="far fa-star"></i>
									<span>9.8</span>
								</div>
								<div className="card_date">
									<i className="fas fa-calendar-alt"></i>
									<span>1988</span>
								</div>
							</div>
							<h3 className="card_title">My Neighbor Totoro</h3>
							<h4 className="card_title_original">Tonari no Totoro<small>(となりのトトロ)</small></h4>
							<p className="card_text">
							Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.
							</p>
							<div className="card-footer">

							</div>
						</div>
					</div>
				))
			}

		</>
	);
};
