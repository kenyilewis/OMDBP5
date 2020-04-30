import { FETCH_MOVIES, FETCH_MOVIE, LOG_IN_USER, LOG_OUT_USER, FETCH_FAVOURITE_MOVIE } from '../constants'
import axios from 'axios';

const findResults = (movies) => ({
  type: FETCH_MOVIES,
  movies
});

const findMovie = (movie) => ({
  type: FETCH_MOVIE,
  movie
});

const logInUser = (user) => ({
  type: LOG_IN_USER,
  user
});

const logOutUser = () => ({
  type: LOG_OUT_USER
});

const findFavouritesMovies = () => ({
  type : FETCH_FAVOURITE_MOVIE
})


export const showMovies = (movies) => dispatch => {
  axios.get(`http://www.omdbapi.com/?s=${movies}&apikey=5d0b1989`)
    .then(res => {
      dispatch(findResults(res.data.Search))
    })
}

export const showMovie = (id) => dispatch => {
  axios.get(`http://www.omdbapi.com/?i=${id}&apikey=5d0b1989`)
    .then(res => {
      dispatch(findMovie(res.data))
    });
}

export const showFavourites = (movies) => dispatch => {
  return axios.get(`http://www.omdbapi.com/?i=${movies}&apikey=5d0b1989`)
    .then(res=> {
      dispatch(findFavouritesMovies(res.data.Search))
    })
}

export const registerUser = (newUserInfo) => dispatch => {
  return axios.post('/api/user/register', newUserInfo)
    .then(newUser => dispatch(logInUser(newUser.data)));
}

export const validateUser = (user) => dispatch => {
  return axios.post('/api/user/login', user)
    .then(userVerify => {
      dispatch(logInUser(userVerify.data))
    })
}

export const validateSession = () => dispatch => {
  return axios.get('/api/user/isLoggedIn')
    .then((user) => { dispatch(logInUser(user.data)) })
}

export const endSession = () => dispatch => {
  return axios.get('/api/user/logout')
    .then((msg) => { dispatch(logOutUser(msg)) })
}
