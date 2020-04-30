import React, { Component } from 'react';
import { connect } from 'react-redux';
import Register from '../components/Register';
import { registerUser, validateUser } from '../store/actions/action_creators'

class RegisterContainer extends Component {
  constructor(props) {
    super(props),
      this.state = {
        name: "",
        email: "",
        password: ""
      }
    this.handleChanges = this.handleChanges.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChanges(e) {
    e.preventDefault()
    if (e.target.name === "name") this.setState({ name: e.target.value });
    if (e.target.name === "email") this.setState({ email: e.target.value });
    if (e.target.name === "password") this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    e.preventDefault()
    this.state.name && this.state.email && this.state.password && this.props.registerUser(newUser)
      .then(() => {
          const user = {
            email: this.state.email,
            password: this.state.password
          }
          this.props.validateUser(user)
          this.props.history.push('/movies')
      })

  }

  render() {
    return (
      <Register
        handleSubmit={this.handleSubmit}
        handleChanges={this.handleChanges}
      />
    );
  }

}

const mapDispatchToProps = dispatch => ({
  registerUser: (newUser) => dispatch(registerUser(newUser)),
  validateUser: (user) => dispatch(validateUser(user))



});

export default connect(null, mapDispatchToProps)(RegisterContainer);