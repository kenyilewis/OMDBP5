import React from 'react';
import { Link } from 'react-router-dom';

export default ({ handleSubmit, handleChange, isLoggedIn, currentUser }) => (
  <div>
    {isLoggedIn ?
      <div>
        <h3> Hola {currentUser.name}  </h3> 
      </div>
      :
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-xl-9 mx-auto">
          <div className="card card-signin flex-row my-5">
            <div className="card-img-left d-none d-md-flex">
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">Login</h5>
              <form className="form-signin" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" onChange={handleChange} className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" onChange={handleChange} className="form-control" placeholder="Password" name="password" />
                </div>
                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" value="Submit">Login</button>
                <Link className="d-block text-center mt-2 small" to='/register'>Sign In</Link>
                <hr className="my-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
  </div> 

);