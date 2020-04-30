import React, { Component } from 'react';

export default ({ movie }) => (
  <div>
    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading"> {movie.Title} <br/><span className="text-muted">{movie.Genre}</span></h2>
        <p className="lead">{movie.Plot}</p>
      </div>
      <div className="col-md-5">
        <img src={movie.Poster} alt="movie XD"/>
      </div>
    </div>
  </div>

);                   