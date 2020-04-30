import React from 'react';
import { Link } from 'react-router-dom';

export default ({ handleSubmit, handleChanges,  }) => (

    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-img-left d-none d-md-flex">
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Register</h5>
                <form  className="form-signin" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input onChange={handleChanges} type="text" className="form-control" placeholder="Name" name="name"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input onChange={handleChanges} type="email" name="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={handleChanges} type="password" name="password" className="form-control" placeholder="Password" />
                  </div>
                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" value="Submit">Register</button>
                  <Link className="d-block text-center mt-2 small" to='/login'>Login</Link>

                  <hr className="my-4" />
                  {/* <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign up with Google</button>
              <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign up with Facebook</button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

