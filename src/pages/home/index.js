import React from 'react';
import './home.scss';

import Header from '../../components/Header';
import Search from '../../components/Search';
import Card from '../../components/Card';

function home() {
	return (
		<>
			<Header />
			<div className="container">
				<div className="aligned-text">
					<h2 className="title"><b>Busca de personagens</b></h2>
				</div>
				<Search />
				<Card />
			</div>
		</>
	);
}

export default home;