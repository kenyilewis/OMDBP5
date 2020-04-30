import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="col-xs-2">
      <sidebar>
  
        <hr />
        <section>
          <h4 className="text-muted">PLAYLISTS</h4>
          <ul className="list-unstyled">
            {/* {
              movies.map(movie => {
                return (
                  <li key={movie.id} className="playlist-item menu-item">
                    <Link to={`/playlists/${movie.Title}`}>{movie.Plot}</Link>
                  </li>
                );
              })
            } */}
          </ul>
          <h4>
            <Link className="btn btn-primary btn-block" to="/login">
              <span className="glyphicon glyphicon-plus"></span> Favoritos
            </Link>
          </h4>
        </section>
      </sidebar>
    </div>
);