
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../components/movieDetail'

class Movie extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Page movie = {this.props.movie}
            />
            );
    } 
}

const mapStateToProps = state => ({
    movie : state.moviesReducer.movie
})


const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Movie);