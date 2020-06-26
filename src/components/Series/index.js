import React, { useEffect, useState } from "react";
import cryptData from "../../config/cripto";
import load from '../../assets/load.gif'
import './series.scss';

function Series() {
	const [dataSeries, setDataSeries] = useState({ ds: [] });
	const [counter, setCounter] = useState(0);
	const apibase = 'https://gateway.marvel.com:443/v1/public/characters';
	const idHero = window.location.href.split('?')[1];

	const details = async ()=>{
		let data = cryptData();
		await fetch(`${apibase}/${idHero}/series?apikey=${data.apiKey}`).then(res => res.json())
			.then(res => {
				setDataSeries(res)
			})
	} 

	useEffect(()=>{
		details();
	}, [counter])
	
  return (
    <>
			<section className="list-complete-series">
				<header className="aligned-text center">
					<h1>Séries</h1>
				</header>

				<ul className="list-all-series">
				{dataSeries.data ? 
					(
						dataSeries.data.results.length == 0 ?
							<li key="0" className="event">Sem séries</li>
						: 
						dataSeries.data.results.map((item, index)=>{
							return (
								<li key={index} className="event">
									<div className="img">
										<img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} 
										alt={item.title}/>
									</div>
									<span>{item.title}</span>
								</li>
							)
						})
					) 
					: <div className="text-center"><img src={load} alt="loading"/></div>
					}
				</ul>
			</section>
    </>
  );
}

export default Series;
