import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer'
import userReducer from './userReducer'

//Combinar los reducers que vas usar
export default combineReducers({
    moviesReducer, userReducer
    });