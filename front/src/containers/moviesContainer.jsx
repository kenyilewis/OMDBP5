
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../components/movies'
import {showMovie} from '../store/actions/action_creators'

class Movies extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
        
    handleClick(id){
        this.props.showMovie(id);
        this.props.history.push(`/movies/${id}`)
    }

    render() {
        return (
            <Page movies={this.props.movies} 
            handleClick = {this.handleClick}
            />
        );
    }
}

const mapStateToProps = state => ({
    movies: state.moviesReducer.movies
})


const mapDispatchToProps = dispatch => ({
    showMovie: (id) => dispatch(showMovie(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Movies);