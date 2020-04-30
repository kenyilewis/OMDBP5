import { FETCH_MOVIES, FETCH_MOVIE, FETCH_FAVOURITE_MOVIE} from '../constants';

const initialState = {
    movies: [],
    movie: {}
}

export default (state = initialState, action ) => {
    switch (action.type){
        case FETCH_MOVIES: {
            return Object.assign({}, state, { movies: action.movies})
        }
        case FETCH_MOVIE : {
            return Object.assign({}, state, {movie : action.movie})
        } 
        case FETCH_FAVOURITE_MOVIE: {
            return Object.assign({}, state, { movie : action.favouriteMovies })
        }
        default:
        return state;
    }
}