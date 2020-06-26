import React, { useEffect, useState } from "react";
import './card.scss';
import cryptData from "../../config/cripto";
import {Link} from 'react-router-dom';
import load from '../../assets/load.gif'

function Card() {
	const [characters, setCharacters] = useState({ hits: [] });
	const [count, setCounter] = useState(0);
	const [total, setTotal] = useState({
		totalHeroes: 1493,
		offset: 0,
		limit: 10,
		pag: [1, 2, 3]
	});
		
	const callHeroes = async (lim = 10, off = 0, crypt)=>{
		let data = crypt();
		let limit = lim;
		let offset = off;
    const apiCall = await fetch(
      `http://gateway.marvel.com/v1/public/characters?limit=${limit}&offset=${offset}&apikey=${data.apiKey}&ts=${data.timestamp}&hash=${data.hash}`
		);

		const heroes = await apiCall.json();
		setCharacters(heroes.data);
	};

  useEffect(() => {
		// callHeroes(10, 0,cryptData)
	}, [count]);

	function updateList(e){
		let init = e.target.dataset.init;
		// e.target.classList.add('active')
		// setTotal({...total, pag: [2,3,4]})
		console.log(total.pag)
		
		if(init === 'prev'){
			if(total.pag[0] !== 1){
				setTotal({...total, pag: [
					(total.pag[0] - 1), 
					(total.pag[1] - 1), 
					(total.pag[2] - 1) 
				]})
			}
		}else if(init === 'next'){
			if(total.pag[2] !== 10){
				setTotal({...total, pag: [
					(total.pag[0] + 1), 
					(total.pag[1] + 1), 
					(total.pag[2] + 1) 
				]})
			}
		}else if(init === 'init'){
			if(total.pag[2] !== 10){
				setTotal({...total, pag: [
					(total.pag[0] + 1), 
					(total.pag[1] + 1), 
					(total.pag[2] + 1) 
				]})
			}
		}
		
	}

	return (
		<>
		<div className="titles-list">
			<span className="title-list title-list-1">Personagem</span>
			<span className="title-list title-list-2">Séries</span>
			<span className="title-list title-list-3">Eventos</span>
		</div>
		<ul className="list-hero">
			{/* {
				characters.results ? 
				characters.results.map((item, index)=> {
					return(
						<li key={item.id} className="hero-card">
							<div className="hero-id">
								<Link to={`/details?${item.id}`}>
									<picture className="hero-img">
										<img srcSet={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.name} />
									</picture>
								</Link>

								
								<h3 className="name">
									<Link to={`/details?${item.id}`}><b>{item.name}</b></Link>
								</h3>
							</div>

							<ul className="list-series">
								{item.series ? 
								item.series.items.map((serie, index) => {
									return(
										<li key={index}>{serie.name}</li>
									)
								})
								: null
								}
							</ul>

							<ul className="list-events">
							{item.events ? 
								item.events.items.map((event, index) => {
									return(
										<li key={index}>{event.name}</li>
									)
								})
								: null
								}
							</ul>
						</li>
					)
				})
				: <div className="center"><img src={load} alt=""/></div>
			} */}
			
		</ul>

		<div className="pagination">
			<ul className="items-paginator" onClick={(e)=>{updateList(e)}} >
				<li data-init="first" onClick={()=>{callHeroes(10, 0, cryptData)}} className="item"> &lt;&lt; </li>
				<li data-init="prev" className="item">&lt;</li>
				<li data-init="init" className="item">{total.pag[0]}</li>
				<li data-init="midd" className="item">{total.pag[1]}</li>
				<li data-init="post" className="item">{total.pag[2]}</li>
				<li data-init="next" className="item">&gt;</li>
				<li data-init="last" className="item">&gt;&gt;</li>
			</ul>
		</div>

		{/* <button onClick={()=>{callHeroes(10, 500, cryptData)}}>oi</button> */}
		
		</>
	);
}

export default Card;