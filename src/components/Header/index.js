import React from 'react';
import './header.scss';
import logo from '../../assets/objective-solutions.png';

function Header() {
	return (
		<header className="header">
			<div className="logo">
				<img src={logo} alt="Code Hero"/>
			</div>

			<div className="info">
				<div className="info-id">
					<span className="name">Nome do candidato</span>
					<div className="exam">Teste de Front End</div>
				</div>
				<div className="info-square">
					<span className="square">CB</span>
				</div>
			</div>

		</header>
	)
}

export default Header;