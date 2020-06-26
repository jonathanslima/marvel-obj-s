import React from 'react';
import './search.scss'

function Search() {
	return (
		<div className="search text-center">
			<h2 className="title-search"><b>Nome do personagem</b></h2>

			<div className="character-search-block">
				<input type="text" id="character" className="character" placeholder="Search" /> 
				<i className="icon"><span></span> <span></span></i>
			</div>
		</div>
	)
}

export default Search;