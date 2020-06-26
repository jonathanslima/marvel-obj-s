const INITIAL_STATE = {
	data: ''
}

function HeroesReducer(state = INITIAL_STATE, action){
	switch(action.type){
		case 'UPDATE':
			return {
				...state, 
				data: action.data
			};

		default:
			return state;
	}
}

export default HeroesReducer;