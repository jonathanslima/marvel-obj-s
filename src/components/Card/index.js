import React, { useEffect, useState } from "react";
import './card.scss';
import cryptData from "../../config/cripto";
import { Link } from 'react-router-dom';
import load from '../../assets/load.gif'
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from 'react-redux';

function Card() {
	const [characters, setCharacters] = useState({ hits: [] });
	const [activePage, setActivePage] = useState(1);
	const dispatch = useDispatch();

	const callHeroes = async (lim = 10, off = 0, crypt) => {
		let data = crypt();
		let limit = lim;
		let offset = off;
		const apiCall = await fetch(
			`https://gateway.marvel.com/v1/public/characters?limit=${limit}&offset=${offset}&apikey=${data.apiKey}&ts=${data.timestamp}&hash=${data.hash}`
		);

		const heroes = await apiCall.json();
		setCharacters(heroes.data);
		dispatch({
			type: 'UPDATE',
			data: heroes.data.results
		})
	};

	useEffect(() => {
		callHeroes(10, 0, cryptData)
	}, []);

	function handlePageChange(pageNumber) {
		let offset = pageNumber === 1 ? 0 : ((pageNumber * 10) - 10);
		setActivePage(pageNumber);
		callHeroes(10, offset, cryptData)
	}

	return (
		<>
			<div className="titles-list">
				<span className="title-list title-list-1">Personagem</span>
				<span className="title-list title-list-2">Séries</span>
				<span className="title-list title-list-3">Eventos</span>
			</div>
			<ul className="list-hero">
				{
					characters.results ?
						characters.results.map((item, index) => {
							return (
								<li key={item.id} data-id={item.id} className="hero-card">
									<div className="hero-id">
										<Link to={`/details?${item.id}`}>
											<picture className="hero-img">
												<img srcSet={`${item.thumbnail.path.replace(/http:/, 'https:')}.${item.thumbnail.extension}`} alt={item.name} />
											</picture>
										</Link>


										<h3 className="name">
											<Link to={`/details?${item.id}`}><b>{item.name}</b></Link>
										</h3>
									</div>

									<ul className="list-series">
										{item.series ?
											item.series.items.map((serie, index) => {
												return (
													<li key={index}>{serie.name}</li>
												)
											})
											: null
										}
									</ul>

									<ul className="list-events">
										{item.events ?
											item.events.items.map((event, index) => {
												return (
													<li key={index}>{event.name}</li>
												)
											})
											: null
										}
									</ul>
								</li>
							)
						})
						: <div className="center"><img src={load} alt="" /></div>
				}

			</ul>

			<div>
				<Pagination
					activePage={activePage}
					itemsCountPerPage={10}
					totalItemsCount={1493}
					pageRangeDisplayed={3}
					onChange={handlePageChange}
				/>
			</div>
		</>
	);
}

export default Card;