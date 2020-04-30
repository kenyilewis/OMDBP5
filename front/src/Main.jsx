import React, { Component } from 'react';
import { Route, Switch, Redirect, } from 'react-router-dom';
import NavbarContainer from './containers/navbarContainer';
import MoviesContainer from './containers/moviesContainer';
import MoviesDetailContainer from './containers/movieDetailContainer';
import RegisterContainer from './containers/registerContainer';
import LoginContainer from './containers/loginContainer';
import Logout from './components/despedida'
// import Sidebar from './containers/sidebarContainer';
import { validateSession } from './store/actions/action_creators'
import { connect } from 'react-redux';


class Main extends Component {
    constructor(props){
        super(props)
    }

    // componentDidMount() {
    //     this.props.validateSession();
    // }

    render() {
        return (
            <div className="container-fluid">
                <Route component ={NavbarContainer} />
                <Switch>
                    <Route exact path='/movies' component={MoviesContainer} />
                    <Route path='/movies/:title' component={MoviesDetailContainer} />
                    <Route path='/register' component={RegisterContainer}/>
                    <Route path='/login' component={LoginContainer} />
                    <Route path='/logout' component={Logout} />
                    <Route path="/user" component={RegisterContainer}/>
                    <Redirect from="/" to ="/movies"/>
                </Switch>
            </div>
        );
    }

}

// const mapDispatchToProps = dispatch => ({
//     validateSession : () => dispatch(validateSession())
// }) 


export default (Main);

// export default connect(null, mapDispatchToProps)(Main);
