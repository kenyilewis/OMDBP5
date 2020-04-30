import React from 'react';
import { Link } from 'react-router-dom';

export default ({movies, handleClick}) => (
    <div>
      <br/>
    <h3>Películas </h3>
    <br/>
    <div className="row">
      
      {movies ? movies.map(movie => (
        <div key={movie.imdbID} className="col-xs-4 imagen"  onClick= {()=>handleClick(movie.imdbID)}>
          <Link className="thumbnail" to={`/movie/${movie.Title}`}>
            <img src={movie.Poster} />
            <div className="caption">
              <h5>
                <span>{movie.Plot}</span>
              </h5>
            </div>
          </Link>
        </div>
      )) : "No hay peliculas Guey"}
    </div>
  </div>
);                   