import React from 'react';
import './header.scss';
import logo from '../../assets/objective-solutions.png';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className="header">
			<div className="logo">
				<Link to="/"><img src={logo} alt="Code Hero"/></Link>
			</div>

			<div className="info">
				<div className="info-id">
					<span className="name">Jonathan Lima</span>
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