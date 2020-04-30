import React from "react"
import { Link } from 'react-router-dom'

export default ({ handleLogOutSession, currentUser, isLoggedIn, handleSubmit, handleChange, text }) => (
  <div>
    <nav className="navbar navbar-light bg-light">
      <form className="form-inline" onSubmit={handleSubmit}>
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange} value={text} />
        <button className="btn btn-dark" type="submit">Search</button>
      </form>
      <div>
      
          {isLoggedIn ? 
          <div>
            <h3> Hola {currentUser.name}  </h3> <Link to="/logout">
              <button className="btn btn-outline-success" type="button" onClick={handleLogOutSession}>Logout </button>
            </Link>
          </div>
          :
          <div>
            <Link to="/register">
              <button className="btn btn-outline-success" type="button">Register </button>
            </Link>
            <Link to="/login">
              <button className="btn btn-outline-success" type="button">Login </button>
            </Link>
          </div>
    }
      </div>
    </nav>
  </div>


);












