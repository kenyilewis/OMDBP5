import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../components/login/index';
import { validateUser } from '../store/actions/action_creators'
import { withRouter } from "react-router-dom";


class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        if (this.state.error) {
            this.props.handleSubmit()
        }
    }

    handleChange(e) {
        if (e.target.name === 'email') this.setState({ email: e.target.value });
        if (e.target.name === 'password') this.setState({ password: e.target.value })
    }

    handleSubmit(e) {
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        e.preventDefault();
        this.props.validateUser(user)
            .then((user) => {
                if (this.props.isLoggedIn) {
                    console.log("user del axios SUBMIT", this.props)
                    return this.props.history.push('/movies')
                }
            })
    }

    render() {
        return (
            <Login
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                isLoggedIn={this.props.isLoggedIn}
                currentUser = {this.props.currentUser}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    isLoggedIn: state.userReducer.isLoggedIn,
    currentUser : state.userReducer.currentUser
});

const mapDispatchToProps = dispatch => ({
    validateUser: (user) => dispatch(validateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);