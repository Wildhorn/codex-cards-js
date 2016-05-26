import React from 'react';
import { Link } from 'react-router';
import Search from './Search';


var HomePage = (props) => {
	return (
		<div className="home-page">

			<div>
				<h1>Codex Card Rulings</h1>
			</div>

			<Search data={props.route.data} />

			<div className="banners">
				<div className="banner starter-banner">
					<Link to="/color/neutral">Bashing vs. Finesse</Link>
				</div>

				<div className="banner core-banner">
					<span><Link to="/color/red">Blood Anarchs</Link></span>
					<span> vs. </span>
					<span><Link to="/color/green">Moss Sentinels</Link></span>
				</div>

				<div className="banner core-banner">
					<span><Link to="/color/blue">Flagstone Dominion</Link></span>
					<span> vs. </span>
					<span><Link to="/color/black">Blackhand Scourge</Link></span>
				</div>

				<div className="banner core-banner">
					<span><Link to="/color/white">Whitestar Order</Link></span>
					<span> vs. </span>
					<span><Link to="/color/purple">Vortoss Conclave</Link></span>
				</div>

				<div className="banner">
					<span><Link to="/card/random">Random Card</Link></span>
				</div>
			</div>

		</div>
	);
};

export default HomePage;
