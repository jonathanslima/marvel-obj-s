import { createStore } from 'redux';
import HeroesReducer from './heroesReducer';

const store = createStore(HeroesReducer)

export default store