import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/home';
import Details from './pages/details';

function routes(){
	return(
		<BrowserRouter>
			<Route exact path="/" component={Home}></Route>
			<Route exact path="/details" component={Details}></Route>
		</BrowserRouter>
	)
}

export default routes;