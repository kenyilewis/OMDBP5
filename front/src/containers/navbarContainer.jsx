import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../components/navbar';
import { showMovies, endSession } from '../store/actions/action_creators';


class NavbarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleLogOutSession = this.handleLogOutSession.bind(this)
    }

    handleLogOutSession(e) {
        e.preventDefault();
        this.props.endSession();
        this.props.history.push("/logout");
        window.localStorage.clear();
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault()       
        this.state.text && this.props.showMovies(this.state.text)
        this.props.history.push('/movies')
        this.setState({text: ''})
    }


    render() {
        return (<div>
            <Page
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                text={this.state.text}
                handleLogOutSession= {this.handleLogOutSession}
                currentUser = { this.props.currentUser}
                isLoggedIn={this.props.isLoggedIn}
            />
        </div>);
    }
}

const mapStateToProps = state => ({
    result: state.moviesReducer.movies,
    currentUser: state.userReducer.currentUser,
    isLoggedIn: state.userReducer.isLoggedIn
})


const mapDispatchToProps = dispatch => ({
    showMovies: (data) => dispatch(showMovies(data)),
    endSession: () => dispatch(endSession())

})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
