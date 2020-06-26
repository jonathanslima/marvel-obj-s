import React from 'react';
import './search.scss';
import {useDispatch, useSelector} from 'react-redux';

function Search() {
	const dispatch = useDispatch();
	let state = useSelector(state => state.data);
	
	const filterHeroes = function (e){
		let exp = new RegExp(e.target.value, 'i');

		state.filter((item)=>{
			if(exp.test(item.name)){
				[].slice.call(document.querySelectorAll('.hero-card')).map(line => {
					if(line.dataset.id == item.id){
						line.style.display = 'flex'
					}
				})
			}else{
				
				[].slice.call(document.querySelectorAll('.hero-card')).map(line => {
					if(line.dataset.id == item.id){
						line.style.display = 'none'
					}
				})
			}
		})
	}

	return (
		<div className="search text-center">
			<h2 className="title-search"><b>Nome do personagem</b></h2>

			<div className="character-search-block">
				<input onChange={filterHeroes} type="text" id="character" className="character" placeholder="Search" /> 
				<i className="icon"><span></span> <span></span></i>
			</div>
		</div>
	)
}

export default Search;